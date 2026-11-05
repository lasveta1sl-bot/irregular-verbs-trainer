window.FRAME_DATA = {
  "frames": [
    {
      "id": "sv",
      "name": "КТО / ЧТО? → ЧТО ДЕЛАЕТ?",
      "label": "Только действие",
      "pattern": "КТО / ЧТО? → ЧТО ДЕЛАЕТ?",
      "note": "Вопросы помогают увидеть части английского предложения. В зависимости от подлежащего: что делаю? что делаем? что делают?",
      "scheme": "S + V"
    },
    {
      "id": "svo",
      "name": "КТО? → ЧТО ДЕЛАЕТ? → КОГО / ЧТО?",
      "label": "Действие и объект",
      "pattern": "КТО / ЧТО? → ЧТО ДЕЛАЕТ? → КОГО / ЧТО?",
      "note": "Вопрос к объекту — подсказка к английской конструкции. Русский перевод может требовать другого падежа: I meet my friends → Я встречаюсь с друзьями.",
      "scheme": "S + V + O"
    },
    {
      "id": "svc",
      "name": "КТО? → СОСТОЯНИЕ → КАКОЙ?",
      "label": "Состояние или характеристика",
      "pattern": "КТО / ЧТО? → ЕСТЬ / СТАНОВИТСЯ / ЧУВСТВУЕТ СЕБЯ → КАКОЙ?",
      "note": "Здесь сообщаем о состоянии или признаке, а не действии над объектом. В настоящем времени be принимает форму am / are / is; We are happy — Мы счастливы.",
      "scheme": "S + V + C"
    },
    {
      "id": "place",
      "name": "КТО? → ЧТО ДЕЛАЕТ? → ГДЕ / КУДА?",
      "label": "Направление и положение",
      "pattern": "КТО? → ЧТО ДЕЛАЕТ? → ГДЕ? / КУДА?",
      "note": "Куда? — to school, to the office. Где? — on a chair. Учим английский предлог вместе с местом.",
      "scheme": "S + V + место"
    },
    {
      "id": "object-place",
      "name": "КТО? → ЧТО ДЕЛАЕТ? → ЧТО? → КУДА?",
      "label": "Помещаем предмет",
      "pattern": "КТО? → ЧТО ДЕЛАЕТ? → ЧТО? → КУДА?",
      "note": "Сначала называем предмет, затем место: I put → my keys → on the table.",
      "scheme": "S + V + O + место"
    },
    {
      "id": "svoo",
      "name": "КТО? → ЧТО ДЕЛАЕТ? → КОМУ? → ЧТО?",
      "label": "Получатель и предмет",
      "pattern": "КТО? → ЧТО ДЕЛАЕТ? → КОМУ? → ЧТО?",
      "note": "В английском без предлога: I give → my sister → a book. Кому? — my sister. Что? — a book.",
      "scheme": "S + V + кому + что"
    },
    {
      "id": "prep",
      "name": "КТО? → ЧТО ДЕЛАЕТ? → ПРЕДЛОГ + ВОПРОС",
      "label": "Глагол с предлогом",
      "pattern": "КТО? → ЧТО ДЕЛАЕТ? → О КОМ? / ЗА ЧТО? / С КЕМ?…",
      "note": "Для каждой карточки вопрос свой: think about — о ком / о чём? pay for — за что? hear from — от кого? Вопросы относятся к смыслу перевода; английское сочетание учим целиком.",
      "scheme": "S + V + предлог + O"
    },
    {
      "id": "causative",
      "name": "КТО? → ПОЗВОЛЯЕТ / ЗАСТАВЛЯЕТ → …",
      "label": "Let и make",
      "pattern": "КТО? → ПОЗВОЛЯЕТ / ЗАСТАВЛЯЕТ → КОМУ? / КОГО? → ЧТО СДЕЛАТЬ?",
      "note": "I let him go — Я позволяю ему уйти. I make him laugh — Я вызываю у него смех. После let / make в этих активных конструкциях нет to.",
      "scheme": "S + V + O + V"
    },
    {
      "id": "amount",
      "name": "ЧТО? → СТОИТ → СКОЛЬКО?",
      "label": "Стоимость",
      "pattern": "ЧТО? → СТОИТ → СКОЛЬКО?",
      "note": "Вопрос «сколько?» относится к цене. These books cost ten dollars — Эти книги стоят десять долларов.",
      "scheme": "S + V + стоимость"
    },
    {
      "id": "modal",
      "name": "КТО? → МОЖЕТ / УМЕЕТ → ЧТО ДЕЛАТЬ?",
      "label": "Способность",
      "pattern": "КТО? → МОЖЕТ / УМЕЕТ → ЧТО ДЕЛАТЬ?",
      "note": "I can swim — Я умею плавать. После can употребляем глагол без to.",
      "scheme": "S + can + V"
    }
  ],
  "cards": [
    {
      "id": "burst",
      "verb": "burst",
      "frame": "sv",
      "en": "Balloons burst.",
      "ru": "Воздушные шары лопаются.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Balloons"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "burst"
        }
      ],
      "audio": "sentence-burst"
    },
    {
      "id": "fall",
      "verb": "fall",
      "frame": "sv",
      "en": "Leaves fall.",
      "ru": "Листья падают.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Leaves"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "fall"
        }
      ],
      "audio": "sentence-fall"
    },
    {
      "id": "fly",
      "verb": "fly",
      "frame": "sv",
      "en": "Birds fly.",
      "ru": "Птицы летают.",
      "parts": [
        {
          "question": "КТО?",
          "text": "Birds"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "fly"
        }
      ],
      "audio": "sentence-fly"
    },
    {
      "id": "grow",
      "verb": "grow",
      "frame": "sv",
      "en": "Plants grow.",
      "ru": "Растения растут.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Plants"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "grow"
        }
      ],
      "audio": "sentence-grow"
    },
    {
      "id": "hurt",
      "verb": "hurt",
      "frame": "sv",
      "en": "My knees hurt.",
      "ru": "У меня болят колени.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "My knees"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "hurt"
        }
      ],
      "audio": "sentence-hurt"
    },
    {
      "id": "ring",
      "verb": "ring",
      "frame": "sv",
      "en": "Phones ring.",
      "ru": "Телефоны звонят.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Phones"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "ring"
        }
      ],
      "audio": "sentence-ring"
    },
    {
      "id": "rise",
      "verb": "rise",
      "frame": "sv",
      "en": "Prices rise.",
      "ru": "Цены растут.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Prices"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "rise"
        }
      ],
      "audio": "sentence-rise"
    },
    {
      "id": "run",
      "verb": "run",
      "frame": "sv",
      "en": "I run.",
      "ru": "Я бегаю.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "run"
        }
      ],
      "audio": "sentence-run"
    },
    {
      "id": "shine",
      "verb": "shine",
      "frame": "sv",
      "en": "Stars shine.",
      "ru": "Звёзды светят.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "Stars"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "shine"
        }
      ],
      "audio": "sentence-shine"
    },
    {
      "id": "sleep",
      "verb": "sleep",
      "frame": "sv",
      "en": "I sleep.",
      "ru": "Я сплю.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "sleep"
        }
      ],
      "audio": "sentence-sleep"
    },
    {
      "id": "stand",
      "verb": "stand",
      "frame": "sv",
      "en": "I stand.",
      "ru": "Я стою.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "stand"
        }
      ],
      "audio": "sentence-stand"
    },
    {
      "id": "swim",
      "verb": "swim",
      "frame": "sv",
      "en": "I swim.",
      "ru": "Я плаваю.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "swim"
        }
      ],
      "audio": "sentence-swim"
    },
    {
      "id": "wake",
      "verb": "wake",
      "frame": "sv",
      "en": "I wake.",
      "ru": "Я просыпаюсь.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "wake"
        }
      ],
      "audio": "sentence-wake"
    },
    {
      "id": "bear",
      "verb": "bear",
      "frame": "svo",
      "en": "I bear the cost.",
      "ru": "Я беру расходы на себя.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "bear"
        },
        {
          "question": "ЧТО?",
          "text": "the cost"
        }
      ],
      "audio": "sentence-bear"
    },
    {
      "id": "beat",
      "verb": "beat",
      "frame": "svo",
      "en": "I beat the drum.",
      "ru": "Я бью в барабан.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "beat"
        },
        {
          "question": "ЧТО?",
          "text": "the drum"
        }
      ],
      "audio": "sentence-beat"
    },
    {
      "id": "begin",
      "verb": "begin",
      "frame": "svo",
      "en": "I begin the lesson.",
      "ru": "Я начинаю урок.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "begin"
        },
        {
          "question": "ЧТО?",
          "text": "the lesson"
        }
      ],
      "audio": "sentence-begin"
    },
    {
      "id": "bite",
      "verb": "bite",
      "frame": "svo",
      "en": "Dogs bite their toys.",
      "ru": "Собаки кусают свои игрушки.",
      "parts": [
        {
          "question": "КТО?",
          "text": "Dogs"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "bite"
        },
        {
          "question": "ЧТО?",
          "text": "their toys"
        }
      ],
      "audio": "sentence-bite"
    },
    {
      "id": "blow",
      "verb": "blow",
      "frame": "svo",
      "en": "I blow bubbles.",
      "ru": "Я пускаю мыльные пузыри.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "blow"
        },
        {
          "question": "ЧТО?",
          "text": "bubbles"
        }
      ],
      "audio": "sentence-blow"
    },
    {
      "id": "break",
      "verb": "break",
      "frame": "svo",
      "en": "I break the chocolate.",
      "ru": "Я ломаю шоколад.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "break"
        },
        {
          "question": "ЧТО?",
          "text": "the chocolate"
        }
      ],
      "audio": "sentence-break"
    },
    {
      "id": "build",
      "verb": "build",
      "frame": "svo",
      "en": "I build a house.",
      "ru": "Я строю дом.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "build"
        },
        {
          "question": "ЧТО?",
          "text": "a house"
        }
      ],
      "audio": "sentence-build"
    },
    {
      "id": "burn",
      "verb": "burn",
      "frame": "svo",
      "en": "We burn wood.",
      "ru": "Мы сжигаем древесину.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЧТО ДЕЛАЕМ?",
          "text": "burn"
        },
        {
          "question": "ЧТО?",
          "text": "wood"
        }
      ],
      "audio": "sentence-burn"
    },
    {
      "id": "buy",
      "verb": "buy",
      "frame": "svo",
      "en": "I buy bread.",
      "ru": "Я покупаю хлеб.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "buy"
        },
        {
          "question": "ЧТО?",
          "text": "bread"
        }
      ],
      "audio": "sentence-buy"
    },
    {
      "id": "catch",
      "verb": "catch",
      "frame": "svo",
      "en": "I catch the ball.",
      "ru": "Я ловлю мяч.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "catch"
        },
        {
          "question": "ЧТО?",
          "text": "the ball"
        }
      ],
      "audio": "sentence-catch"
    },
    {
      "id": "choose",
      "verb": "choose",
      "frame": "svo",
      "en": "I choose a book.",
      "ru": "Я выбираю книгу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "choose"
        },
        {
          "question": "ЧТО?",
          "text": "a book"
        }
      ],
      "audio": "sentence-choose"
    },
    {
      "id": "cut",
      "verb": "cut",
      "frame": "svo",
      "en": "I cut the bread.",
      "ru": "Я режу хлеб.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "cut"
        },
        {
          "question": "ЧТО?",
          "text": "the bread"
        }
      ],
      "audio": "sentence-cut"
    },
    {
      "id": "dig",
      "verb": "dig",
      "frame": "svo",
      "en": "I dig a hole.",
      "ru": "Я копаю яму.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "dig"
        },
        {
          "question": "ЧТО?",
          "text": "a hole"
        }
      ],
      "audio": "sentence-dig"
    },
    {
      "id": "do",
      "verb": "do",
      "frame": "svo",
      "en": "I do my homework.",
      "ru": "Я делаю домашнее задание.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "do"
        },
        {
          "question": "ЧТО?",
          "text": "my homework"
        }
      ],
      "audio": "sentence-do"
    },
    {
      "id": "draw",
      "verb": "draw",
      "frame": "svo",
      "en": "I draw a cat.",
      "ru": "Я рисую кошку.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "draw"
        },
        {
          "question": "ЧТО?",
          "text": "a cat"
        }
      ],
      "audio": "sentence-draw"
    },
    {
      "id": "drink",
      "verb": "drink",
      "frame": "svo",
      "en": "I drink coffee.",
      "ru": "Я пью кофе.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "drink"
        },
        {
          "question": "ЧТО?",
          "text": "coffee"
        }
      ],
      "audio": "sentence-drink"
    },
    {
      "id": "eat",
      "verb": "eat",
      "frame": "svo",
      "en": "I eat breakfast.",
      "ru": "Я завтракаю.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "eat"
        },
        {
          "question": "ЧТО?",
          "text": "breakfast"
        }
      ],
      "audio": "sentence-eat"
    },
    {
      "id": "feed",
      "verb": "feed",
      "frame": "svo",
      "en": "I feed the cat.",
      "ru": "Я кормлю кошку.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "feed"
        },
        {
          "question": "КОГО?",
          "text": "the cat"
        }
      ],
      "audio": "sentence-feed"
    },
    {
      "id": "find",
      "verb": "find",
      "frame": "svo",
      "en": "I find my keys.",
      "ru": "Я нахожу свои ключи.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "find"
        },
        {
          "question": "ЧТО?",
          "text": "my keys"
        }
      ],
      "audio": "sentence-find"
    },
    {
      "id": "forbid",
      "verb": "forbid",
      "frame": "svo",
      "en": "We forbid smoking.",
      "ru": "Мы запрещаем курение.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЧТО ДЕЛАЕМ?",
          "text": "forbid"
        },
        {
          "question": "ЧТО?",
          "text": "smoking"
        }
      ],
      "audio": "sentence-forbid"
    },
    {
      "id": "forget",
      "verb": "forget",
      "frame": "svo",
      "en": "I forget names.",
      "ru": "Я забываю имена.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "forget"
        },
        {
          "question": "ЧТО?",
          "text": "names"
        }
      ],
      "audio": "sentence-forget"
    },
    {
      "id": "forgive",
      "verb": "forgive",
      "frame": "svo",
      "en": "I forgive my brother.",
      "ru": "Я прощаю своего брата.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "forgive"
        },
        {
          "question": "КОГО?",
          "text": "my brother"
        }
      ],
      "audio": "sentence-forgive"
    },
    {
      "id": "freeze",
      "verb": "freeze",
      "frame": "svo",
      "en": "I freeze vegetables.",
      "ru": "Я замораживаю овощи.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "freeze"
        },
        {
          "question": "ЧТО?",
          "text": "vegetables"
        }
      ],
      "audio": "sentence-freeze"
    },
    {
      "id": "have",
      "verb": "have",
      "frame": "svo",
      "en": "I have a bike.",
      "ru": "У меня есть велосипед.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "have"
        },
        {
          "question": "ЧТО?",
          "text": "a bike"
        }
      ],
      "audio": "sentence-have"
    },
    {
      "id": "hide",
      "verb": "hide",
      "frame": "svo",
      "en": "I hide the present.",
      "ru": "Я прячу подарок.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "hide"
        },
        {
          "question": "ЧТО?",
          "text": "the present"
        }
      ],
      "audio": "sentence-hide"
    },
    {
      "id": "hit",
      "verb": "hit",
      "frame": "svo",
      "en": "I hit the ball.",
      "ru": "Я ударяю по мячу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "hit"
        },
        {
          "question": "ЧТО?",
          "text": "the ball"
        }
      ],
      "audio": "sentence-hit"
    },
    {
      "id": "hold",
      "verb": "hold",
      "frame": "svo",
      "en": "I hold the baby.",
      "ru": "Я держу малыша на руках.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "hold"
        },
        {
          "question": "КОГО?",
          "text": "the baby"
        }
      ],
      "audio": "sentence-hold"
    },
    {
      "id": "keep",
      "verb": "keep",
      "frame": "svo",
      "en": "I keep old letters.",
      "ru": "Я храню старые письма.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "keep"
        },
        {
          "question": "ЧТО?",
          "text": "old letters"
        }
      ],
      "audio": "sentence-keep"
    },
    {
      "id": "know",
      "verb": "know",
      "frame": "svo",
      "en": "I know the answer.",
      "ru": "Я знаю ответ.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "know"
        },
        {
          "question": "ЧТО?",
          "text": "the answer"
        }
      ],
      "audio": "sentence-know"
    },
    {
      "id": "lead",
      "verb": "lead",
      "frame": "svo",
      "en": "I lead the team.",
      "ru": "Я руковожу командой.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "lead"
        },
        {
          "question": "ЧТО?",
          "text": "the team"
        }
      ],
      "audio": "sentence-lead"
    },
    {
      "id": "learn",
      "verb": "learn",
      "frame": "svo",
      "en": "I learn new words.",
      "ru": "Я учу новые слова.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "learn"
        },
        {
          "question": "ЧТО?",
          "text": "new words"
        }
      ],
      "audio": "sentence-learn"
    },
    {
      "id": "leave",
      "verb": "leave",
      "frame": "svo",
      "en": "I leave the room.",
      "ru": "Я выхожу из комнаты.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "leave"
        },
        {
          "question": "ЧТО?",
          "text": "the room"
        }
      ],
      "audio": "sentence-leave"
    },
    {
      "id": "light",
      "verb": "light",
      "frame": "svo",
      "en": "I light a candle.",
      "ru": "Я зажигаю свечу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "light"
        },
        {
          "question": "ЧТО?",
          "text": "a candle"
        }
      ],
      "audio": "sentence-light"
    },
    {
      "id": "lose",
      "verb": "lose",
      "frame": "svo",
      "en": "I lose my keys.",
      "ru": "Я теряю свои ключи.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "lose"
        },
        {
          "question": "ЧТО?",
          "text": "my keys"
        }
      ],
      "audio": "sentence-lose"
    },
    {
      "id": "mean",
      "verb": "mean",
      "frame": "svo",
      "en": "These words mean “home”.",
      "ru": "Эти слова означают «дом».",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "These words"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "mean"
        },
        {
          "question": "ЧТО?",
          "text": "“home”"
        }
      ],
      "audio": "sentence-mean"
    },
    {
      "id": "meet",
      "verb": "meet",
      "frame": "svo",
      "en": "I meet my friends.",
      "ru": "Я встречаюсь с друзьями.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "meet"
        },
        {
          "question": "КОГО?",
          "text": "my friends"
        }
      ],
      "audio": "sentence-meet"
    },
    {
      "id": "read",
      "verb": "read",
      "frame": "svo",
      "en": "I read a book.",
      "ru": "Я читаю книгу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "read"
        },
        {
          "question": "ЧТО?",
          "text": "a book"
        }
      ],
      "audio": "sentence-read"
    },
    {
      "id": "say",
      "verb": "say",
      "frame": "svo",
      "en": "I say a few words.",
      "ru": "Я произношу несколько слов.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "say"
        },
        {
          "question": "ЧТО?",
          "text": "a few words"
        }
      ],
      "audio": "sentence-say"
    },
    {
      "id": "sell",
      "verb": "sell",
      "frame": "svo",
      "en": "We sell books.",
      "ru": "Мы продаём книги.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЧТО ДЕЛАЕМ?",
          "text": "sell"
        },
        {
          "question": "ЧТО?",
          "text": "books"
        }
      ],
      "audio": "sentence-sell"
    },
    {
      "id": "sew",
      "verb": "sew",
      "frame": "svo",
      "en": "I sew clothes.",
      "ru": "Я шью одежду.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "sew"
        },
        {
          "question": "ЧТО?",
          "text": "clothes"
        }
      ],
      "audio": "sentence-sew"
    },
    {
      "id": "shake",
      "verb": "shake",
      "frame": "svo",
      "en": "I shake the bottle.",
      "ru": "Я встряхиваю бутылку.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "shake"
        },
        {
          "question": "ЧТО?",
          "text": "the bottle"
        }
      ],
      "audio": "sentence-shake"
    },
    {
      "id": "shoot",
      "verb": "shoot",
      "frame": "svo",
      "en": "I shoot a video.",
      "ru": "Я снимаю видео.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "shoot"
        },
        {
          "question": "ЧТО?",
          "text": "a video"
        }
      ],
      "audio": "sentence-shoot"
    },
    {
      "id": "shut",
      "verb": "shut",
      "frame": "svo",
      "en": "I shut the door.",
      "ru": "Я закрываю дверь.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "shut"
        },
        {
          "question": "ЧТО?",
          "text": "the door"
        }
      ],
      "audio": "sentence-shut"
    },
    {
      "id": "sing",
      "verb": "sing",
      "frame": "svo",
      "en": "I sing a song.",
      "ru": "Я пою песню.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "sing"
        },
        {
          "question": "ЧТО?",
          "text": "a song"
        }
      ],
      "audio": "sentence-sing"
    },
    {
      "id": "spell",
      "verb": "spell",
      "frame": "svo",
      "en": "I spell my name.",
      "ru": "Я произношу своё имя по буквам.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "spell"
        },
        {
          "question": "ЧТО?",
          "text": "my name"
        }
      ],
      "audio": "sentence-spell"
    },
    {
      "id": "spend",
      "verb": "spend",
      "frame": "svo",
      "en": "I spend money.",
      "ru": "Я трачу деньги.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "spend"
        },
        {
          "question": "ЧТО?",
          "text": "money"
        }
      ],
      "audio": "sentence-spend"
    },
    {
      "id": "steal",
      "verb": "steal",
      "frame": "svo",
      "en": "Thieves steal money.",
      "ru": "Воры крадут деньги.",
      "parts": [
        {
          "question": "КТО?",
          "text": "Thieves"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "steal"
        },
        {
          "question": "ЧТО?",
          "text": "money"
        }
      ],
      "audio": "sentence-steal"
    },
    {
      "id": "sting",
      "verb": "sting",
      "frame": "svo",
      "en": "Bees sting people.",
      "ru": "Пчёлы жалят людей.",
      "parts": [
        {
          "question": "КТО?",
          "text": "Bees"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "sting"
        },
        {
          "question": "КОГО?",
          "text": "people"
        }
      ],
      "audio": "sentence-sting"
    },
    {
      "id": "sweep",
      "verb": "sweep",
      "frame": "svo",
      "en": "I sweep the floor.",
      "ru": "Я подметаю пол.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "sweep"
        },
        {
          "question": "ЧТО?",
          "text": "the floor"
        }
      ],
      "audio": "sentence-sweep"
    },
    {
      "id": "throw",
      "verb": "throw",
      "frame": "svo",
      "en": "I throw the ball.",
      "ru": "Я бросаю мяч.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "throw"
        },
        {
          "question": "ЧТО?",
          "text": "the ball"
        }
      ],
      "audio": "sentence-throw"
    },
    {
      "id": "take",
      "verb": "take",
      "frame": "svo",
      "en": "I take a photo.",
      "ru": "Я делаю фотографию.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "take"
        },
        {
          "question": "ЧТО?",
          "text": "a photo"
        }
      ],
      "audio": "sentence-take"
    },
    {
      "id": "tear",
      "verb": "tear",
      "frame": "svo",
      "en": "I tear the paper.",
      "ru": "Я рву бумагу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "tear"
        },
        {
          "question": "ЧТО?",
          "text": "the paper"
        }
      ],
      "audio": "sentence-tear"
    },
    {
      "id": "understand",
      "verb": "understand",
      "frame": "svo",
      "en": "I understand the question.",
      "ru": "Я понимаю вопрос.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "understand"
        },
        {
          "question": "ЧТО?",
          "text": "the question"
        }
      ],
      "audio": "sentence-understand"
    },
    {
      "id": "wear",
      "verb": "wear",
      "frame": "svo",
      "en": "I wear glasses.",
      "ru": "Я ношу очки.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "wear"
        },
        {
          "question": "ЧТО?",
          "text": "glasses"
        }
      ],
      "audio": "sentence-wear"
    },
    {
      "id": "win",
      "verb": "win",
      "frame": "svo",
      "en": "We win the game.",
      "ru": "Мы выигрываем игру.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЧТО ДЕЛАЕМ?",
          "text": "win"
        },
        {
          "question": "ЧТО?",
          "text": "the game"
        }
      ],
      "audio": "sentence-win"
    },
    {
      "id": "write",
      "verb": "write",
      "frame": "svo",
      "en": "I write a letter.",
      "ru": "Я пишу письмо.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "write"
        },
        {
          "question": "ЧТО?",
          "text": "a letter"
        }
      ],
      "audio": "sentence-write"
    },
    {
      "id": "see",
      "verb": "see",
      "frame": "svo",
      "en": "I see a bird.",
      "ru": "Я вижу птицу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "see"
        },
        {
          "question": "ЧТО?",
          "text": "a bird"
        }
      ],
      "audio": "sentence-see"
    },
    {
      "id": "be",
      "verb": "be",
      "frame": "svc",
      "en": "We are happy.",
      "ru": "Мы счастливы.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЕСТЬ (СВЯЗКА)",
          "text": "are"
        },
        {
          "question": "КАКИЕ?",
          "text": "happy"
        }
      ],
      "audio": "sentence-be"
    },
    {
      "id": "become",
      "verb": "become",
      "frame": "svc",
      "en": "I become nervous.",
      "ru": "Я начинаю нервничать.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "СТАНОВЛЮСЬ",
          "text": "become"
        },
        {
          "question": "КАКОЙ?",
          "text": "nervous"
        }
      ],
      "audio": "sentence-become"
    },
    {
      "id": "feel",
      "verb": "feel",
      "frame": "svc",
      "en": "I feel tired.",
      "ru": "Я чувствую усталость.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧУВСТВУЮ СЕБЯ",
          "text": "feel"
        },
        {
          "question": "КАКОЙ?",
          "text": "tired"
        }
      ],
      "audio": "sentence-feel"
    },
    {
      "id": "get",
      "verb": "get",
      "frame": "svc",
      "en": "I get hungry.",
      "ru": "Я начинаю испытывать голод.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "СТАНОВЛЮСЬ",
          "text": "get"
        },
        {
          "question": "КАКОЙ?",
          "text": "hungry"
        }
      ],
      "audio": "sentence-get"
    },
    {
      "id": "smell",
      "verb": "smell",
      "frame": "svc",
      "en": "These flowers smell good.",
      "ru": "Эти цветы приятно пахнут.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "These flowers"
        },
        {
          "question": "ПАХНУТ",
          "text": "smell"
        },
        {
          "question": "КАКИЕ?",
          "text": "good"
        }
      ],
      "audio": "sentence-smell"
    },
    {
      "id": "go",
      "verb": "go",
      "frame": "place",
      "en": "I go to school.",
      "ru": "Я хожу в школу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "go"
        },
        {
          "question": "КУДА?",
          "text": "to school"
        }
      ],
      "audio": "sentence-go"
    },
    {
      "id": "drive",
      "verb": "drive",
      "frame": "place",
      "en": "I drive to work.",
      "ru": "Я езжу на работу на машине.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "drive"
        },
        {
          "question": "КУДА?",
          "text": "to work"
        }
      ],
      "audio": "sentence-drive"
    },
    {
      "id": "ride",
      "verb": "ride",
      "frame": "place",
      "en": "I ride to the park.",
      "ru": "Я езжу в парк.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "ride"
        },
        {
          "question": "КУДА?",
          "text": "to the park"
        }
      ],
      "audio": "sentence-ride"
    },
    {
      "id": "come",
      "verb": "come",
      "frame": "place",
      "en": "I come to the office.",
      "ru": "Я прихожу в офис.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "come"
        },
        {
          "question": "КУДА?",
          "text": "to the office"
        }
      ],
      "audio": "sentence-come"
    },
    {
      "id": "sit",
      "verb": "sit",
      "frame": "place",
      "en": "I sit on a chair.",
      "ru": "Я сижу на стуле.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "sit"
        },
        {
          "question": "ГДЕ?",
          "text": "on a chair"
        }
      ],
      "audio": "sentence-sit"
    },
    {
      "id": "put",
      "verb": "put",
      "frame": "object-place",
      "en": "I put my keys on the table.",
      "ru": "Я кладу свои ключи на стол.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "put"
        },
        {
          "question": "ЧТО?",
          "text": "my keys"
        },
        {
          "question": "КУДА?",
          "text": "on the table"
        }
      ],
      "audio": "sentence-put"
    },
    {
      "id": "set",
      "verb": "set",
      "frame": "object-place",
      "en": "I set the cup on the table.",
      "ru": "Я ставлю чашку на стол.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "set"
        },
        {
          "question": "ЧТО?",
          "text": "the cup"
        },
        {
          "question": "КУДА?",
          "text": "on the table"
        }
      ],
      "audio": "sentence-set"
    },
    {
      "id": "hang",
      "verb": "hang",
      "frame": "object-place",
      "en": "I hang my coat on a hook.",
      "ru": "Я вешаю пальто на крючок.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "hang"
        },
        {
          "question": "ЧТО?",
          "text": "my coat"
        },
        {
          "question": "КУДА?",
          "text": "on a hook"
        }
      ],
      "audio": "sentence-hang"
    },
    {
      "id": "stick",
      "verb": "stick",
      "frame": "object-place",
      "en": "I stick a stamp on the envelope.",
      "ru": "Я наклеиваю марку на конверт.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "stick"
        },
        {
          "question": "ЧТО?",
          "text": "a stamp"
        },
        {
          "question": "КУДА?",
          "text": "on the envelope"
        }
      ],
      "audio": "sentence-stick"
    },
    {
      "id": "bring",
      "verb": "bring",
      "frame": "svoo",
      "en": "I bring my friend some coffee.",
      "ru": "Я приношу своему другу кофе.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "bring"
        },
        {
          "question": "КОМУ?",
          "text": "my friend"
        },
        {
          "question": "ЧТО?",
          "text": "some coffee"
        }
      ],
      "audio": "sentence-bring"
    },
    {
      "id": "give",
      "verb": "give",
      "frame": "svoo",
      "en": "I give my sister a book.",
      "ru": "Я даю своей сестре книгу.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "give"
        },
        {
          "question": "КОМУ?",
          "text": "my sister"
        },
        {
          "question": "ЧТО?",
          "text": "a book"
        }
      ],
      "audio": "sentence-give"
    },
    {
      "id": "lend",
      "verb": "lend",
      "frame": "svoo",
      "en": "I lend my friend my bike.",
      "ru": "Я одалживаю другу свой велосипед.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "lend"
        },
        {
          "question": "КОМУ?",
          "text": "my friend"
        },
        {
          "question": "ЧТО?",
          "text": "my bike"
        }
      ],
      "audio": "sentence-lend"
    },
    {
      "id": "send",
      "verb": "send",
      "frame": "svoo",
      "en": "I send my mother a message.",
      "ru": "Я отправляю маме сообщение.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "send"
        },
        {
          "question": "КОМУ?",
          "text": "my mother"
        },
        {
          "question": "ЧТО?",
          "text": "a message"
        }
      ],
      "audio": "sentence-send"
    },
    {
      "id": "show",
      "verb": "show",
      "frame": "svoo",
      "en": "I show my teacher a photo.",
      "ru": "Я показываю учителю фотографию.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "show"
        },
        {
          "question": "КОМУ?",
          "text": "my teacher"
        },
        {
          "question": "ЧТО?",
          "text": "a photo"
        }
      ],
      "audio": "sentence-show"
    },
    {
      "id": "teach",
      "verb": "teach",
      "frame": "svoo",
      "en": "I teach children English.",
      "ru": "Я учу детей английскому языку.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "teach"
        },
        {
          "question": "КОМУ?",
          "text": "children"
        },
        {
          "question": "ЧТО?",
          "text": "English"
        }
      ],
      "audio": "sentence-teach"
    },
    {
      "id": "tell",
      "verb": "tell",
      "frame": "svoo",
      "en": "I tell my son a story.",
      "ru": "Я рассказываю сыну историю.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "tell"
        },
        {
          "question": "КОМУ?",
          "text": "my son"
        },
        {
          "question": "ЧТО?",
          "text": "a story"
        }
      ],
      "audio": "sentence-tell"
    },
    {
      "id": "deal",
      "verb": "deal",
      "frame": "prep",
      "en": "I deal with problems.",
      "ru": "Я разбираюсь с проблемами.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "deal"
        },
        {
          "question": "С ЧЕМ?",
          "text": "with problems"
        }
      ],
      "audio": "sentence-deal"
    },
    {
      "id": "dream",
      "verb": "dream",
      "frame": "prep",
      "en": "I dream about holidays.",
      "ru": "Я мечтаю о каникулах.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "dream"
        },
        {
          "question": "О ЧЁМ?",
          "text": "about holidays"
        }
      ],
      "audio": "sentence-dream"
    },
    {
      "id": "fight",
      "verb": "fight",
      "frame": "prep",
      "en": "We fight for our rights.",
      "ru": "Мы боремся за свои права.",
      "parts": [
        {
          "question": "КТО?",
          "text": "We"
        },
        {
          "question": "ЧТО ДЕЛАЕМ?",
          "text": "fight"
        },
        {
          "question": "ЗА ЧТО?",
          "text": "for our rights"
        }
      ],
      "audio": "sentence-fight"
    },
    {
      "id": "hear",
      "verb": "hear",
      "frame": "prep",
      "en": "I hear from my sister.",
      "ru": "Я получаю новости от сестры.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "hear"
        },
        {
          "question": "ОТ КОГО?",
          "text": "from my sister"
        }
      ],
      "audio": "sentence-hear"
    },
    {
      "id": "pay",
      "verb": "pay",
      "frame": "prep",
      "en": "I pay for lunch.",
      "ru": "Я плачу за обед.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "pay"
        },
        {
          "question": "ЗА ЧТО?",
          "text": "for lunch"
        }
      ],
      "audio": "sentence-pay"
    },
    {
      "id": "speak",
      "verb": "speak",
      "frame": "prep",
      "en": "I speak to my teacher.",
      "ru": "Я разговариваю с учителем.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "speak"
        },
        {
          "question": "С КЕМ?",
          "text": "to my teacher"
        }
      ],
      "audio": "sentence-speak"
    },
    {
      "id": "think",
      "verb": "think",
      "frame": "prep",
      "en": "I think about my family.",
      "ru": "Я думаю о своей семье.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЧТО ДЕЛАЮ?",
          "text": "think"
        },
        {
          "question": "О КОМ?",
          "text": "about my family"
        }
      ],
      "audio": "sentence-think"
    },
    {
      "id": "swear",
      "verb": "swear",
      "frame": "prep",
      "en": "They swear at the referee.",
      "ru": "Они ругаются на судью.",
      "parts": [
        {
          "question": "КТО?",
          "text": "They"
        },
        {
          "question": "ЧТО ДЕЛАЮТ?",
          "text": "swear"
        },
        {
          "question": "НА КОГО?",
          "text": "at the referee"
        }
      ],
      "audio": "sentence-swear"
    },
    {
      "id": "let",
      "verb": "let",
      "frame": "causative",
      "en": "I let him go.",
      "ru": "Я позволяю ему уйти.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ПОЗВОЛЯЮ",
          "text": "let"
        },
        {
          "question": "КОМУ?",
          "text": "him"
        },
        {
          "question": "ЧТО СДЕЛАТЬ?",
          "text": "go"
        }
      ],
      "audio": "sentence-let"
    },
    {
      "id": "make",
      "verb": "make",
      "frame": "causative",
      "en": "I make him laugh.",
      "ru": "Я смешу его.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "ЗАСТАВЛЯЮ",
          "text": "make"
        },
        {
          "question": "КОГО?",
          "text": "him"
        },
        {
          "question": "ЧТО СДЕЛАТЬ?",
          "text": "laugh"
        }
      ],
      "audio": "sentence-make"
    },
    {
      "id": "cost",
      "verb": "cost",
      "frame": "amount",
      "en": "These books cost ten dollars.",
      "ru": "Эти книги стоят десять долларов.",
      "parts": [
        {
          "question": "ЧТО?",
          "text": "These books"
        },
        {
          "question": "СТОЯТ",
          "text": "cost"
        },
        {
          "question": "СКОЛЬКО?",
          "text": "ten dollars"
        }
      ],
      "audio": "sentence-cost"
    },
    {
      "id": "can",
      "verb": "can",
      "frame": "modal",
      "en": "I can swim.",
      "ru": "Я умею плавать.",
      "parts": [
        {
          "question": "КТО?",
          "text": "I"
        },
        {
          "question": "МОГУ / УМЕЮ",
          "text": "can"
        },
        {
          "question": "ЧТО ДЕЛАТЬ?",
          "text": "swim"
        }
      ],
      "audio": "sentence-can"
    }
  ]
};
