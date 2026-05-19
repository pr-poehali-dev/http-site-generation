import { useState, useMemo } from "react";
import { Product } from "@/types/shop";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

type SortOption = "popular" | "price_asc" | "price_desc" | "rating";

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [category, setCategory] = useState("Все");
  const [sort, setSort] = useState<SortOption>("popular");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [search, setSearch] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];

    if (category !== "Все") list = list.filter(p => p.category === category);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (priceMin) list = list.filter(p => p.price >= Number(priceMin));
    if (priceMax) list = list.filter(p => p.price <= Number(priceMax));
    if (minRating > 0) list = list.filter(p => p.rating >= minRating);

    switch (sort) {
      case "price_asc": return list.sort((a, b) => a.price - b.price);
      case "price_desc": return list.sort((a, b) => b.price - a.price);
      case "rating": return list.sort((a, b) => b.rating - a.rating);
      default: return list.sort((a, b) => b.reviews - a.reviews);
    }
  }, [category, sort, priceMin, priceMax, minRating, search]);

  const resetFilters = () => {
    setCategory("Все");
    setPriceMin("");
    setPriceMax("");
    setMinRating(0);
    setSearch("");
    setSort("popular");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="text-sm text-primary font-semibold mb-1 uppercase tracking-widest">Магазин</div>
        <h1 className="font-oswald text-5xl font-bold text-foreground">Каталог</h1>
        <p className="text-muted-foreground mt-2">{filtered.length} товаров</p>
      </div>

      {/* Search bar */}
      <div className="relative mb-6">
        <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Поиск товаров..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="lg:w-64 shrink-0">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-foreground font-medium w-full"
            >
              <Icon name="SlidersHorizontal" size={18} />
              Фильтры
              <Icon name={filtersOpen ? "ChevronUp" : "ChevronDown"} size={16} className="ml-auto" />
            </button>
          </div>

          <div className={`space-y-6 ${filtersOpen ? "block" : "hidden lg:block"}`}>
            {/* Categories */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Tag" size={16} className="text-primary" />
                Категории
              </h3>
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      category === cat
                        ? "bg-primary/20 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Banknote" size={16} className="text-primary" />
                Цена, ₽
              </h3>
              <div className="flex gap-2">
                <input
                  value={priceMin}
                  onChange={e => setPriceMin(e.target.value)}
                  placeholder="От"
                  type="number"
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
                />
                <input
                  value={priceMax}
                  onChange={e => setPriceMax(e.target.value)}
                  placeholder="До"
                  type="number"
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Icon name="Star" size={16} className="text-primary" />
                Рейтинг
              </h3>
              <div className="space-y-2">
                {[0, 4, 4.5, 4.8].map(r => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                      minRating === r
                        ? "bg-primary/20 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {r === 0 ? (
                      "Любой"
                    ) : (
                      <>
                        <span className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={12} className={i < r ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"} />
                          ))}
                        </span>
                        <span>от {r}</span>
                      </>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={resetFilters}
              className="w-full py-2.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all text-sm font-medium"
            >
              Сбросить фильтры
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="flex-1">
          {/* Sort */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-muted-foreground text-sm">Найдено: {filtered.length}</span>
            <div className="flex items-center gap-2">
              <Icon name="ArrowUpDown" size={16} className="text-muted-foreground" />
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary"
              >
                <option value="popular">По популярности</option>
                <option value="price_asc">Цена: от низкой</option>
                <option value="price_desc">Цена: от высокой</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <div className="text-xl font-semibold text-foreground mb-2">Ничего не найдено</div>
              <div className="text-muted-foreground mb-6">Попробуйте изменить фильтры</div>
              <button onClick={resetFilters} className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold">
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
