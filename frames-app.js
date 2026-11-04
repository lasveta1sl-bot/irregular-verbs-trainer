'use strict';
(() => {
 const {frames,cards}=window.FRAME_DATA;
 const $=id=>document.getElementById(id);
 const key='verb-frames-v1';
 let saved={};try{saved=JSON.parse(localStorage.getItem(key))||{}}catch{}
 let current=frames.some(f=>f.id===saved.frame)?saved.frame:'sv';
 let flipped=new Set(),order=[];
 const pref=(()=>{try{return JSON.parse(localStorage.getItem('verb-practice-v1'))||{}}catch{return {}}})();
 document.documentElement.dataset.theme=pref.theme||((window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light');
 function persist(){try{localStorage.setItem(key,JSON.stringify({frame:current}));const old=JSON.parse(localStorage.getItem('verb-practice-v1'))||{};old.theme=document.documentElement.dataset.theme;localStorage.setItem('verb-practice-v1',JSON.stringify(old))}catch{}}
 function selected(){return cards.filter(c=>c.frame===current)}
 function countText(n){return n+' '+(n%10===1&&n%100!==11?'карточка':n%10>=2&&n%10<=4&&(n%100<12||n%100>14)?'карточки':'карточек')}
 function progress(){$('progress').textContent=`Открыто ${selected().filter(c=>flipped.has(c.id)).length} из ${selected().length}`}
 function update(article,c){const open=flipped.has(c.id);article.classList.toggle('is-flipped',open);article.querySelector('.english').hidden=open;article.querySelector('.russian').hidden=!open;article.querySelector('.face').setAttribute('aria-pressed',String(open));article.querySelector('.face').setAttribute('aria-label',(open?'Показать английское предложение: ':'Показать перевод: ')+c.en);article.querySelector('.flip-hint').textContent=open?'↶ К английскому':'↻ Показать перевод'}
 function renderCards(){const rows=order.length?order.map(id=>cards.find(c=>c.id===id)):selected();const frag=document.createDocumentFragment();rows.forEach(c=>{const article=$('sentence-template').content.firstElementChild.cloneNode(true);article.dataset.verb=c.verb;const sentence=article.querySelector('.english .sentence');const target=c.verb==='be'?'are':c.verb;const re=new RegExp('\\b'+target+'\\b','i');const m=c.en.match(re);if(m){sentence.append(document.createTextNode(c.en.slice(0,m.index)));const word=document.createElement('strong');word.textContent=m[0];sentence.append(word,document.createTextNode(c.en.slice(m.index+m[0].length)))}else{sentence.textContent=c.en}article.querySelector('.russian .sentence').textContent=c.ru;article.querySelector('.verb-label').textContent=c.verb;article.querySelector('.face').addEventListener('click',()=>{flipped.has(c.id)?flipped.delete(c.id):flipped.add(c.id);update(article,c);progress()});update(article,c);frag.append(article)});$('cards').replaceChildren(frag);$('card-count').textContent=countText(rows.length);progress()}
 function render(){document.querySelectorAll('[data-frame]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.frame===current)));const f=frames.find(f=>f.id===current);$('family-title').textContent=f.name+' · '+f.label;$('pattern').textContent=f.pattern;$('group-note').textContent=f.note;renderCards();persist()}
 frames.forEach(f=>{const b=document.createElement('button');b.className='group';b.type='button';b.dataset.frame=f.id;const block=document.createElement('span'),title=document.createElement('strong'),sub=document.createElement('small'),n=document.createElement('span');title.textContent=f.name;sub.textContent=f.label;block.append(title,sub);n.className='n';n.textContent=cards.filter(c=>c.frame===f.id).length;b.append(block,n);b.addEventListener('click',()=>{current=f.id;flipped.clear();order=[];render()});$('groups').append(b)});
 $('reset').addEventListener('click',()=>{flipped.clear();renderCards()});
 $('shuffle').addEventListener('click',()=>{order=selected().map(c=>c.id);for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]]}renderCards()});
 $('theme').addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';persist()});
 render();
})();
