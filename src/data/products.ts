import { Product } from "@/types/shop";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники Pro X",
    price: 8990,
    oldPrice: 12990,
    rating: 4.8,
    reviews: 324,
    category: "Электроника",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/6a86d9eb-0fc1-4c9e-b09b-050a8f5faaaf.jpg",
    badge: "Хит продаж",
    description: "Флагманские наушники с активным шумоподавлением и 30 часами работы",
    tags: ["наушники", "bluetooth", "audio"]
  },
  {
    id: 2,
    name: "Смарт-часы Quantum",
    price: 14990,
    oldPrice: 18990,
    rating: 4.6,
    reviews: 187,
    category: "Электроника",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/6a86d9eb-0fc1-4c9e-b09b-050a8f5faaaf.jpg",
    badge: "Новинка",
    description: "Умные часы с мониторингом здоровья, GPS и стильным дизайном",
    tags: ["часы", "смарт", "фитнес"]
  },
  {
    id: 3,
    name: "Сумка Premium Leather",
    price: 6500,
    rating: 4.9,
    reviews: 98,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/2179b184-8539-4cf4-81ab-0f586b9a67ee.jpg",
    description: "Кожаная сумка ручной работы из натуральной итальянской кожи",
    tags: ["сумка", "кожа", "мода"]
  },
  {
    id: 4,
    name: "Кроссовки Urban Run",
    price: 9800,
    oldPrice: 13500,
    rating: 4.7,
    reviews: 412,
    category: "Одежда",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/61cf3b96-acb8-4a4d-ac23-4196f1c769a1.jpg",
    badge: "−27%",
    description: "Лёгкие и дышащие кроссовки для города и лёгких пробежек",
    tags: ["кроссовки", "спорт", "обувь"]
  },
  {
    id: 5,
    name: "Парфюм Noir Intense",
    price: 4990,
    rating: 4.5,
    reviews: 203,
    category: "Красота",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/2179b184-8539-4cf4-81ab-0f586b9a67ee.jpg",
    description: "Стойкий аромат с нотками сандала, мускуса и бергамота",
    tags: ["парфюм", "аромат", "красота"]
  },
  {
    id: 6,
    name: "Солнцезащитные очки Retro",
    price: 3200,
    oldPrice: 4500,
    rating: 4.4,
    reviews: 156,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/6a86d9eb-0fc1-4c9e-b09b-050a8f5faaaf.jpg",
    description: "Очки в стиле ретро с поляризованными линзами UV400",
    tags: ["очки", "солнце", "стиль"]
  },
  {
    id: 7,
    name: "Рюкзак Tech Explorer",
    price: 5800,
    rating: 4.8,
    reviews: 89,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/61cf3b96-acb8-4a4d-ac23-4196f1c769a1.jpg",
    badge: "Топ выбор",
    description: "Вместительный рюкзак с USB-портом и отсеком для ноутбука 15.6\"",
    tags: ["рюкзак", "техника", "travel"]
  },
  {
    id: 8,
    name: "Скинкеа набор Glow",
    price: 2990,
    oldPrice: 3990,
    rating: 4.6,
    reviews: 274,
    category: "Красота",
    image: "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/2179b184-8539-4cf4-81ab-0f586b9a67ee.jpg",
    badge: "−25%",
    description: "Набор для ухода за кожей с витамином C и гиалуроновой кислотой",
    tags: ["уход", "кожа", "красота"]
  }
];

export const CATEGORIES = ["Все", "Электроника", "Аксессуары", "Одежда", "Красота"];
