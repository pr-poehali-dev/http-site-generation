import { useState } from "react";
import Icon from "@/components/ui/icon";

const CONTACTS = [
  { icon: "Phone", label: "Телефон", value: "+7 (800) 123-45-67", hint: "Бесплатно, ежедневно 9–21" },
  { icon: "Mail", label: "Email", value: "hello@nova-shop.ru", hint: "Отвечаем в течение часа" },
  { icon: "MapPin", label: "Адрес", value: "Москва, ул. Тверская, 1", hint: "Пн–Пт: 10:00–19:00" },
  { icon: "MessageCircle", label: "Телеграм", value: "@nova_support", hint: "Быстрый ответ" },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-14">
        <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-widest">Связаться с нами</div>
        <h1 className="font-oswald text-5xl font-bold text-foreground mb-4">Контакты</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">Есть вопросы? Мы всегда рады помочь — выберите удобный способ связи</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CONTACTS.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 card-hover">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Icon name={c.icon as "Phone"} size={20} className="text-primary" />
                </div>
                <div className="text-xs text-muted-foreground mb-1">{c.label}</div>
                <div className="font-semibold text-foreground text-sm mb-1">{c.value}</div>
                <div className="text-xs text-muted-foreground">{c.hint}</div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-oswald text-xl font-bold text-foreground mb-4">Частые вопросы</h3>
            <div className="space-y-3">
              {[
                { q: "Как отследить заказ?", a: "После оформления вы получите номер трека на email." },
                { q: "Можно ли изменить заказ?", a: "Да, в течение 1 часа после оформления." },
                { q: "Как вернуть товар?", a: "Через личный кабинет или позвоните нам." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-border last:border-0 pb-3 last:pb-0">
                  <div className="font-semibold text-foreground text-sm mb-1">{faq.q}</div>
                  <div className="text-sm text-muted-foreground">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-oswald text-2xl font-bold text-foreground mb-6">Написать нам</h2>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Icon name="CheckCircle" size={32} className="text-green-400" />
              </div>
              <div className="font-bold text-foreground text-xl mb-2">Сообщение отправлено!</div>
              <div className="text-muted-foreground text-sm">Ответим в течение нескольких часов</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Имя</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                  <input
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.ru"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Тема</label>
                <select
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Выберите тему</option>
                  <option>Вопрос о заказе</option>
                  <option>Возврат товара</option>
                  <option>Проблема с оплатой</option>
                  <option>Сотрудничество</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Сообщение</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите ваш вопрос..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:opacity-90 transition-all neon-glow hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                Отправить сообщение
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
