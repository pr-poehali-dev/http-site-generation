import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onCartOpen: () => void;
  onProfileOpen: () => void;
}

const NAV_LINKS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О магазине" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ activePage, onNavigate, cartCount, onCartOpen, onProfileOpen }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center neon-glow">
              <span className="text-white font-bold text-sm font-oswald">W</span>
            </div>
            <span className="text-xl font-bold font-oswald gradient-text tracking-wider">DR.WEB</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activePage === link.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onProfileOpen}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <Icon name="User" size={20} />
            </button>

            <button
              onClick={onCartOpen}
              className="relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
            >
              <Icon name="ShoppingBag" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white text-xs flex items-center justify-center font-bold animate-scale-in">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activePage === link.id
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}