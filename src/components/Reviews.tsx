import Icon from "@/components/ui/icon";

const REVIEWS = [
  {
    id: 1,
    name: "Мария Соколова",
    avatar: "М",
    color: "from-purple-500 to-pink-500",
    rating: 5,
    date: "14 мая 2026",
    text: "Заказывала наушники — пришли быстро, упаковка идеальная. Качество превзошло все ожидания! Буду заказывать ещё.",
    product: "Беспроводные наушники Pro X",
    verified: true,
  },
  {
    id: 2,
    name: "Алексей Петров",
    avatar: "А",
    color: "from-cyan-500 to-blue-500",
    rating: 5,
    date: "10 мая 2026",
    text: "Смарт-часы просто огонь! Все функции работают, дизайн крутой. Доставка за 2 дня — очень доволен.",
    product: "Смарт-часы Quantum",
    verified: true,
  },
  {
    id: 3,
    name: "Екатерина Волкова",
    avatar: "Е",
    color: "from-orange-500 to-red-500",
    rating: 4,
    date: "5 мая 2026",
    text: "Сумка красивая, кожа натуральная. Немного маловата оказалась, но выглядит роскошно. Рекомендую!",
    product: "Сумка Premium Leather",
    verified: false,
  },
  {
    id: 4,
    name: "Дмитрий Новиков",
    avatar: "Д",
    color: "from-green-500 to-teal-500",
    rating: 5,
    date: "1 мая 2026",
    text: "Кроссовки удобные, лёгкие. Заказал 42 размер — подошли идеально. Скидка -27% — просто подарок! Магазин топ.",
    product: "Кроссовки Urban Run",
    verified: true,
  },
  {
    id: 5,
    name: "Ольга Кузнецова",
    avatar: "О",
    color: "from-pink-500 to-rose-500",
    rating: 5,
    date: "28 апреля 2026",
    text: "Набор для ухода за кожей — это что-то! После первой недели применения кожа реально стала лучше. Очень довольна.",
    product: "Скинкеа набор Glow",
    verified: true,
  },
  {
    id: 6,
    name: "Роман Сидоров",
    avatar: "Р",
    color: "from-violet-500 to-purple-500",
    rating: 4,
    date: "25 апреля 2026",
    text: "Рюкзак отличный — и для работы, и для города. USB-порт очень удобен. Единственное — хотелось бы больше цветов.",
    product: "Рюкзак Tech Explorer",
    verified: true,
  },
];

const SUMMARY = { avg: 4.8, total: 1543, dist: [72, 18, 7, 2, 1] };

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">Мнения покупателей</div>
        <h1 className="font-oswald text-5xl font-bold text-foreground mb-4">Отзывы</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Реальные отзывы от наших покупателей — мы не редактируем и не удаляем их</p>
      </div>

      {/* Summary */}
      <div className="bg-card border border-border rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="text-center">
            <div className="font-oswald text-7xl font-bold gradient-text mb-2">{SUMMARY.avg}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="text-muted-foreground text-sm">{SUMMARY.total.toLocaleString("ru-RU")} отзывов</div>
          </div>
          <div className="flex-1 w-full space-y-2">
            {SUMMARY.dist.map((pct, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-3">{5 - i}</span>
                <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <div
            key={review.id}
            className="bg-card border border-border rounded-2xl p-6 card-hover animate-fade-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold shrink-0`}>
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">{review.name}</span>
                  {review.verified && (
                    <Icon name="BadgeCheck" size={14} className="text-primary shrink-0" />
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{review.date}</div>
              </div>
            </div>

            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={13} className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"} />
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{review.text}</p>

            <div className="flex items-center gap-2 pt-3 border-t border-border">
              <Icon name="ShoppingBag" size={13} className="text-primary shrink-0" />
              <span className="text-xs text-muted-foreground line-clamp-1">{review.product}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <div className="font-oswald text-2xl font-bold text-foreground mb-3">Уже делали покупку?</div>
        <p className="text-muted-foreground mb-6">Поделитесь своим мнением — это помогает другим покупателям</p>
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all neon-glow">
          Написать отзыв
        </button>
      </div>
    </div>
  );
}
