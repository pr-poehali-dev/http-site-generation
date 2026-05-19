import { useState } from "react";
import { Product } from "@/types/shop";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border card-hover">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              {product.badge}
            </span>
          </div>
        )}

        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center transition-all hover:bg-background hover:scale-110"
        >
          <Icon
            name={liked ? "Heart" : "Heart"}
            size={16}
            className={liked ? "text-pink-500 fill-pink-500" : "text-muted-foreground"}
          />
        </button>

        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 ${
            added
              ? "bg-green-500 opacity-100"
              : "bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 hover:opacity-90"
          }`}
        >
          {added ? "✓ Добавлено!" : "В корзину"}
        </button>
      </div>

      <div className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-semibold text-foreground text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={12}
              className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-lg text-foreground">
              {product.price.toLocaleString("ru-RU")} ₽
            </span>
            {product.oldPrice && (
              <div className="text-xs text-muted-foreground line-through">
                {product.oldPrice.toLocaleString("ru-RU")} ₽
              </div>
            )}
          </div>
          {discount && (
            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
              −{discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
