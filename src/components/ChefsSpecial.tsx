import React from 'react';
import { Crown, Sparkles, Plus, Clock, Flame } from 'lucide-react';
import { CHEFS_SPECIALS, MenuItem, MENU_ITEMS } from '../data/restaurantData';

interface ChefsSpecialProps {
  onAddToCart: (dish: MenuItem, spiceLevel?: 1 | 2 | 3) => void;
  onOpenDishModal: (dish: MenuItem) => void;
}

export const ChefsSpecial: React.FC<ChefsSpecialProps> = ({
  onAddToCart,
  onOpenDishModal
}) => {
  const handleOrderSpecial = (specialId: string) => {
    // Match corresponding MenuItem
    let matchId = 'mutton-karahi';
    if (specialId.includes('nihari')) matchId = 'beef-nihari';
    if (specialId.includes('biryani')) matchId = 'chicken-biryani';

    const dish = MENU_ITEMS.find((d) => d.id === matchId);
    if (dish) {
      onAddToCart(dish, dish.spiceLevel);
    }
  };

  return (
    <section id="specials" className="py-24 bg-[#08120d] relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#142a20]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.25em] mb-2">
            <Crown className="w-4 h-4" />
            <span>Master Ustaad's Selection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            Chef's Signature Creations
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light leading-relaxed">
            Three rare culinary masterpieces requiring heirloom techniques, hand-pounded spices, and hours of patient firecraft.
          </p>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHEFS_SPECIALS.map((item, index) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between bg-gradient-to-b from-[#142a20]/90 to-[#0b1712] rounded-2xl overflow-hidden border border-[#c89d47]/40 hover:border-[#c89d47] transition-all duration-300 shadow-xl shadow-black/50 hover:-translate-y-1.5"
            >
              {/* Image with subtle badge */}
              <div className="relative h-64 overflow-hidden bg-[#142a20]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142a20] via-transparent to-transparent opacity-90" />

                <div className="absolute top-4 left-4 bg-[#0b1712]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#c89d47]/40 flex items-center gap-1.5">
                  <Crown className="w-3.5 h-3.5 text-[#dfb15b]" />
                  <span className="text-xs font-semibold text-[#dfb15b]">
                    Signature #{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#faf7f2]/90">
                  <div className="flex items-center gap-1 bg-[#0b1712]/70 backdrop-blur-sm px-2.5 py-1 rounded">
                    <Clock className="w-3.5 h-3.5 text-[#dfb15b]" />
                    <span>{item.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#0b1712]/70 backdrop-blur-sm px-2.5 py-1 rounded">
                    <Flame className="w-3.5 h-3.5 text-rose-400" />
                    <span>Pure Charcoal & Dum</span>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-[#c89d47] uppercase tracking-wider block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#faf7f2] group-hover:text-[#dfb15b] transition-colors">
                    {item.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#e6dcce]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Secret Spice / Technique Callout */}
                  <div className="mt-4 p-3.5 rounded-lg bg-[#08120d]/80 border border-[#1d3b2e] text-xs">
                    <div className="flex items-center gap-1.5 text-[#dfb15b] font-medium mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Heirloom Touch:</span>
                    </div>
                    <p className="text-[#e6dcce]/75 italic">
                      "{item.secretIngredient}"
                    </p>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-6 pt-4 border-t border-[#1d3b2e] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#e6dcce]/60 block">Signature Price</span>
                    <span className="font-sans text-xl font-bold text-[#dfb15b] tabular-nums">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOrderSpecial(item.id)}
                    className="px-4 py-2.5 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-xs sm:text-sm rounded-md transition-all shadow-md shadow-[#c89d47]/20 flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Order Signature</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
