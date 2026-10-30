import React, { useState } from 'react';
import { X, Flame, Clock, Users, Plus, Check } from 'lucide-react';
import { MenuItem } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem, spiceLevel: 1 | 2 | 3) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  dish,
  onClose,
  onAddToCart
}) => {
  if (!dish) return null;

  const [selectedSpice, setSelectedSpice] = useState<1 | 2 | 3>(dish.spiceLevel);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(dish, selectedSpice);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#0b1712] border border-[#c89d47]/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0b1712]/80 text-[#faf7f2] hover:text-[#dfb15b] hover:bg-[#142a20] transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <div className="relative h-60 bg-[#142a20]">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1712] via-transparent to-transparent opacity-90" />
          {dish.badge && (
            <span className="absolute top-4 left-4 text-xs font-semibold text-[#dfb15b] bg-[#0b1712]/90 backdrop-blur-sm px-3 py-1 rounded-md border border-[#c89d47]/40">
              {dish.badge}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-center justify-between text-xs text-[#dfb15b] mb-1">
              <span className="uppercase tracking-wider font-semibold">
                {dish.category}
              </span>
              {dish.urduName && (
                <span className="font-serif text-base text-[#dfb15b]">
                  {dish.urduName}
                </span>
              )}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#faf7f2]">
              {dish.name}
            </h3>

            <p className="mt-2 text-sm text-[#e6dcce]/80 leading-relaxed">
              {dish.description}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#142a20] border border-[#1d3b2e] text-xs">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#dfb15b]" />
              <div>
                <span className="text-[#e6dcce]/60 block text-[10px]">Portion</span>
                <span className="font-semibold text-[#faf7f2]">{dish.servingSize}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#dfb15b]" />
              <div>
                <span className="text-[#e6dcce]/60 block text-[10px]">Prep Time</span>
                <span className="font-semibold text-[#faf7f2]">{dish.preparationTime}</span>
              </div>
            </div>
          </div>

          {/* Spice Level Preference */}
          <div>
            <label className="block text-xs font-semibold text-[#e6dcce] mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-rose-400" />
              <span>Customize Spice Intensity:</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { level: 1 as const, label: 'Mild Flavor' },
                { level: 2 as const, label: 'Medium Desi' },
                { level: 3 as const, label: 'Spicy Authentic' },
              ].map((opt) => (
                <button
                  key={opt.level}
                  type="button"
                  onClick={() => setSelectedSpice(opt.level)}
                  className={`py-2 px-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                    selectedSpice === opt.level
                      ? 'bg-[#c89d47] text-[#0b1712] border-[#c89d47] font-bold shadow-sm'
                      : 'bg-[#142a20] text-[#e6dcce] border-[#1d3b2e] hover:border-[#c89d47]/40'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Price & Add */}
          <div className="pt-4 border-t border-[#1d3b2e] flex items-center justify-between">
            <div>
              <span className="text-xs text-[#e6dcce]/60 block">Price</span>
              <span className="font-sans font-bold text-2xl text-[#dfb15b] tabular-nums">
                Rs. {dish.price.toLocaleString()}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] shadow-md shadow-[#c89d47]/20 hover:scale-[1.02]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Feast!</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
