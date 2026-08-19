export interface Master {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  avatar: string;
  badges: string[];
  description: string;
  portfolio: {
    type: "example" | "before-after";
    image: string;
    caption?: string;
  }[];
}

export const MASTERS: Master[] = [
  {
    id: "veronika",
    name: "Вероника",
    role: "Топ-мастер по LED-наращиванию и ламинированию ресниц",
    specialization: "LED-наращивание, ламинирование ресниц, Botox-уход",
    experience: "7+ лет",
    rating: 5.0,
    reviewsCount: 142,
    avatar: "/media/veronika-master/1mv5fp2eci.jpg",
    badges: ["Топ-мастер", "LED-эксперт", "Тренер"],
    description: "Сертифицированный мастер и наставник по инновационной технологии LED-наращивания. Более 4 000 выполненных работ. Никакого жжения, слез и склеек — носка ресниц до 8 недель.",
    portfolio: [
      { type: "example", image: "/media/veronika-master/examples/1erpm43t25.jpg", caption: "LED-наращивание 2D с эффектом стрелки" },
      { type: "example", image: "/media/veronika-master/examples/60lcphamj5.jpg", caption: "Натуральный объем 1.5D с бархатным изгибом" },
      { type: "example", image: "/media/veronika-master/examples/6rc668hm4i.jpg", caption: "Ламинирование + Botox глубокое питание" },
    ],
  },
  {
    id: "arina",
    name: "Арина",
    role: "Топ-стилист по волосам & Свадебный стилист",
    specialization: "Свадебные и вечерние прически, голливудские волны, текстурные локоны",
    experience: "6 лет",
    rating: 5.0,
    reviewsCount: 98,
    avatar: "/media/arina-master/5esuffkgno.jpg",
    badges: ["Свадебный стилист", "Стойкость 24ч"],
    description: "Создает воздушные, чувственные укладки и стойкие свадебные образы. Работает с бережной премиальной термозащитой, сохраняя живой блеск и подвижность волос.",
    portfolio: [
      { type: "before-after", image: "/media/arina-master/before-after/1e8bsj9t76.jpg", caption: "Текстурные локоны на длинные волосы" },
      { type: "before-after", image: "/media/arina-master/before-after/2orjnlhj74.jpg", caption: "Свадебный воздушный пучок" },
      { type: "before-after", image: "/media/arina-master/before-after/4s83psn0s3.jpg", caption: "Голливудская волна на вечер" },
      { type: "before-after", image: "/media/arina-master/before-after/aohn721gqo.jpg", caption: "Экспресс-укладка с прикорневым объемом" },
    ],
  },
  {
    id: "aisel",
    name: "Айсель",
    role: "Ведущий мастер ногтевого сервиса",
    specialization: "Комбинированный маникюр, SMART-педикюр, авторский дизайн",
    experience: "5 лет",
    rating: 5.0,
    reviewsCount: 114,
    avatar: "/media/aisel-master/3h0qgvj00i.jpg",
    badges: ["SMART-эксперт", "Идеальный френч"],
    description: "Ювелирная обработка кутикулы и чистейшее покрытие под кутикулу. Специалист по аппаратному педикюру SMART-дисками для идеальной гладкости стоп.",
    portfolio: [
      { type: "example", image: "/media/aisel-master/examples/105v8gtsqo.jpg", caption: "Нюдовое покрытие с тонким френчем" },
      { type: "example", image: "/media/aisel-master/examples/4r9104v4sm.jpg", caption: "Комбинированный маникюр + укрепление гелем" },
      { type: "example", image: "/media/aisel-master/examples/54oig62t7u.jpg", caption: "Глянцевый оттенок с авторским дизайном" },
      { type: "example", image: "/media/aisel-master/examples/7gtcs8lkn9.jpg", caption: "Идеальная форма миндаль с покрытием" },
    ],
  },
  {
    id: "anastasia",
    name: "Анастасия",
    role: "Brow & Lash архитектор",
    specialization: "Архитектура бровей, ламинирование, осветление, Botox ресниц",
    experience: "4 года",
    rating: 5.0,
    reviewsCount: 86,
    avatar: "/media/anastasia-master/62cmkgk2kr.jpg",
    badges: ["Brow-архитектор", "Натуральные брови"],
    description: "Подбирает гармоничную форму бровей, подчеркивающую индивидуальные черты лица без эффекта 'графичных темных полос'. Деликатная работа воском Lycon.",
    portfolio: [
      { type: "example", image: "/media/anastasia-master/examples/3rqmtocfa1.jpg", caption: "Долговременная укладка бровей + окрашивание" },
      { type: "example", image: "/media/anastasia-master/examples/7of20c0tae.jpg", caption: "Натуральная коррекция воском и краской" },
      { type: "example", image: "/media/anastasia-master/examples/8t35il0sfl.jpg", caption: "Осветление и тонирование волосков" },
      { type: "example", image: "/media/anastasia-master/examples/nkqifssooq.jpg", caption: "Ламинирование ресниц с завивкой" },
    ],
  },
  {
    id: "evgenia",
    name: "Евгения",
    role: "Pro-визажист & Стилист образов",
    specialization: "Свадебный, вечерний и коммерческий макияж, экспресс-сборы",
    experience: "5+ лет",
    rating: 5.0,
    reviewsCount: 92,
    avatar: "/media/evgenia-master/22aevs7ild.jpg",
    badges: ["Люкс косметика", "Визажист года"],
    description: "Работает исключительно на оригинальной косметике премиум-брендов (Dior, Charlotte Tilbury, Tom Ford). Создает эффект сияющей отдохнувшей кожи и выразительный взгляд.",
    portfolio: [
      { type: "example", image: "/media/evgenia-master/examples/2lefm5nrk7.jpg", caption: "Нежный Nude макияж с сияющей кожей" },
      { type: "example", image: "/media/evgenia-master/examples/2qbn19tmb6.jpg", caption: "Вечерний макияж с растушеванной стрелкой" },
      { type: "example", image: "/media/evgenia-master/examples/6tas9ha355.jpg", caption: "Свадебный образ невесты" },
      { type: "example", image: "/media/evgenia-master/examples/i6bv4terru.jpg", caption: "Smoky Eyes на фотосессию" },
    ],
  },
  {
    id: "regina",
    name: "Регина",
    role: "Мастер перманентного макияжа & Brow-эстетист",
    specialization: "Пудровое напыление бровей, акварельные губы, межресничка",
    experience: "6 лет",
    rating: 5.0,
    reviewsCount: 79,
    avatar: "/media/regina/regina-master.jpg",
    badges: ["Перманент", "Акварельная техника"],
    description: "Естественный перманент без синевы и серости со временем. Работа на высококачественных минеральных пигментах с легким заживлением без корочек.",
    portfolio: [
      { type: "before-after", image: "/media/regina/before-after/1t8kmb5qbf.jpg", caption: "Пудровые брови в мягкой теневой технике" },
      { type: "before-after", image: "/media/regina/before-after/4avadhjvmh.jpg", caption: "Акварельная растушевка губ Nude Rose" },
      { type: "before-after", image: "/media/regina/before-after/5s7mjt3ceb.jpg", caption: "Перекрытие и коррекция оттенка бровей" },
      { type: "before-after", image: "/media/regina/before-after/6i658om1s4.jpg", caption: "Мягкая теневая техника бровей" },
      { type: "before-after", image: "/media/regina/before-after/vrfvk2m4jr.jpg", caption: "Заживший результат через 1 месяц" },
    ],
  },
  {
    id: "ekaterina",
    name: "Екатерина",
    role: "Мастер подологии и эстетического маникюра",
    specialization: "Японский эко-маникюр, эстетика сложных ногтей, спа-ритуалы",
    experience: "6 лет",
    rating: 5.0,
    reviewsCount: 88,
    avatar: "/media/ekaterina-master/6ods0e7t55.jpg",
    badges: ["Эко-маникюр", "Здоровье ногтей"],
    description: "Эксперт бережного ухода за натуральными ногтями. Восстанавливает тонкие и поврежденные ногтевые пластины с помощью японских паст и органических восков.",
    portfolio: [
      { type: "example", image: "/media/ekaterina-master/examples/3ut91tch62.jpg", caption: "Японский эко-глянец без покрытия" },
      { type: "example", image: "/media/ekaterina-master/examples/4ioa20he98.jpg", caption: "Комбинированный маникюр + укрепление" },
      { type: "example", image: "/media/ekaterina-master/examples/6uq89k28lj.jpg", caption: "Чистая обработка и пастельный тон" },
      { type: "example", image: "/media/ekaterina-master/examples/754ne6mlbi.jpg", caption: "СПА-уход и выравнивание формы" },
    ],
  },
  {
    id: "valeria",
    name: "Валерия",
    role: "Стилист по вечерним прическам & Укладкам",
    specialization: "Объемные локоны, гладкие хвосты, прически на выпускной и фотосессии",
    experience: "4 года",
    rating: 5.0,
    reviewsCount: 65,
    avatar: "/media/valeria-master/3c7fq2d71d.jpg",
    badges: ["Воздушный объем", "Быстрые сборы"],
    description: "Мастер динамичных и современных укладок без утяжеления лаком. Ваши волосы остаются шелковистыми и приятными на ощупь.",
    portfolio: [
      { type: "example", image: "/media/valeria-master/examples/1havtnpf7c.jpg", caption: "Пляжные небрежные волны" },
      { type: "example", image: "/media/valeria-master/examples/2j5or9fshd.jpg", caption: "Высокий текстурный хвост" },
      { type: "example", image: "/media/valeria-master/examples/3i5tdl08sv.jpg", caption: "Объемная укладка на брашинг" },
      { type: "example", image: "/media/valeria-master/examples/5mci3khv0c.jpg", caption: "Низкий элегантный пучок" },
    ],
  },
  {
    id: "valeria-nails",
    name: "Валерия (Nail)",
    role: "Мастер ногтевой эстетики и моделирования",
    specialization: "Моделирование ногтей гелем/полигелем, трендовый дизайн, френч",
    experience: "4 года",
    rating: 5.0,
    reviewsCount: 71,
    avatar: "/media/valeria2-master/85m37ipt08.jpg",
    badges: ["Моделирование", "Тонкий торец"],
    description: "Мастер четких геометрических форм и ультратонких торцов. Никаких толстых плюшек на ногтях — только изящество и прочность.",
    portfolio: [
      { type: "example", image: "/media/valeria2-master/examples/37p4p3kpcd.jpg", caption: "Моделирование четкий квадрат" },
      { type: "example", image: "/media/valeria2-master/examples/4bbuim1o7g.jpg", caption: "Французский маникюр на камуфляже" },
      { type: "example", image: "/media/valeria2-master/examples/6ocql5iaen.jpg", caption: "Градиентный бейби-бумер" },
      { type: "example", image: "/media/valeria2-master/examples/7lo7atcdvr.jpg", caption: "Однотонный глянец под кутикулу" },
    ],
  },
  {
    id: "victoria",
    name: "Виктория",
    role: "Lash-стилист & Эксперт моделирования взгляда",
    specialization: "Классическое и объемное наращивание, мокрый эффект, цветные вставки",
    experience: "5 лет",
    rating: 5.0,
    reviewsCount: 84,
    avatar: "/media/victoria-master/7h7brsrvo2.jpg",
    badges: ["Мокрый эффект", "Идеальная носка"],
    description: "Подбирает идеальный изгиб и длину ресниц, гармонирующие с разрезом глаз. Использует ультралегкие реснички, неощутимые в носке.",
    portfolio: [
      { type: "before-after", image: "/media/victoria-master/before-after/32ssb2i0ls.jpg", caption: "Мокрый эффект с лучиками" },
      { type: "before-after", image: "/media/victoria-master/before-after/3hg9kl88s6.jpg", caption: "Классика 1D естественный взгляд" },
      { type: "before-after", image: "/media/victoria-master/before-after/4k66h90m70.jpg", caption: "2D объем шоколадный оттенок" },
    ],
  },
];
