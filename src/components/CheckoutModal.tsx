import { useState } from "react";
import { CartItem } from "@/types/shop";
import Icon from "@/components/ui/icon";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  onSuccess: () => void;
}

const PAYMENT_METHODS = [
  { id: "card", label: "Банковская карта", icon: "CreditCard" },
  { id: "sbp", label: "СБП", icon: "Smartphone" },
  { id: "cash", label: "Наличными при получении", icon: "Banknote" },
];

export default function CheckoutModal({ open, onClose, cart, onSuccess }: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState("card");
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [success, setSuccess] = useState(false);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleSubmit = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setStep(1);
      setForm({ name: "", phone: "", email: "", address: "" });
      onSuccess();
    }, 3000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-lg bg-card rounded-2xl border border-border shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
        {success ? (
          <div className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-green-400" />
            </div>
            <h2 className="font-oswald text-3xl font-bold text-foreground mb-3">Заказ оформлен!</h2>
            <p className="text-muted-foreground">
              Спасибо за покупку! Мы свяжемся с вами в ближайшее время для подтверждения заказа.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-oswald text-2xl font-bold text-foreground">Оформление заказа</h2>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-all">
                <Icon name="X" size={20} className="text-muted-foreground" />
              </button>
            </div>

            {/* Steps */}
            <div className="flex items-center gap-2 px-6 pt-6">
              {["Данные", "Доставка", "Оплата"].map((s, i) => (
                <div key={i} className="flex items-center gap-2 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white" : "bg-secondary text-muted-foreground"
                  }`}>
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span className={`text-xs font-medium ${step === i + 1 ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
                  {i < 2 && <div className={`flex-1 h-px ${step > i + 1 ? "bg-green-500" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <div className="p-6 space-y-4">
              {step === 1 && (
                <>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Имя и фамилия *</label>
                    <input
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Телефон *</label>
                    <input
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                    <input
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="email@example.ru"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Адрес доставки *</label>
                    <textarea
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      placeholder="Город, улица, дом, квартира"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Курьером", "Почта России", "СДЭК"].map(d => (
                      <button key={d} className="py-3 rounded-xl border border-primary bg-primary/10 text-primary text-sm font-medium">
                        {d}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-3">
                    {PAYMENT_METHODS.map(m => (
                      <button
                        key={m.id}
                        onClick={() => setPayment(m.id)}
                        className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                          payment === m.id ? "border-primary bg-primary/10" : "border-border bg-secondary hover:border-primary/50"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${payment === m.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                          <Icon name={m.icon as "CreditCard"} size={16} />
                        </div>
                        <span className={`font-medium ${payment === m.id ? "text-foreground" : "text-muted-foreground"}`}>
                          {m.label}
                        </span>
                        {payment === m.id && <Icon name="CheckCircle" size={18} className="text-primary ml-auto" />}
                      </button>
                    ))}
                  </div>

                  <div className="rounded-xl bg-secondary border border-border p-4 space-y-2">
                    <div className="text-sm font-semibold text-foreground mb-3">Ваш заказ</div>
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.name} × {item.qty}</span>
                        <span className="text-foreground">{(item.price * item.qty).toLocaleString("ru-RU")} ₽</span>
                      </div>
                    ))}
                    <div className="border-t border-border pt-2 flex justify-between font-bold">
                      <span className="text-foreground">Итого</span>
                      <span className="gradient-text">{total.toLocaleString("ru-RU")} ₽</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="px-6 pb-6 flex gap-3">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-secondary transition-all"
                >
                  Назад
                </button>
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition-all"
                >
                  Далее
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition-all neon-glow"
                >
                  Оплатить {total.toLocaleString("ru-RU")} ₽
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
