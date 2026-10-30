import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const FoodGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = ['all', 'Karahis', 'Biryani & Rice', 'BBQ & Grills', 'Ambiance & Feasts'];

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredGallery.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex(
      (activeImageIndex - 1 + filteredGallery.length) % filteredGallery.length
    );
  };

  return (
    <section id="gallery" className="py-24 bg-[#0b1712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-2">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Feast</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            The ZAQA Culinary Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light">
            Glimpse into the steaming woks, live charcoal grills, and opulent dining tables of Lahore.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg capitalize transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#c89d47] text-[#0b1712] font-semibold shadow-md'
                  : 'bg-[#142a20] text-[#e6dcce] hover:text-[#faf7f2] hover:bg-[#1d3b2e]'
              }`}
            >
              {cat === 'all' ? 'All Moments' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer border border-[#1d3b2e] hover:border-[#c89d47]/60 transition-all duration-300 shadow-lg shadow-black/40"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060e0a] via-[#060e0a]/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] uppercase tracking-wider text-[#dfb15b] bg-[#0b1712]/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#c89d47]/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#c89d47]/90 text-[#0b1712] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-xl font-bold text-[#faf7f2] group-hover:text-[#dfb15b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#e6dcce]/80 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#142a20] text-[#faf7f2] hover:text-[#dfb15b] hover:bg-[#1d3b2e] border border-[#c89d47]/40 z-10 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#142a20]/80 hover:bg-[#142a20] text-[#faf7f2] hover:text-[#dfb15b] border border-white/20 z-10 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#142a20]/80 hover:bg-[#142a20] text-[#faf7f2] hover:text-[#dfb15b] border border-white/20 z-10 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredGallery[activeImageIndex].image}
              alt={filteredGallery[activeImageIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg border border-[#c89d47]/30 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <h4 className="font-serif text-2xl font-bold text-[#faf7f2]">
                {filteredGallery[activeImageIndex].title}
              </h4>
              <p className="text-sm text-[#dfb15b] mt-1">
                {filteredGallery[activeImageIndex].description}
              </p>
              <p className="text-xs text-[#e6dcce]/60 mt-1">
                {activeImageIndex + 1} of {filteredGallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
