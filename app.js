'use strict';
(() => {
  const { verbs, families } = window.VERB_DATA;
  const $ = id => document.getElementById(id);
  const storageKey = 'verb-practice-v1';
  function readSaved() { try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { return {}; } }
  const saved = readSaved();
  const groups = [
    { id: 'abc', name: 'A → B → C', description: 'Три разные формы' },
    { id: 'abb', name: 'A → B → B', description: 'Вторая = третья' },
    { id: 'aba', name: 'A → B → A', description: 'Первая = третья' },
    { id: 'aaa', name: 'A → A → A', description: 'Формы совпадают' },
    { id: 'special', name: 'Особые случаи', description: 'Варианты и значения' }
  ];
  let group = groups.some(g => g.id === saved.group) ? saved.group : 'abc';
  let family = families.some(f => f.id === saved.family && f.group === group) ? saved.family : families.find(f => f.group === group).id;
  let flipped = new Set();
  let order = [];
  let queue = [];
  let activeId = null;
  let token = 0;
  const audio = new Audio();
  audio.preload = 'none';
  const explicitTheme = ['light', 'dark'].includes(saved.theme) ? saved.theme : null;
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = explicitTheme || (systemDark ? 'dark' : 'light');
  $('speed').value = ['0.8', '1'].includes(saved.speed) ? saved.speed : '1';
  function persist() {
    try { localStorage.setItem(storageKey, JSON.stringify({ group, family, speed: $('speed').value, theme: document.documentElement.dataset.theme })); } catch { /* Private browsing still supports all learning actions. */ }
  }
  function status(text) { $('status').textContent = text; }
  function currentVerbs() { return verbs.filter(v => v.family === family); }
  function stopAudio(message) {
    token++; queue = []; audio.pause(); activeId = null;
    $('stop').hidden = true;
    document.querySelectorAll('.listen.playing').forEach(b => b.classList.remove('playing'));
    if (message) status(message);
  }
  function audioError() { stopAudio('Не удалось воспроизвести запись. Проверь подключение и попробуй ещё раз.'); }
  async function playNext(playToken) {
    if (playToken !== token) return;
    const src = queue.shift();
    if (!src) { stopAudio('Прослушивание завершено'); return; }
    audio.src = window.VERB_AUDIO?.[src] || src;
    audio.playbackRate = Number($('speed').value);
    audio.onended = () => playNext(playToken);
    audio.onerror = () => { if (playToken === token) audioError(); };
    try { await audio.play(); } catch { if (playToken === token) audioError(); }
  }
  function playVerb(verb) {
    if (activeId === verb.id) { stopAudio('Звук остановлен'); return; }
    stopAudio();
    const back = flipped.has(verb.id);
    const clips = back ? [verb.audio?.past, verb.audio?.participle] : [verb.audio?.first];
    if (!clips.some(Boolean)) { status('Для этой формы отдельной записи пока нет'); return; }
    queue = clips.filter(Boolean);
    activeId = verb.id;
    const b = document.querySelector(`[data-id="${verb.id}"] .listen`);
    if (b) b.classList.add('playing');
    $('stop').hidden = false;
    status('Звучит: ' + (back ? `${verb.past} · ${verb.participle}` : verb.first));
    playNext(token);
  }
  function updateCard(article, verb) {
    const back = flipped.has(verb.id);
    article.classList.toggle('is-flipped', back);
    article.querySelector('.front').hidden = back;
    article.querySelector('.back').hidden = !back;
    const face = article.querySelector('.face');
    face.setAttribute('aria-pressed', String(back));
    face.setAttribute('aria-label', `${back ? 'Скрыть' : 'Показать'} формы: ${verb.first}, ${verb.meaning}`);
    article.querySelector('.flip-hint').textContent = back ? '↶ К первой форме' : '↻ Проверить себя';
    article.querySelector('.details').hidden = !back || !(verb.variants || verb.note);
    const available = back ? Boolean(verb.audio?.past || verb.audio?.participle) : Boolean(verb.audio?.first);
    const listen = article.querySelector('.listen');
    listen.disabled = !available;
    article.querySelector('.listen-label').textContent = available ? 'Слушать' : 'Без записи';
    listen.setAttribute('aria-label', available ? `Прослушать ${back ? 'вторую и третью формы' : 'первую форму'}: ${verb.first}` : `Нет отдельной записи: ${verb.first}`);
  }
  function progress() { $('progress').textContent = `Открыто ${currentVerbs().filter(v => flipped.has(v.id)).length} из ${currentVerbs().length} карточек`; }
  function renderCards() {
    const fragment = document.createDocumentFragment();
    const rows = order.length ? order.map(id => verbs.find(v => v.id === id)) : currentVerbs();
    rows.forEach(verb => {
      const article = $('card-template').content.firstElementChild.cloneNode(true);
      article.dataset.id = verb.id;
      article.classList.toggle('long-forms', Math.max(verb.past.length, verb.participle.length) > 6);
      article.querySelector('.front .word').textContent = verb.first;
      article.querySelector('.translation').textContent = verb.meaning;
      article.querySelector('.phonetic').textContent = verb.id === 'read' ? '/riːd/' : verb.id === 'lead' ? '/liːd/' : '';
      article.querySelector('.past').textContent = verb.past;
      article.querySelector('.participle').textContent = verb.participle;
      article.querySelector('.past-audio-label').textContent = verb.id === 'read' ? '/red/' : '';
      article.querySelector('.part-audio-label').textContent = verb.id === 'read' ? '/red/' : '';
      article.querySelector('.variant').textContent = verb.variants ? `Также допустимо (2 / 3): ${verb.variants}` : '';
      article.querySelector('.verb-note').textContent = verb.note;
      article.querySelector('.face').addEventListener('click', () => {
        if (activeId === verb.id) stopAudio();
        flipped.has(verb.id) ? flipped.delete(verb.id) : flipped.add(verb.id);
        updateCard(article, verb); progress();
      });
      article.querySelector('.listen').addEventListener('click', () => playVerb(verb));
      updateCard(article, verb);
      fragment.append(article);
    });
    $('cards').replaceChildren(fragment);
    $('empty').hidden = rows.length > 0;
    $('card-count').textContent = `${rows.length} ${plural(rows.length)}`;
    progress();
  }
  function plural(n) { const a = n % 10, b = n % 100; return a === 1 && b !== 11 ? 'карточка' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'карточки' : 'карточек'; }
  function render() {
    $('groups').replaceChildren(...groups.map(g => {
      const b = document.createElement('button'); b.className = 'group'; b.type = 'button';
      b.setAttribute('aria-pressed', String(group === g.id));
      const familyIds = families.filter(f => f.group === g.id).map(f => f.id);
      const n = verbs.filter(v => familyIds.includes(v.family)).length;
      const label = document.createElement('span'); const title = document.createElement('strong'); title.textContent = g.name;
      const sub = document.createElement('small'); sub.textContent = g.description; label.append(title, sub);
      const count = document.createElement('span'); count.className = 'n'; count.textContent = n; b.append(label, count);
      b.addEventListener('click', () => { stopAudio(); group = g.id; family = families.find(f => f.group === group).id; flipped.clear(); order = []; render(); persist(); });
      return b;
    }));
    $('family').replaceChildren(...families.filter(f => f.group === group).map(f => { const o = document.createElement('option'); o.value = f.id; o.textContent = f.name; return o; }));
    $('family').value = family;
    const f = families.find(f => f.id === family);
    $('family-title').textContent = f.name;
    $('pattern').textContent = f.pattern;
    const notes = {
      aaa: 'У read написание не меняется, а произношение меняется: /riːd/ → /red/ → /red/.',
      abb: 'Вторая и третья формы совпадают. Допустимые варианты видны на обороте; для незаписанных вариантов отдельной озвучки нет.',
      aba: 'Первая и третья формы совпадают. После второй формы возвращаемся к первой.',
      abc: 'Все три формы различаются. Учим небольшими семействами и замечаем общие изменения.',
      special: 'Учитывай значение и подлежащее. У can нет третьей формы; be able to — отдельная конструкция.'
    };
    $('group-note').textContent = notes[group];
    renderCards();
    status('Нажми на карточку, чтобы перевернуть');
  }
  $('family').addEventListener('change', e => { stopAudio(); family = e.target.value; flipped.clear(); order = []; render(); persist(); });
  $('reset').addEventListener('click', () => { stopAudio(); flipped.clear(); renderCards(); status('Все карточки лицом вверх'); });
  $('shuffle').addEventListener('click', () => {
    stopAudio(); order = currentVerbs().map(v => v.id);
    for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
    renderCards(); status('Карточки перемешаны');
  });
  $('speed').addEventListener('change', () => { audio.playbackRate = Number($('speed').value); persist(); });
  $('stop').addEventListener('click', () => stopAudio('Звук остановлен'));
  $('theme').addEventListener('click', () => { document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; persist(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopAudio(); });
  window.addEventListener('pagehide', () => stopAudio());
  render();
})();
