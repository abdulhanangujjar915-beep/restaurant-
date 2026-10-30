import React, { useState } from 'react';
import { UtensilsCrossed, Phone, Mail, MapPin, CheckCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#050c08] border-t border-[#1d3b2e] text-[#e6dcce] relative overflow-hidden">
      {/* Decorative top border highlight */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#c89d47] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-[#c89d47]/70 flex items-center justify-center bg-[#142a20]">
                <UtensilsCrossed className="w-4 h-4 text-[#dfb15b]" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-widest text-[#faf7f2]">
                {RESTAURANT_INFO.name}
              </span>
            </div>

            <p className="font-serif text-sm text-[#dfb15b] tracking-wider italic">
              Taste of Pakistan · ذائقہ
            </p>

            <p className="text-xs text-[#e6dcce]/80 leading-relaxed max-w-sm">
              Honoring authentic Pakistani culinary heritage with slow-cooked handis, cast iron karahis, live charcoal grills, and warm royal hospitality.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#142a20] border border-[#c89d47]/30 text-xs font-semibold text-[#dfb15b]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Certified Halal</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#142a20] border border-[#1d3b2e] text-xs text-[#e6dcce]/80">
                <span>Lahore, PK</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#faf7f2] tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#dfb15b] transition-colors">
                  Our Menu & Delicacies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#dfb15b] transition-colors">
                  The Story of ZAQA
                </a>
              </li>
              <li>
                <a href="#specials" className="hover:text-[#dfb15b] transition-colors">
                  Chef's Signature Dishes
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#dfb15b] transition-colors">
                  Culinary Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#dfb15b] transition-colors">
                  Guest Testimonials
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-[#dfb15b] transition-colors">
                  Table Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Signature Cuisines */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#faf7f2] tracking-wide">
              Signatures
            </h4>
            <ul className="space-y-2 text-xs text-[#e6dcce]/80">
              <li>Royal Mutton Karahi</li>
              <li>Dum Pukht Biryani</li>
              <li>Shahi Nalli Nihari</li>
              <li>Smoky Seekh Kebabs</li>
              <li>Boneless Chicken Handi</li>
              <li>Fresh Roghani Naan</li>
              <li>Kashmiri Pink Chai</li>
            </ul>
          </div>

          {/* Newsletter & Club */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-[#faf7f2] tracking-wide">
              Royal Dining Club
            </h4>
            <p className="text-xs text-[#e6dcce]/80 leading-relaxed">
              Subscribe for private banquet event invitations, seasonal winter menus, and culinary stories.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-lg bg-[#142a20] border border-emerald-500/50 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Shukriya! You are now subscribed to the Royal Club.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3 py-2 text-xs text-[#faf7f2] focus:outline-none placeholder-[#e6dcce]/40"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-xs rounded-lg transition-all flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-[#e6dcce]/70 space-y-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span>{RESTAURANT_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
                <span className="truncate">{RESTAURANT_INFO.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#1d3b2e] flex flex-col sm:flex-row items-center justify-between text-xs text-[#e6dcce]/60 gap-4">
          <p>© {new Date().getFullYear()} ZAQA – Taste of Pakistan. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for authentic Pakistani cuisine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
