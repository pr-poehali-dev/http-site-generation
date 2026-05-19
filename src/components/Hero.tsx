import { Product } from "@/types/shop";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

interface HeroProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
}

const STATS = [
  { value: "25 лет", label: "На рынке" },
  { value: "500 млн+", label: "Защищённых устройств" },
  { value: "Мгновенно", label: "Активация лицензии" },
  { value: "30 дней", label: "Гарантия возврата" },
];

export default function Hero({ onNavigate, onAddToCart }: HeroProps) {
  const featured = PRODUCTS.slice(0, 4);

  return (
    <div className="grid-pattern">
      {/* Hero Banner */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/61cf3b96-acb8-4a4d-ac23-4196f1c769a1.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-40 w-48 h-48 rounded-full bg-pink-500/15 blur-2xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Официальный магазин Dr.Web
            </div>

            <h1 className="font-oswald text-6xl sm:text-7xl lg:text-8xl font-bold leading-none mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text">ЗАЩИТА</span>
              <br />
              <span className="text-foreground">БЕЗ</span>
              <br />
              <span className="text-foreground">КОМПРОМИССОВ</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Антивирусы Dr.Web для Windows, Android, macOS и всей семьи. Мгновенная активация — лицензия приходит на email сразу после оплаты.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={() => onNavigate("catalog")}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:opacity-90 transition-all neon-glow hover:scale-105 active:scale-95 duration-200"
              >
                Смотреть каталог
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg hover:bg-secondary transition-all duration-200"
              >
                О нас
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-oswald text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">Рекомендуем</div>
            <h2 className="font-oswald text-4xl font-bold text-foreground">Хиты продаж</h2>
          </div>
          <button
            onClick={() => onNavigate("catalog")}
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-200 font-medium"
          >
            Все товары <Icon name="ArrowRight" size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative overflow-hidden rounded-3xl gradient-border">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/30" />
          <img
            src="https://cdn.poehali.dev/projects/c5b5e1bc-f8e3-4240-92df-3367d70a5f14/files/6a86d9eb-0fc1-4c9e-b09b-050a8f5faaaf.jpg"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="font-oswald text-5xl font-bold text-white mb-3">
                До <span className="gradient-text">−30%</span>
              </div>
              <div className="text-xl text-gray-300 font-medium">на лицензии Dr.Web для семьи</div>
              <div className="text-gray-400 mt-2">Предложение действует до конца мая 2026</div>
            </div>
            <button
              onClick={() => onNavigate("catalog")}
              className="px-10 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 duration-200 shrink-0"
            >
              Воспользоваться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}