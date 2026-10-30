import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Sparkles, CheckCircle2, Phone, User, MessageCircle, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReservationSection: React.FC = () => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: todayStr,
    time: '20:00',
    guests: '4',
    seatingArea: 'Courtyard (Fountain Side & Candlelight)',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    bookingId: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    seatingArea: string;
  } | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      newErrors.phone = 'Please enter a valid phone number (at least 9 digits).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please pick a preferred dining time.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `ZAQA-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmedBooking({
        bookingId: generatedId,
        name: formData.name,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        seatingArea: formData.seatingArea
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleWhatsAppShare = () => {
    if (!confirmedBooking) return;
    const msg = `Salam ZAQA! I have reserved a table.
*Booking ID:* ${confirmedBooking.bookingId}
*Name:* ${confirmedBooking.name}
*Guests:* ${confirmedBooking.guests} People
*Date:* ${confirmedBooking.date}
*Time:* ${confirmedBooking.time}
*Seating:* ${confirmedBooking.seatingArea}
Looking forward to our dining experience!`;

    window.open(
      `https://wa.me/923008472922?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section id="reservation" className="py-24 bg-[#0b1712] relative overflow-hidden">
      {/* Decorative background radial lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c89d47]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            Reserve Your Royal Experience
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light leading-relaxed">
            Whether an intimate family celebration or an evening feast with friends, reserve ahead for seamless hospitality.
          </p>
        </div>

        {/* 2-Column Layout: Perks & Reservation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Hospitality Perks */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0e241a]/90 border border-[#1d3b2e] shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#dfb15b]">
                Customized Desi Hospitality
              </h3>
              <p className="mt-2 text-sm text-[#e6dcce]/80 leading-relaxed">
                Enjoy priority table seating in our air-conditioned Mughal Hall or open sky courtyard with gentle sitar tunes.
              </p>

              <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#e6dcce]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#142a20] border border-[#c89d47]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#dfb15b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#faf7f2]">Complimentary Valet Parking</h4>
                    <p className="text-xs text-[#e6dcce]/60 mt-0.5">Direct entry on MM Alam Road with secure valet attendants.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#142a20] border border-[#c89d47]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#dfb15b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#faf7f2]">Private Family Enclosures</h4>
                    <p className="text-xs text-[#e6dcce]/60 mt-0.5">Partitioned seating available upon request for quiet gatherings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#142a20] border border-[#c89d47]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3 text-[#dfb15b]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#faf7f2]">Instant WhatsApp Confirmation</h4>
                    <p className="text-xs text-[#e6dcce]/60 mt-0.5">Our front desk desk representative verifies your table in minutes.</p>
                  </div>
                </div>
              </div>

              {/* Direct Call Assistance */}
              <div className="mt-8 pt-6 border-t border-[#1d3b2e] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#e6dcce]/60 block">Direct Concierge Desk</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-sm font-semibold text-[#dfb15b] hover:underline"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#e6dcce]/60 block">Operating Hours</span>
                  <span className="text-xs font-semibold text-[#faf7f2]">12:00 PM – 1:30 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#142a20] to-[#0e241a] border border-[#c89d47]/40 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Salman Akhtar"
                      className={`w-full bg-[#0b1712] border ${
                        errors.name ? 'border-rose-500' : 'border-[#1d3b2e]'
                      } focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Phone / WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +92 300 1234567"
                      className={`w-full bg-[#0b1712] border ${
                        errors.phone ? 'border-rose-500' : 'border-[#1d3b2e]'
                      } focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Reservation Date *</span>
                    </label>
                    <input
                      type="date"
                      min={todayStr}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="w-full bg-[#0b1712] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Dining Time *</span>
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full bg-[#0b1712] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="13:00">Lunch – 01:00 PM</option>
                      <option value="14:00">Lunch – 02:00 PM</option>
                      <option value="15:00">Lunch – 03:00 PM</option>
                      <option value="19:30">Dinner – 07:30 PM (Early)</option>
                      <option value="20:00">Dinner – 08:00 PM (Prime)</option>
                      <option value="21:00">Dinner – 09:00 PM (Prime)</option>
                      <option value="22:00">Dinner – 10:00 PM (Late Feast)</option>
                      <option value="23:30">Supper – 11:30 PM (Midnight)</option>
                    </select>
                  </div>
                </div>

                {/* Number of Guests & Seating Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Number of Guests *</span>
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-[#0b1712] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="2">2 Guests (Couple / Pair)</option>
                      <option value="4">4 Guests (Standard Table)</option>
                      <option value="6">6 Guests (Family Table)</option>
                      <option value="8">8 Guests (Large Family Table)</option>
                      <option value="10">10 Guests (Feast Table)</option>
                      <option value="15+">15+ Guests (Private Banquet Hall)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#dfb15b]" />
                      <span>Preferred Atmosphere</span>
                    </label>
                    <select
                      value={formData.seatingArea}
                      onChange={(e) =>
                        setFormData({ ...formData, seatingArea: e.target.value })
                      }
                      className="w-full bg-[#0b1712] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-4 py-2.5 text-sm text-[#faf7f2] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Courtyard (Fountain Side & Candlelight)">
                        Open Courtyard (Fountain & Candles)
                      </option>
                      <option value="Royal Mughal Hall (Indoor Luxury AC)">
                        Royal Mughal Hall (Indoor Luxury AC)
                      </option>
                      <option value="Rooftop Terrace (Open Sky Lahore View)">
                        Rooftop Terrace (Open Sky Lahore View)
                      </option>
                      <option value="Private Family Diwan Lounge">
                        Private Family Diwan Lounge
                      </option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-[#e6dcce] mb-1.5">
                    Special Occasion or Dietary Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({ ...formData, specialRequests: e.target.value })
                    }
                    placeholder="e.g. Birthday anniversary decor, baby high chair, less spicy Karahi..."
                    className="w-full bg-[#0b1712] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-4 py-2 text-xs sm:text-sm text-[#faf7f2] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#c89d47] hover:bg-[#dfb15b] disabled:opacity-50 text-[#0b1712] font-semibold text-sm rounded-lg transition-all shadow-lg shadow-[#c89d47]/20 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Reserving Table...</span>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Confirm Table Reservation</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-[#e6dcce]/60 mt-2">
                    No advance deposit required. We hold tables for 15 minutes past reservation time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#0b1712] border border-[#c89d47] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-center">
            <div className="w-14 h-14 rounded-full bg-[#142a20] border-2 border-[#c89d47] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#dfb15b]" />
            </div>

            <span className="text-xs font-semibold text-[#dfb15b] uppercase tracking-widest">
              Reservation Confirmed
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f2] mt-1">
              Table Reserved at ZAQA!
            </h3>
            <p className="text-xs text-[#e6dcce]/80 mt-1">
              We look forward to welcoming you and your guests.
            </p>

            {/* Booking Reference Box */}
            <div className="my-6 p-4 rounded-xl bg-[#142a20] border border-[#1d3b2e] text-left text-xs sm:text-sm space-y-2">
              <div className="flex justify-between border-b border-[#1d3b2e] pb-2">
                <span className="text-[#e6dcce]/60">Booking Reference</span>
                <span className="font-mono font-bold text-[#dfb15b]">
                  {confirmedBooking.bookingId}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e6dcce]/60">Guest Name</span>
                <span className="font-medium text-[#faf7f2]">{confirmedBooking.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e6dcce]/60">Party Size</span>
                <span className="font-medium text-[#faf7f2]">
                  {confirmedBooking.guests} People
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e6dcce]/60">Date & Time</span>
                <span className="font-medium text-[#dfb15b]">
                  {confirmedBooking.date} at {confirmedBooking.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e6dcce]/60">Seating Area</span>
                <span className="font-medium text-[#faf7f2] truncate max-w-[200px]">
                  {confirmedBooking.seatingArea}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="w-full sm:flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Save to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-[#142a20] hover:bg-[#1d3b2e] text-[#faf7f2] border border-[#1d3b2e] text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
