import React from 'react';
import { ArrowDown, Calendar, Sparkles, Award, Clock } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Full-screen Background Pakistani Food Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Opulent Pakistani Feast Table at ZAQA"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark emerald & charcoal gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e0a] via-[#060e0a]/80 to-[#060e0a]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#060e0a]/40 to-[#060e0a]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Kicker / Cultural Marker */}
        <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-medium text-[#dfb15b] uppercase tracking-[0.25em] mb-4">
          <span className="h-px w-8 bg-[#c89d47]/60" />
          <span>EST. 2001 · LAHORE</span>
          <span className="h-px w-8 bg-[#c89d47]/60" />
        </div>

        {/* Restaurant Name */}
        <div className="mb-2">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#faf7f2] drop-shadow-md">
            {RESTAURANT_INFO.name}
          </h1>
          <p className="font-serif text-xl sm:text-2xl text-[#c89d47] tracking-widest mt-1 italic">
            Taste of Pakistan
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#f4efe6] max-w-3xl mt-4 leading-tight">
          {RESTAURANT_INFO.tagline}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#e6dcce]/90 max-w-2xl mt-4 font-light leading-relaxed">
          {RESTAURANT_INFO.subtitle} Savor centuries of royal culinary artistry, slow-cooked iron wok karahis, aromatic saffron dum biryani, and charcoal-kissed grills.
        </p>

        {/* Two Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-base rounded-md transition-all shadow-lg shadow-[#c89d47]/25 flex items-center justify-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Menu</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onBookTable}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#142a20]/90 hover:bg-[#1d3b2e] text-[#faf7f2] border border-[#c89d47]/50 hover:border-[#c89d47] font-semibold text-base rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4 text-[#dfb15b]" />
            <span>Book a Table</span>
          </button>
        </div>

        {/* Heritage Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-[#c89d47]/20 text-xs sm:text-sm text-[#e6dcce]/80">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#dfb15b]" />
            <span>100% Halal Prime Cuts</span>
          </div>
          <span className="hidden sm:inline text-[#c89d47]/40">·</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#dfb15b]" />
            <span>Pure Desi Ghee & Fresh Stone-Ground Spices</span>
          </div>
          <span className="hidden sm:inline text-[#c89d47]/40">·</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#dfb15b]" />
            <span>Traditional Clay Tandoor & Iron Woks</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block bg-[#0b1712]/90 border-t border-[#1d3b2e] py-3.5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-4 gap-4 text-center divide-x divide-[#1d3b2e]">
          {RESTAURANT_INFO.stats.map((stat, i) => (
            <div key={i} className="px-2">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#dfb15b] tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#e6dcce]/70 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
