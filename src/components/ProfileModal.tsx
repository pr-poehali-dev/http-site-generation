import { useState } from "react";
import Icon from "@/components/ui/icon";

interface ProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const ORDERS = [
  { id: "#12845", date: "15 мая 2026", status: "Доставлен", total: "8 990 ₽", color: "text-green-400" },
  { id: "#12733", date: "10 мая 2026", status: "В пути", total: "14 990 ₽", color: "text-blue-400" },
  { id: "#12611", date: "2 мая 2026", status: "Доставлен", total: "6 500 ₽", color: "text-green-400" },
];

export default function ProfileModal({ open, onClose }: ProfileModalProps) {
  const [tab, setTab] = useState<"profile" | "orders" | "settings">("profile");
  const [isLogin, setIsLogin] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-oswald text-2xl font-bold text-foreground">Профиль</h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-all">
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {[
            { id: "profile", label: "Профиль", icon: "User" },
            { id: "orders", label: "Заказы", icon: "Package" },
            { id: "settings", label: "Настройки", icon: "Settings" },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as typeof tab)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium transition-all border-b-2 ${
                tab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon name={t.icon as "User"} size={15} />
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === "profile" && (
            <div className="space-y-4">
              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold font-oswald mb-3">
                  А
                </div>
                <div className="font-bold text-foreground">Гость</div>
                <div className="text-sm text-muted-foreground">Не авторизован</div>
              </div>

              <div className="flex gap-2 p-1 bg-secondary rounded-xl mb-4">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${isLogin ? "bg-card text-foreground shadow" : "text-muted-foreground"}`}
                >
                  Войти
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${!isLogin ? "bg-card text-foreground shadow" : "text-muted-foreground"}`}
                >
                  Регистрация
                </button>
              </div>

              <input
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                placeholder="Пароль"
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Подтвердите пароль"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
              )}
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition-all neon-glow">
                {isLogin ? "Войти в аккаунт" : "Создать аккаунт"}
              </button>
            </div>
          )}

          {tab === "orders" && (
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground mb-4">История заказов</div>
              {ORDERS.map(order => (
                <div key={order.id} className="p-4 rounded-xl bg-secondary border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-foreground font-oswald">{order.id}</span>
                    <span className={`text-sm font-semibold ${order.color}`}>{order.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{order.date}</span>
                    <span className="font-semibold text-foreground">{order.total}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "settings" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground text-sm">Уведомления</div>
                  <div className="text-xs text-muted-foreground">Email-рассылка об акциях</div>
                </div>
                <div className="w-10 h-6 bg-primary rounded-full cursor-pointer" />
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground text-sm">Сохранять адрес</div>
                  <div className="text-xs text-muted-foreground">Запоминать адрес доставки</div>
                </div>
                <div className="w-10 h-6 bg-secondary rounded-full border-2 border-border cursor-pointer" />
              </div>
              <div className="p-4 rounded-xl bg-secondary border border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground text-sm">Тёмная тема</div>
                  <div className="text-xs text-muted-foreground">Включена по умолчанию</div>
                </div>
                <div className="w-10 h-6 bg-primary rounded-full cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
