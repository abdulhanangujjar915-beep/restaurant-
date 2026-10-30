import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { MenuSection } from './components/MenuSection';
import { ChefsSpecial } from './components/ChefsSpecial';
import { FoodGallery } from './components/FoodGallery';
import { CustomerReviews } from './components/CustomerReviews';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { DishDetailModal } from './components/DishDetailModal';
import { Footer } from './components/Footer';
import { MenuItem, MENU_ITEMS } from './data/restaurantData';
import { CartItem } from './types/cart';
import { MessageSquare, ShoppingBag, ArrowUp } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with 1 signature item so the cart is lively and immediately demonstrates functionality
    {
      dish: MENU_ITEMS[0], // Royal Mutton Karahi
      quantity: 1,
      selectedSpiceLevel: 3
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedDishForModal, setSelectedDishForModal] = useState<MenuItem | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (dish: MenuItem, spiceLevel: 1 | 2 | 3 = dish.spiceLevel) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.dish.id === dish.id && it.selectedSpiceLevel === spiceLevel
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          dish,
          quantity: 1,
          selectedSpiceLevel: spiceLevel
        }
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.dish.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.dish.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1712] text-[#f4efe6] font-sans selection:bg-[#c89d47] selection:text-[#0b1712]">
      {/* Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => scrollToSection('reservation')}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO SECTION */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onBookTable={() => scrollToSection('reservation')}
        />

        {/* 2. ABOUT US */}
        <AboutUs />

        {/* 3. OUR MENU */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenDishModal={(dish) => setSelectedDishForModal(dish)}
        />

        {/* 4. CHEF'S SPECIAL */}
        <ChefsSpecial
          onAddToCart={handleAddToCart}
          onOpenDishModal={(dish) => setSelectedDishForModal(dish)}
        />

        {/* 5. FOOD GALLERY */}
        <FoodGallery />

        {/* 6. CUSTOMER REVIEWS */}
        <CustomerReviews />

        {/* 7. TABLE RESERVATION */}
        <ReservationSection />

        {/* 8. CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Beautiful Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Dish Quick Detail Modal */}
      <DishDetailModal
        dish={selectedDishForModal}
        onClose={() => setSelectedDishForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating Action Buttons (Sticky Quick Bar) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-11 h-11 rounded-full bg-[#142a20]/90 text-[#dfb15b] border border-[#c89d47]/40 hover:border-[#c89d47] flex items-center justify-center shadow-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Direct WhatsApp Quick Chat */}
        <a
          href="https://wa.me/923008472922?text=Salam%20ZAQA!%20I%20would%20like%20to%20inquire%20about%20ordering%20or%20booking%20a%20table."
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl shadow-emerald-900/50 hover:scale-105 transition-all cursor-pointer border border-emerald-400/50"
          title="Chat on WhatsApp"
          aria-label="Chat with ZAQA on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>

        {/* Floating Cart Trigger on Mobile */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="lg:hidden w-12 h-12 rounded-full bg-[#c89d47] text-[#0b1712] flex items-center justify-center shadow-xl shadow-[#c89d47]/30 hover:scale-105 transition-all cursor-pointer relative font-bold"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {totalCartCount}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
