import Icon from "@/components/ui/icon";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <button onClick={() => onNavigate("home")} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow">
                <span className="text-white font-bold text-sm font-oswald">W</span>
              </div>
              <span className="text-xl font-bold font-oswald gradient-text tracking-wider">DR.WEB</span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Официальный магазин лицензий Dr.Web. Антивирусная защита для Windows, Android, macOS и всей семьи.
            </p>
            <div className="flex gap-3">
              {["Instagram", "Youtube", "Send"].map((icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all text-muted-foreground">
                  <Icon name={icon as "Send"} size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="font-semibold text-foreground mb-4 text-sm">Магазин</div>
            <div className="space-y-2.5">
              {[
                { id: "catalog", label: "Каталог" },
                { id: "about", label: "О нас" },
                { id: "reviews", label: "Отзывы" },
                { id: "contacts", label: "Контакты" },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="font-semibold text-foreground mb-4 text-sm">Информация</div>
            <div className="space-y-2.5">
              {["Доставка и оплата", "Возврат товара", "Гарантия", "Программа лояльности"].map(item => (
                <div key={item} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="font-semibold text-foreground mb-4 text-sm">Рассылка</div>
            <p className="text-sm text-muted-foreground mb-4">Подпишитесь на акции и новинки</p>
            <div className="flex flex-col gap-2">
              <input
                placeholder="Ваш email"
                className="px-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-all">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">© {year} NOVA. Все права защищены.</div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Политика конфиденциальности</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Условия использования</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="Shield" size={13} className="text-primary" />
            Платежи защищены SSL
          </div>
        </div>
      </div>
    </footer>
  );
}