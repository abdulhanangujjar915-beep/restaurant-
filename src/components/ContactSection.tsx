import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [inquiry, setInquiry] = useState({
    name: '',
    emailOrPhone: '',
    subject: 'General Inquiry / Catering',
    message: ''
  });
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.message) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiry({
        name: '',
        emailOrPhone: '',
        subject: 'General Inquiry / Catering',
        message: ''
      });
    }, 3000);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Salam ZAQA! I would like to place an order for delivery/takeaway from your menu. Please share the daily specials.`
    );
    window.open(`https://wa.me/923008472922?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#08120d] relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#142a20]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#dfb15b] uppercase tracking-[0.2em] mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#faf7f2] tracking-tight">
            Find Us in Lahore
          </h2>
          <div className="w-16 h-0.5 bg-[#c89d47] mx-auto mt-4" />
          <p className="mt-4 text-base sm:text-lg text-[#e6dcce]/80 font-light">
            Conveniently situated in the culinary heart of Gulberg on MM Alam Road.
          </p>

          {/* Sample Contact Info Disclosure */}
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#142a20]/80 border border-[#1d3b2e] text-[11px] text-[#dfb15b]">
            <AlertCircle className="w-3 h-3" />
            <span>Clearly labeled sample contact information for demo & verification</span>
          </div>
        </div>

        {/* 2-Column Split: Info Cards & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Hours */}
          <div className="lg:col-span-6 space-y-6">
            {/* WhatsApp Ordering Banner Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-[#0e241a] border border-emerald-500/40 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Instant WhatsApp Ordering</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#faf7f2]">
                    Order Directly to Your Door
                  </h3>
                  <p className="text-xs text-[#e6dcce]/80 mt-1 max-w-sm">
                    Prefer ordering via WhatsApp? Chat directly with our order desk for hot karahis, fresh tandoor naans & catering.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>WhatsApp Order</span>
                </button>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-5 rounded-xl bg-[#0b1712] border border-[#1d3b2e]">
                <div className="w-9 h-9 rounded-lg bg-[#142a20] border border-[#c89d47]/40 flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4 text-[#dfb15b]" />
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#e6dcce]/60 font-medium">
                  Direct Telephone
                </h4>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-sm font-semibold text-[#faf7f2] hover:text-[#dfb15b] transition-colors block mt-1"
                >
                  {RESTAURANT_INFO.phone}
                </a>
                <p className="text-xs text-[#e6dcce]/60 mt-1">
                  Reservations & front desk
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-xl bg-[#0b1712] border border-[#1d3b2e]">
                <div className="w-9 h-9 rounded-lg bg-[#142a20] border border-[#c89d47]/40 flex items-center justify-center mb-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <h4 className="text-xs uppercase tracking-wider text-[#e6dcce]/60 font-medium">
                  WhatsApp Helpline
                </h4>
                <a
                  href={`https://wa.me/923008472922`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-[#faf7f2] hover:text-emerald-400 transition-colors block mt-1"
                >
                  {RESTAURANT_INFO.whatsapp}
                </a>
                <p className="text-xs text-[#e6dcce]/60 mt-1">
                  Live chat & takeaways
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-xl bg-[#0b1712] border border-[#1d3b2e]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#142a20] border border-[#c89d47]/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#e6dcce]/60 font-medium">
                    Restaurant Address
                  </h4>
                  <p className="text-sm font-semibold text-[#faf7f2] mt-1">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-xs text-[#dfb15b] mt-1">
                    {RESTAURANT_INFO.landmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-6 rounded-xl bg-[#0b1712] border border-[#1d3b2e]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[#142a20] border border-[#c89d47]/40 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#dfb15b]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#e6dcce]/60 font-medium">
                    Opening Hours
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium">
                    Kitchen Open 7 Days a Week
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                {RESTAURANT_INFO.openingHours.map((slot, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-1.5 border-b border-[#1d3b2e]/60 last:border-0"
                  >
                    <span className="text-[#e6dcce]/80">{slot.days}</span>
                    <span className="font-medium text-[#dfb15b] tabular-nums">
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview & Message Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Visual Map Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#c89d47]/40 h-56 bg-[#142a20] flex items-center justify-center">
              {/* Stylized dark map visual background */}
              <div className="absolute inset-0 bg-[#0f1f18] opacity-90">
                <div className="absolute inset-0 bg-[radial-gradient(#c89d47_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                {/* Visual road grid overlay */}
                <div className="absolute top-1/2 left-0 right-0 h-3 bg-[#1d3b2e] -translate-y-1/2" />
                <div className="absolute left-1/3 top-0 bottom-0 w-3 bg-[#1d3b2e]" />
                <div className="absolute right-1/4 top-0 bottom-0 w-2 bg-[#1d3b2e]/60" />
              </div>

              <div className="relative z-10 text-center p-6 bg-[#0b1712]/90 backdrop-blur-md rounded-xl border border-[#c89d47]/30 max-w-sm">
                <div className="w-10 h-10 rounded-full bg-[#c89d47] text-[#0b1712] flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#faf7f2]">
                  ZAQA – MM Alam Road
                </h4>
                <p className="text-xs text-[#e6dcce]/70 mt-0.5">
                  Gulberg III, Lahore, Pakistan
                </p>
                <a
                  href="https://maps.google.com/?q=MM+Alam+Road+Gulberg+III+Lahore"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#142a20] hover:bg-[#1d3b2e] text-[#dfb15b] border border-[#c89d47]/40 text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b1712] border border-[#1d3b2e]">
              <h3 className="font-serif text-xl font-bold text-[#faf7f2] mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#e6dcce]/70 mb-5">
                For private banquets, wedding catering, corporate accounts or suggestions.
              </p>

              {inquirySent ? (
                <div className="p-6 rounded-xl bg-[#142a20] border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-serif font-bold text-[#faf7f2]">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-[#e6dcce]/80">
                    Thank you. A guest relations manager from ZAQA will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#e6dcce]/90 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiry.name}
                        onChange={(e) =>
                          setInquiry({ ...inquiry, name: e.target.value })
                        }
                        placeholder="e.g. Tariq Javed"
                        className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#faf7f2] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#e6dcce]/90 mb-1">
                        Phone or Email *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiry.emailOrPhone}
                        onChange={(e) =>
                          setInquiry({ ...inquiry, emailOrPhone: e.target.value })
                        }
                        placeholder="Phone or email"
                        className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#faf7f2] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#e6dcce]/90 mb-1">
                      Subject
                    </label>
                    <select
                      value={inquiry.subject}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, subject: e.target.value })
                      }
                      className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#faf7f2] focus:outline-none cursor-pointer"
                    >
                      <option value="General Inquiry">General Dining Inquiry</option>
                      <option value="Banquet & Family Hall">Banquet / Large Hall Booking</option>
                      <option value="Outdoor Event Catering">Outdoor / Wedding Catering</option>
                      <option value="Chef Feedback">Compliments & Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-[#e6dcce]/90 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={inquiry.message}
                      onChange={(e) =>
                        setInquiry({ ...inquiry, message: e.target.value })
                      }
                      placeholder="Share details of your inquiry, date or guest count..."
                      className="w-full bg-[#142a20] border border-[#1d3b2e] focus:border-[#c89d47] rounded-lg px-3.5 py-2 text-xs sm:text-sm text-[#faf7f2] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to ZAQA</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
