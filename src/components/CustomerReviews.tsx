import React, { useState } from 'react';
import { Star, MessageSquareQuote, CheckCircle, PlusCircle, ThumbsUp } from 'lucide-react';
import { REVIEWS, Review } from '../data/restaurantData';

export const CustomerReviews: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    favoriteDish: 'Royal Mutton Karahi',
    comment: ''
  });
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const created: Review = {
      id: `r-${Date.now()}`,
      name: newReview.name,
      location: newReview.location || 'Lahore, Pakistan',
      avatar: newReview.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      favoriteDish: newReview.favoriteDish
    };

    setReviewsList([created, ...reviewsList]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setSubmittedFeedback(false);
      setNewReview({
        name: '',
        location: '',
        rating: 5,
        favoriteDish: 'Royal Mutton Karahi',
        comment: ''
      });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-24 bg-[#08120d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-2">
              <Star className="w-3.5 h-3.5 fill-[#dfb15b]" />
              <span>Word of Mouth</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
              Honest Praise from Our Guests
            </h2>
            <div className="w-16 h-0.5 bg-[#c89d47] mt-4" />
            <p className="mt-4 text-base text-[#e6dcce]/80 max-w-xl font-light">
              Thousands of families, food connoisseurs, and overseas travelers cherish the warmth and royal flavors of ZAQA.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-2.5 rounded-lg bg-[#142a20] hover:bg-[#1d3b2e] text-[#faf7f2] border border-[#c89d47]/40 hover:border-[#c89d47] text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <PlusCircle className="w-4 h-4 text-[#dfb15b]" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-[#0b1712] border border-[#1d3b2e] hover:border-[#c89d47]/40 transition-all duration-300 hover:shadow-xl hover:shadow-black/60 relative group"
            >
              <div className="absolute top-5 right-5 text-[#c89d47]/10 group-hover:text-[#c89d47]/20 transition-colors">
                <MessageSquareQuote className="w-8 h-8" />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#dfb15b]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-[#dfb15b]' : 'text-neutral-700'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-semibold text-[#faf7f2] ml-1.5 tabular-nums">
                    {review.rating}.0
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#e6dcce]/90 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-6 pt-4 border-t border-[#1d3b2e]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#142a20] border border-[#c89d47]/50 flex items-center justify-center font-bold text-xs text-[#dfb15b] shrink-0">
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-[#faf7f2] truncate">
                        {review.name}
                      </h4>
                      <span title="Verified Diner">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </span>
                    </div>
                    <p className="text-[11px] text-[#e6dcce]/60 truncate">
                      {review.location} · {review.date}
                    </p>
                  </div>
                </div>

                {/* Favorite Dish */}
                <div className="mt-3 pt-2 text-[11px] text-[#c89d47] flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3 text-[#dfb15b]" />
                  <span className="truncate">Favorite: {review.favoriteDish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#0b1712] border border-[#c89d47]/40 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <h3 className="font-serif text-2xl font-bold text-[#faf7f2]">
              Share Your Dining Experience
            </h3>
            <p className="text-xs text-[#e6dcce]/70 mt-1">
              Your feedback inspires our master chefs and helps fellow diners.
            </p>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <p className="font-serif text-xl text-[#faf7f2]">Shukriya! Thank You!</p>
                <p className="text-xs text-[#e6dcce]/80">
                  Your review has been successfully added to our guestbook.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 mt-6">
                <div>
                  <label className="block text-xs font-semibold text-[#e6dcce] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, name: e.target.value })
                    }
                    placeholder="e.g. Asad Siddiqui"
                    className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-sm text-[#faf7f2] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e6dcce] mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={newReview.location}
                    onChange={(e) =>
                      setNewReview({ ...newReview, location: e.target.value })
                    }
                    placeholder="e.g. Lahore / Dubai / London"
                    className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-sm text-[#faf7f2] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1">
                      Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          rating: parseInt(e.target.value)
                        })
                      }
                      className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3 py-2 text-sm text-[#faf7f2] focus:outline-none"
                    >
                      <option value="5">5 Stars - Extraordinary</option>
                      <option value="4">4 Stars - Very Good</option>
                      <option value="3">3 Stars - Good</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1">
                      Dish Enjoyed
                    </label>
                    <input
                      type="text"
                      value={newReview.favoriteDish}
                      onChange={(e) =>
                        setNewReview({
                          ...newReview,
                          favoriteDish: e.target.value
                        })
                      }
                      className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3 py-2 text-sm text-[#faf7f2] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#e6dcce] mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReview.comment}
                    onChange={(e) =>
                      setNewReview({ ...newReview, comment: e.target.value })
                    }
                    placeholder="Describe the flavors, tenderness, aroma, or service..."
                    className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-sm text-[#faf7f2] focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-[#e6dcce] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-xs rounded-md shadow-md"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
