import React from 'react';
import { Flame, Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#08120d] relative overflow-hidden">
      {/* Decorative background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#142a20]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c89d47]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Culinary Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            The Story Behind ZAQA
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light leading-relaxed">
            Where centuries of royal Mughal kitchen secrets meet the vibrant soul of Pakistani hospitality.
          </p>
        </div>

        {/* 2-Column Split: Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c89d47]/30 shadow-2xl shadow-black/60 group">
              <img
                src={IMAGES.muttonKarahi}
                alt="Sizzling Mutton Karahi cooked in traditional cast iron wok at ZAQA"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e0a] via-transparent to-transparent opacity-80" />

              {/* Floating Floating Craft Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0b1712]/90 backdrop-blur-md border border-[#c89d47]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c89d47]/20 flex items-center justify-center shrink-0 border border-[#c89d47]/50">
                    <Flame className="w-5 h-5 text-[#dfb15b]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#faf7f2]">
                      Live Wok Fire & Pure Desi Ghee
                    </h4>
                    <p className="text-xs text-[#e6dcce]/80 mt-0.5">
                      Every Karahi is prepared fresh upon order on blazing cast iron woks in under 30 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative frame corner */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#c89d47]/40 rounded-tl-2xl -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#c89d47]/40 rounded-br-2xl -z-10" />
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-[#e6dcce] leading-relaxed">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#dfb15b] font-semibold">
                "Zaqa is not just food; it is an emotion, a celebration of heritage and home."
              </h3>
              <p className="text-base text-[#e6dcce]/90">
                Founded with a singular passion to honor Pakistan's rich culinary traditions, ZAQA brings together the legendary tastes of Lahore’s food streets, Peshawar’s Namak Mandi, and the regal kitchens of the Mughal era under one roof.
              </p>
              <p className="text-base text-[#e6dcce]/90">
                We believe true flavor cannot be rushed. Our chefs grind whole spices daily on granite sil-battas, source farm-fresh chicken and tender mountain goat, and slow-simmer our gravies in heavy brass and copper cauldrons for up to 8 hours.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1d3b2e]">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0e241a]/60 border border-[#1d3b2e]">
                <CheckCircle2 className="w-5 h-5 text-[#dfb15b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">No Artificial Preservatives</h4>
                  <p className="text-xs text-[#e6dcce]/70 mt-0.5">Only raw spices, farm-fresh garlic, ginger & ripe country tomatoes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0e241a]/60 border border-[#1d3b2e]">
                <CheckCircle2 className="w-5 h-5 text-[#dfb15b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">Authentic Clay Tandoors</h4>
                  <p className="text-xs text-[#e6dcce]/70 mt-0.5">Wood-fired earthen ovens for crisp Roghani and Garlic naans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0e241a]/60 border border-[#1d3b2e]">
                <CheckCircle2 className="w-5 h-5 text-[#dfb15b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">Generations of Ustaads</h4>
                  <p className="text-xs text-[#e6dcce]/70 mt-0.5">Culinary masters carrying ancestral spice-blending secrets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#0e241a]/60 border border-[#1d3b2e]">
                <HeartHandshake className="w-5 h-5 text-[#dfb15b] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#faf7f2]">Warm Desi Hospitality</h4>
                  <p className="text-xs text-[#e6dcce]/70 mt-0.5">Every guest is treated like royalty with customary warmth.</p>
                </div>
              </div>
            </div>

            {/* Quote attribution */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#142a20] to-[#0e241a] border-l-2 border-[#c89d47] flex items-center justify-between">
              <div>
                <p className="font-serif italic text-sm text-[#f4efe6]">
                  "When you cook with pure intent and honor the flame, the food carries soul."
                </p>
                <p className="text-xs text-[#dfb15b] mt-1 font-semibold">
                  — Ustaad Muhammad Bashir, Executive Master Chef
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
