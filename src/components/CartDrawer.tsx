import { CartItem } from "@/types/shop";
import Icon from "@/components/ui/icon";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQty: (id: number, qty: number) => void;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onClose, cart, onRemove, onUpdateQty, onCheckout }: CartDrawerProps) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalOld = cart.reduce((s, i) => s + (i.oldPrice ?? i.price) * i.qty, 0);
  const saved = totalOld - total;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-oswald text-2xl font-bold text-foreground">Корзина</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{cart.length} товара</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-secondary transition-all"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-7xl mb-4">🛍️</div>
              <div className="text-xl font-semibold text-foreground mb-2">Корзина пуста</div>
              <div className="text-muted-foreground">Добавьте что-нибудь из каталога</div>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-secondary border border-border animate-fade-in">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground mb-0.5">{item.category}</div>
                  <div className="font-semibold text-sm text-foreground line-clamp-2 mb-2">{item.name}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-background rounded-lg border border-border">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors rounded-l-lg"
                      >
                        <Icon name="Minus" size={12} />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors rounded-r-lg"
                      >
                        <Icon name="Plus" size={12} />
                      </button>
                    </div>
                    <span className="font-bold text-foreground">
                      {(item.price * item.qty).toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="self-start p-1.5 rounded-lg hover:bg-destructive/20 hover:text-destructive transition-all"
                >
                  <Icon name="Trash2" size={14} className="text-muted-foreground" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            {saved > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Вы экономите</span>
                <span className="text-green-400 font-semibold">−{saved.toLocaleString("ru-RU")} ₽</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">Итого</span>
              <span className="font-bold text-2xl font-oswald gradient-text">
                {total.toLocaleString("ru-RU")} ₽
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:opacity-90 transition-all neon-glow hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Оформить заказ
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Icon name="Shield" size={12} /> Безопасная оплата</span>
              <span className="flex items-center gap-1"><Icon name="Truck" size={12} /> Быстрая доставка</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
