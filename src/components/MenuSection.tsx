import React, { useState, useMemo } from 'react';
import { Plus, Search, Flame, Clock, Users, Check, Eye } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddToCart: (dish: MenuItem, spiceLevel?: 1 | 2 | 3) => void;
  onOpenDishModal: (dish: MenuItem) => void;
}

type MenuCategory = 'all' | 'karahi' | 'rice' | 'bbq' | 'breads' | 'specials' | 'desserts';

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenDishModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<{ [id: string]: boolean }>({});

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: 'All Specialties' },
    { key: 'karahi', label: 'Karahi & Handi' },
    { key: 'rice', label: 'Dum Biryani & Rice' },
    { key: 'bbq', label: 'Charcoal BBQ' },
    { key: 'breads', label: 'Clay Oven Naans' },
    { key: 'specials', label: 'Royal Specials' },
    { key: 'desserts', label: 'Desserts & Chai' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.urduName && item.urduName.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (dish: MenuItem) => {
    onAddToCart(dish, dish.spiceLevel);
    setAddedItems((prev) => ({ ...prev, [dish.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [dish.id]: false }));
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-[#0b1712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-2">
            <span>Dine with Royalty</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            Our Traditional Menu
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light">
            Every dish is prepared fresh using whole stone-ground spices, pure ghee, and unadulterated passion.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#1d3b2e]">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#c89d47] text-[#0b1712] shadow-md shadow-[#c89d47]/20 font-semibold'
                    : 'bg-[#142a20]/70 text-[#e6dcce] hover:text-[#faf7f2] hover:bg-[#1d3b2e]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Karahi, Nihari)..."
              className="w-full bg-[#142a20]/90 border border-[#1d3b2e] focus:border-[#c89d47] focus:outline-none rounded-lg py-2 pl-9 pr-4 text-xs sm:text-sm text-[#faf7f2] placeholder-[#e6dcce]/40 transition-colors"
            />
            <Search className="w-4 h-4 text-[#e6dcce]/60 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-[#e6dcce]/60 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#0e241a]/40 rounded-xl border border-[#1d3b2e]">
            <p className="text-lg font-serif text-[#faf7f2]">No dishes found</p>
            <p className="text-sm text-[#e6dcce]/70 mt-1">
              Try searching for something else or switch category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#c89d47] text-[#0b1712] rounded-md"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredItems.map((dish) => {
            const isAdded = addedItems[dish.id];

            return (
              <div
                key={dish.id}
                className="group flex flex-col justify-between bg-[#0e241a]/70 rounded-xl overflow-hidden border border-[#1d3b2e] hover:border-[#c89d47]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
              >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden bg-[#142a20]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e241a] via-transparent to-transparent opacity-90" />

                  {/* Clean unboxed tag in top right */}
                  {dish.badge && (
                    <span className="absolute top-3 right-3 text-[11px] font-semibold text-[#dfb15b] bg-[#0b1712]/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#c89d47]/40 shadow-sm">
                      {dish.badge}
                    </span>
                  )}

                  {/* Quick Detail Trigger */}
                  <button
                    type="button"
                    onClick={() => onOpenDishModal(dish)}
                    className="absolute top-3 left-3 p-1.5 rounded bg-[#0b1712]/80 hover:bg-[#0b1712] text-[#e6dcce] hover:text-[#dfb15b] opacity-0 group-hover:opacity-100 transition-opacity border border-white/10"
                    title="View Dish Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Spice meter */}
                  <div className="absolute bottom-2 left-3 flex items-center gap-1 text-[11px] text-[#e6dcce]/90">
                    <span className="flex items-center text-rose-400">
                      {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                        <Flame key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#e6dcce]/60 ml-0.5">
                      {dish.spiceLevel === 1
                        ? 'Mild'
                        : dish.spiceLevel === 2
                        ? 'Medium'
                        : 'Desi Spicy'}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Urdu name and Category */}
                    <div className="flex items-center justify-between text-xs text-[#dfb15b]/80 mb-1">
                      <span className="uppercase tracking-wider font-medium text-[11px]">
                        {dish.category}
                      </span>
                      {dish.urduName && (
                        <span className="font-serif text-sm font-normal text-[#dfb15b]">
                          {dish.urduName}
                        </span>
                      )}
                    </div>

                    {/* Dish Title */}
                    <h3 className="font-serif text-lg font-bold text-[#faf7f2] group-hover:text-[#dfb15b] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#e6dcce]/75 line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Serving & Prep Metadata */}
                    <div className="flex items-center gap-3 text-xs text-[#e6dcce]/60 mt-3 pt-3 border-t border-[#1d3b2e]">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#dfb15b]" />
                        <span className="truncate max-w-[110px]">{dish.servingSize}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#dfb15b]" />
                        <span>{dish.preparationTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Add to Order */}
                  <div className="mt-5 pt-3 border-t border-[#1d3b2e] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] text-[#e6dcce]/60 block leading-none">Price</span>
                      <span className="font-sans font-bold text-lg text-[#dfb15b] tabular-nums">
                        Rs. {dish.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuickAdd(dish)}
                      className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] shadow-sm hover:scale-[1.02] active:scale-[0.98]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
