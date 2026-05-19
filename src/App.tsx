import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import CartDrawer from "@/components/CartDrawer";
import ProfileModal from "@/components/ProfileModal";
import CheckoutModal from "@/components/CheckoutModal";
import Footer from "@/components/Footer";
import { CartItem, Product } from "@/types/shop";

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item));
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  const renderPage = () => {
    switch (activePage) {
      case "catalog": return <Catalog onAddToCart={addToCart} />;
      case "about": return <About />;
      case "reviews": return <Reviews />;
      case "contacts": return <Contacts />;
      default: return <Hero onNavigate={setActivePage} onAddToCart={addToCart} />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar
          activePage={activePage}
          onNavigate={setActivePage}
          cartCount={totalItems}
          onCartOpen={() => setCartOpen(true)}
          onProfileOpen={() => setProfileOpen(true)}
        />

        <main>{renderPage()}</main>

        <Footer onNavigate={setActivePage} />

        <CartDrawer
          open={cartOpen}
          onClose={() => setCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQty={updateQty}
          onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); }}
        />

        <ProfileModal open={profileOpen} onClose={() => setProfileOpen(false)} />
        <CheckoutModal
          open={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          cart={cart}
          onSuccess={() => { setCart([]); setCheckoutOpen(false); }}
        />
      </div>
    </TooltipProvider>
  );
}
