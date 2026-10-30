import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageSquare, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CartItem, OrderType } from '../types/cart';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlacedReceipt, setOrderPlacedReceipt] = useState<{
    orderId: string;
    total: number;
  } | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );
  const deliveryFee = orderType === 'delivery' ? (subtotal > 4000 ? 0 : 250) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let orderList = items
      .map(
        (it) =>
          `• ${it.quantity}x ${it.dish.name} (Spice: ${
            it.selectedSpiceLevel === 1
              ? 'Mild'
              : it.selectedSpiceLevel === 2
              ? 'Medium'
              : 'Desi Spicy'
          }) - Rs. ${(it.dish.price * it.quantity).toLocaleString()}`
      )
      .join('\n');

    const message = `*ZAQA Restaurant Order Request*
--------------------------------
${orderList}

*Subtotal:* Rs. ${subtotal.toLocaleString()}
*Delivery Fee:* Rs. ${deliveryFee === 0 ? 'FREE' : deliveryFee}
*Grand Total:* Rs. ${grandTotal.toLocaleString()}
--------------------------------
*Order Type:* ${orderType.toUpperCase()}
*Customer Name:* ${customerName || 'Guest'}
*Phone:* ${phone || 'Not specified'}
${orderType === 'delivery' ? `*Delivery Address:* ${address || 'Lahore'}` : ''}

Please confirm preparation time and deliver hot!`;

    window.open(
      `https://wa.me/923008472922?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handleDirectCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert('Please fill in your name and phone number to complete order.');
      return;
    }
    const orderId = `ZQ-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderPlacedReceipt({ orderId, total: grandTotal });
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b1712] border-l border-[#c89d47]/30 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#1d3b2e] flex items-center justify-between bg-[#0e241a]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#142a20] text-[#dfb15b] border border-[#c89d47]/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#faf7f2]">
                  Your ZAQA Feast
                </h3>
                <p className="text-xs text-[#e6dcce]/70">
                  {items.length} {items.length === 1 ? 'item' : 'items'} in order
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#e6dcce] hover:text-white hover:bg-[#142a20] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Receipt View if Order Placed */}
          {orderPlacedReceipt ? (
            <div className="p-8 flex-1 flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#faf7f2]">
                Order Confirmed!
              </h4>
              <p className="text-xs text-[#e6dcce]/80 max-w-xs">
                Your order #{orderPlacedReceipt.orderId} is being prepared fresh in our kitchen.
              </p>
              <div className="p-4 rounded-xl bg-[#142a20] border border-[#1d3b2e] w-full text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#e6dcce]/60">Total Bill</span>
                  <span className="font-bold text-[#dfb15b]">
                    Rs. {orderPlacedReceipt.total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#e6dcce]/60">Est. Time</span>
                  <span className="text-[#faf7f2]">30 - 40 mins</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setOrderPlacedReceipt(null);
                  onClose();
                }}
                className="w-full py-2.5 rounded-lg bg-[#c89d47] text-[#0b1712] font-semibold text-xs"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Scrollable Items List */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-[#1d3b2e]/60">
                {items.length === 0 ? (
                  <div className="py-20 text-center space-y-3">
                    <ShoppingBag className="w-12 h-12 text-[#1d3b2e] mx-auto" />
                    <p className="font-serif text-lg text-[#faf7f2]">Your basket is empty</p>
                    <p className="text-xs text-[#e6dcce]/60 max-w-xs mx-auto">
                      Explore our simmering Karahis, aromatic Dum Biryani, and fresh tandoor naans to build your feast.
                    </p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.dish.id} className="pt-4 first:pt-0 flex gap-3.5">
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-16 h-16 rounded-lg object-cover bg-[#142a20] shrink-0 border border-[#1d3b2e]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-serif font-bold text-[#faf7f2] truncate">
                            {item.dish.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.dish.id)}
                            className="text-[#e6dcce]/50 hover:text-rose-400 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-[#dfb15b] font-medium mt-0.5">
                          Rs. {item.dish.price.toLocaleString()} each
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity selector */}
                          <div className="flex items-center gap-2 bg-[#142a20] rounded-md px-2 py-1 border border-[#1d3b2e]">
                            <button
                              onClick={() => onUpdateQuantity(item.dish.id, -1)}
                              className="text-[#e6dcce] hover:text-white p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-[#faf7f2] tabular-nums px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.dish.id, 1)}
                              className="text-[#e6dcce] hover:text-white p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-semibold text-sm text-[#faf7f2] tabular-nums">
                            Rs. {(item.dish.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Order Settings & Checkout */}
              {items.length > 0 && (
                <div className="p-5 border-t border-[#1d3b2e] bg-[#08120d] space-y-4">
                  {/* Order Type Tabs */}
                  <div className="grid grid-cols-3 gap-1 bg-[#142a20] p-1 rounded-lg border border-[#1d3b2e]">
                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`py-1.5 text-xs font-medium rounded-md transition-all ${
                        orderType === 'delivery'
                          ? 'bg-[#c89d47] text-[#0b1712] font-semibold shadow-sm'
                          : 'text-[#e6dcce] hover:text-white'
                      }`}
                    >
                      Delivery
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('pickup')}
                      className={`py-1.5 text-xs font-medium rounded-md transition-all ${
                        orderType === 'pickup'
                          ? 'bg-[#c89d47] text-[#0b1712] font-semibold shadow-sm'
                          : 'text-[#e6dcce] hover:text-white'
                      }`}
                    >
                      Takeaway
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('dine_in')}
                      className={`py-1.5 text-xs font-medium rounded-md transition-all ${
                        orderType === 'dine_in'
                          ? 'bg-[#c89d47] text-[#0b1712] font-semibold shadow-sm'
                          : 'text-[#e6dcce] hover:text-white'
                      }`}
                    >
                      Dine-in
                    </button>
                  </div>

                  {/* Customer Quick Inputs */}
                  <div className="space-y-2 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="bg-[#142a20] border border-[#1d3b2e] rounded-md px-2.5 py-1.5 text-xs text-[#faf7f2] focus:border-[#c89d47] focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Phone / WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#142a20] border border-[#1d3b2e] rounded-md px-2.5 py-1.5 text-xs text-[#faf7f2] focus:border-[#c89d47] focus:outline-none"
                      />
                    </div>
                    {orderType === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Delivery Address (Lahore & Suburbs)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full bg-[#142a20] border border-[#1d3b2e] rounded-md px-2.5 py-1.5 text-xs text-[#faf7f2] focus:border-[#c89d47] focus:outline-none"
                      />
                    )}
                  </div>

                  {/* Totals */}
                  <div className="space-y-1.5 text-xs pt-2 border-t border-[#1d3b2e]">
                    <div className="flex justify-between text-[#e6dcce]/80">
                      <span>Subtotal</span>
                      <span className="tabular-nums">Rs. {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[#e6dcce]/80">
                      <span>
                        Delivery Fee{' '}
                        {subtotal > 4000 && (
                          <span className="text-emerald-400 text-[10px]">(Free above Rs. 4,000)</span>
                        )}
                      </span>
                      <span className="tabular-nums">
                        {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-bold text-[#faf7f2] pt-1 border-t border-[#1d3b2e]">
                      <span>Grand Total</span>
                      <span className="text-[#dfb15b] font-sans tabular-nums text-base">
                        Rs. {grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Checkout Buttons */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppCheckout}
                      className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Order via WhatsApp (Instant Dispatch)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectCheckout}
                      className="w-full py-2.5 bg-[#c89d47] hover:bg-[#dfb15b] text-[#0b1712] font-semibold text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Direct Confirm Order</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
