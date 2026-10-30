import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b1712]/95 backdrop-blur-md border-b border-[#c89d47]/20 py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#060e0a]/90 via-[#060e0a]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2 whitespace-nowrap shrink-0 text-decoration-none"
            >
              <div className="w-8 h-8 rounded-full border border-[#c89d47]/60 flex items-center justify-center bg-[#142a20] group-hover:border-[#c89d47] transition-colors">
                <UtensilsCrossed className="w-4 h-4 text-[#dfb15b]" />
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#faf7f2] group-hover:text-[#dfb15b] transition-colors">
                {RESTAURANT_INFO.name}
              </span>
            </a>

            {/* Zone 2: 5 single-line clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#e6dcce]">
              <a
                href="#menu"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Our Menu
              </a>
              <a
                href="#about"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Our Story
              </a>
              <a
                href="#specials"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Chef's Specials
              </a>
              <a
                href="#gallery"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Food Gallery
              </a>
              <a
                href="#reviews"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Guest Reviews
              </a>
              <a
                href="#contact"
                className="hover:text-[#dfb15b] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#c89d47]"
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: Primary action & cart */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenCart}
                className="relative p-2.5 rounded-lg bg-[#142a20] hover:bg-[#1d3b2e] text-[#faf7f2] border border-[#c89d47]/30 hover:border-[#c89d47] transition-all flex items-center justify-center cursor-pointer"
                aria-label={`View Cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-[#dfb15b]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#c89d47] text-[#0b1712] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenReservation}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#0b1712] bg-[#c89d47] hover:bg-[#dfb15b] rounded-md transition-all shadow-md shadow-[#c89d47]/20 whitespace-nowrap shrink-0 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Table
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[#142a20] text-[#faf7f2] border border-white/10"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b1712] border-b border-[#c89d47]/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3 text-base font-medium text-[#e6dcce]">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Our Menu
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Our Story
              </a>
              <a
                href="#specials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Chef's Specials
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Food Gallery
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Guest Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#dfb15b] transition-colors"
              >
                Contact & Location
              </a>
            </nav>

            <div className="pt-3 border-t border-[#1d3b2e] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-[#0b1712] bg-[#c89d47] hover:bg-[#dfb15b] rounded-md transition-all shadow-md"
              >
                Book a Table
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-sm text-[#e6dcce] hover:text-[#dfb15b] py-1"
              >
                <Phone className="w-4 h-4 text-[#dfb15b]" />
                {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
