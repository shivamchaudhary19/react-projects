import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const FALLBACK_PRODUCT = {
  id: "noisy-pro-x",
  title: "Noisy Pro X",
  subtitle: "Premium Wireless Headphones",
  price: "₹7,999",
  image: null,
  badge: "FLAGSHIP",
};

const PAYMENT_METHODS = [
  { id: "upi", label: "UPI" },
  { id: "card", label: "Card" },
  { id: "phone", label: "Phone Number (Pay via Number)" },
  { id: "cod", label: "Cash on Delivery" },
];

function parsePrice(priceStr) {
  const digits = String(priceStr).replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

function formatINR(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export default function Buy() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product || FALLBACK_PRODUCT;
  const [quantity, setQuantity] = useState(1);
  const [method, setMethod] = useState("upi");
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    pincode: "",
    phone: "",
    upiId: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
    payPhone: "",
  });

  const unitPrice = parsePrice(product.price);
  const subtotal = unitPrice * quantity;
  const delivery = subtotal > 0 && subtotal < 999 ? 49 : 0;
  const total = subtotal + delivery;

  const updateField = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setPlacingOrder(true);
    // Simulated processing delay — no real payment gateway is called.
    setTimeout(() => {
      setPlacingOrder(false);
      setOrderPlaced(true);
    }, 1200);
  };

  if (orderPlaced) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-[rgb(217,83,0)] flex items-center justify-center text-3xl font-black mb-6">
            ✓
          </div>
          <h1 className="text-3xl font-bold">Order placed</h1>
          <p className="text-gray-400 mt-3 leading-7">
            Your {product.title} is on its way. This is a demo checkout, so no
            payment was actually taken and no order will ship — but that's
            what the confirmation would look like.
          </p>
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#111] p-6 text-left">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Order total</span>
              <span className="text-white font-semibold">{formatINR(total)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Payment method</span>
              <span className="text-white font-semibold">
                {PAYMENT_METHODS.find((m) => m.id === method)?.label}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/")}
            className="mt-8 px-8 py-3 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300"
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white duration-200 mb-8 inline-flex items-center gap-2"
        >
          ← Back
        </button>

        <h1 className="text-4xl md:text-5xl font-black">
          Checkout<span className="text-[rgb(217,83,0)]">.</span>
        </h1>
        <p className="text-gray-400 mt-3">
          Review your order and choose how you'd like to pay.
        </p>

        <form
          onSubmit={handlePlaceOrder}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {/* LEFT: Delivery + Payment */}
          <div className="lg:col-span-2 space-y-10">
            {/* Delivery details */}
            <div>
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[rgb(217,83,0)] text-sm flex items-center justify-center font-black">
                  1
                </span>
                Delivery details
              </h2>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Full name"
                  value={form.fullName}
                  onChange={updateField("fullName")}
                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200 md:col-span-2"
                />
                <input
                  required
                  type="text"
                  placeholder="Address"
                  value={form.address}
                  onChange={updateField("address")}
                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200 md:col-span-2"
                />
                <input
                  required
                  type="text"
                  placeholder="City"
                  value={form.city}
                  onChange={updateField("city")}
                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                />
                <input
                  required
                  type="text"
                  inputMode="numeric"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={updateField("pincode")}
                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                />
                <input
                  required
                  type="tel"
                  placeholder="Contact number"
                  value={form.phone}
                  onChange={updateField("phone")}
                  className="bg-[#111] border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200 md:col-span-2"
                />
              </div>
            </div>

            {/* Payment method */}
            <div>
              <h2 className="text-xl font-bold flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[rgb(217,83,0)] text-sm flex items-center justify-center font-black">
                  2
                </span>
                Payment method
              </h2>

              <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                {PAYMENT_METHODS.map((m) => (
                  <button
                    type="button"
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    className={`px-4 py-3 rounded-xl border text-sm font-semibold duration-200 ${
                      method === m.id
                        ? "bg-[rgb(217,83,0)] border-[rgb(217,83,0)]"
                        : "bg-[#111] border-white/10 hover:border-white/30"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Method-specific fields */}
              <div className="mt-6 bg-[#111] border border-white/10 rounded-2xl p-6">
                {method === "upi" && (
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">UPI ID</label>
                    <input
                      required
                      type="text"
                      placeholder="yourname@bank"
                      value={form.upiId}
                      onChange={updateField("upiId")}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                    />
                    <p className="text-xs text-gray-500">
                      You'll get a payment request on your UPI app to approve.
                    </p>
                  </div>
                )}

                {method === "card" && (
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">Card number</label>
                    <input
                      required
                      type="text"
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      value={form.cardNumber}
                      onChange={updateField("cardNumber")}
                      maxLength={19}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm text-gray-400">Expiry</label>
                        <input
                          required
                          type="text"
                          placeholder="MM/YY"
                          value={form.cardExpiry}
                          onChange={updateField("cardExpiry")}
                          className="w-full mt-1 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-400">CVV</label>
                        <input
                          required
                          type="password"
                          inputMode="numeric"
                          maxLength={3}
                          placeholder="•••"
                          value={form.cardCvv}
                          onChange={updateField("cardCvv")}
                          className="w-full mt-1 bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {method === "phone" && (
                  <div className="space-y-3">
                    <label className="text-sm text-gray-400">
                      Phone number linked to payment app
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.payPhone}
                      onChange={updateField("payPhone")}
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[rgb(217,83,0)] duration-200"
                    />
                    <p className="text-xs text-gray-500">
                      We'll send a payment collect request to this number.
                    </p>
                  </div>
                )}

                {method === "cod" && (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-300">
                      Pay in cash when your order is delivered.
                    </p>
                    <p className="text-xs text-gray-500">
                      A ₹49 handling fee applies to Cash on Delivery orders under ₹999.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-5">Order summary</h2>

              <div className="flex gap-4 items-center">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 object-contain bg-black rounded-xl p-2"
                  />
                ) : (
                  <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center text-xs text-gray-500">
                    No image
                  </div>
                )}
                <div>
                  <p className="text-[rgb(217,83,0)] text-xs tracking-widest font-semibold">
                    {product.badge}
                  </p>
                  <p className="font-bold">{product.title}</p>
                  <p className="text-gray-400 text-sm">{product.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-gray-400 text-sm">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 duration-200"
                  >
                    −
                  </button>
                  <span className="w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm border-t border-white/10 pt-5">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Delivery</span>
                  <span className="text-white">
                    {delivery === 0 ? "Free" : formatINR(delivery)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-3 border-t border-white/10 mt-3">
                  <span>Total</span>
                  <span className="text-[rgb(217,83,0)]">{formatINR(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={placingOrder}
                className="w-full mt-6 px-8 py-3 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300 font-semibold disabled:opacity-60 disabled:hover:scale-100"
              >
                {placingOrder ? "Placing order..." : `Place order · ${formatINR(total)}`}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                This is a demo checkout. No payment is actually processed.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
