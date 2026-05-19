import { Product } from "@/types/shop";

const IMG_SECURITY = "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/8e57bc44-cd16-4303-8f65-199ea14e2688.jpg";
const IMG_MOBILE = "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/638b0ad7-c38f-40eb-8fbe-9b2a6331e934.jpg";
const IMG_FAMILY = "https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/964ba7b6-da18-4597-b10b-05d9c3bd0c1d.jpg";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Dr.Web Security Space",
    price: 1290,
    oldPrice: 1690,
    rating: 4.9,
    reviews: 2840,
    category: "Для Windows",
    image: IMG_SECURITY,
    badge: "Хит продаж",
    description: "Комплексная защита ПК: антивирус, файрвол, антиспам, родительский контроль и защита от вымогателей. Лицензия на 1 ПК / 1 год.",
    tags: ["windows", "антивирус", "файрвол", "антиспам"]
  },
  {
    id: 2,
    name: "Dr.Web Security Space — 2 ПК",
    price: 1890,
    oldPrice: 2490,
    rating: 4.9,
    reviews: 1520,
    category: "Для Windows",
    image: IMG_FAMILY,
    badge: "Выгодно",
    description: "Полная защита для двух компьютеров под управлением Windows. Антивирус, файрвол, защита от фишинга и шифровальщиков на 1 год.",
    tags: ["windows", "2 пк", "антивирус", "семья"]
  },
  {
    id: 3,
    name: "Dr.Web Антивирус для Windows",
    price: 890,
    oldPrice: 1190,
    rating: 4.7,
    reviews: 1105,
    category: "Для Windows",
    image: IMG_SECURITY,
    description: "Базовая надёжная защита от вирусов, троянцев и руткитов для одного ПК на Windows. Лёгкий и быстрый. Лицензия 1 год.",
    tags: ["windows", "антивирус", "базовый"]
  },
  {
    id: 4,
    name: "Dr.Web для Android",
    price: 590,
    oldPrice: 790,
    rating: 4.8,
    reviews: 3210,
    category: "Для Android",
    image: IMG_MOBILE,
    badge: "Хит",
    description: "Антивирус для смартфона и планшета Android. Защита от вирусов, слежки, фишинга. Антивор и блокировка нежелательных звонков.",
    tags: ["android", "мобильный", "антивор"]
  },
  {
    id: 5,
    name: "Dr.Web Security Space + Android",
    price: 1590,
    oldPrice: 2190,
    rating: 4.9,
    reviews: 876,
    category: "Семейные",
    image: IMG_FAMILY,
    badge: "−27%",
    description: "Защита ПК на Windows и смартфона Android в одной лицензии. Идеальное решение для тех, кто работает на нескольких устройствах.",
    tags: ["windows", "android", "комплект", "семья"]
  },
  {
    id: 6,
    name: "Dr.Web Family Security",
    price: 2490,
    oldPrice: 3290,
    rating: 4.8,
    reviews: 654,
    category: "Семейные",
    image: IMG_FAMILY,
    badge: "Для семьи",
    description: "Защита до 5 устройств: Windows, Android, macOS. Родительский контроль, антивирус, файрвол и защита от фишинга для всей семьи.",
    tags: ["семья", "5 устройств", "родительский контроль", "multiplatform"]
  },
  {
    id: 7,
    name: "Dr.Web для macOS",
    price: 990,
    oldPrice: 1290,
    rating: 4.6,
    reviews: 432,
    category: "Для macOS",
    image: IMG_SECURITY,
    description: "Надёжный антивирус для компьютеров Apple Mac. Защита от вирусов, шпионских программ и потенциально опасного ПО. Лицензия 1 год.",
    tags: ["macos", "apple", "антивирус", "mac"]
  },
  {
    id: 8,
    name: "Dr.Web Katana",
    price: 990,
    oldPrice: 1390,
    rating: 4.7,
    reviews: 287,
    category: "Для Windows",
    badge: "Новинка",
    image: IMG_SECURITY,
    description: "Несигнатурная защита от новейших угроз: шифровальщиков, эксплойтов и майнеров. Работает вместе с любым антивирусом.",
    tags: ["windows", "шифровальщики", "эксплойты", "защита"]
  }
];

export const CATEGORIES = ["Все", "Для Windows", "Для Android", "Для macOS", "Семейные"];
