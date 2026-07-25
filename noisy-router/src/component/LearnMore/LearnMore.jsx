import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const FALLBACK_PRODUCT = {
  id: "noisy-pro-x",
  title: "Noisy Pro X",
  subtitle: "Premium Wireless Headphones",
  price: "₹7,999",
  image: null,
  badge: "FLAGSHIP",
  features: ["Active Noise Cancellation", "40 Hours Battery", "Hi-Res Audio", "Bluetooth 5.4"],
};


const DEFAULT_SPECS = {
  manufacturer: "XYZ Audio Pvt. Ltd.",
  type: "Wireless",
  connectivity: "Bluetooth 5.4",
  batteryLife: "40 Hours (ANC on)",
  chargeTime: "1.5 Hours (Fast Charge: 10 min = 5 hrs)",
  driverSize: "40mm Dynamic Drivers",
  weight: "254 g",
  colors: ["Matte Black", "Storm Grey", "Ivory White"],
  warranty: "1 Year Manufacturer Warranty",
  inBox: ["Headphones", "USB-C Charging Cable", "Carry Case", "User Manual"],
};

const POLICIES = [
  {
    id: "return",
    title: "Return Policy",
    summary: "7-day easy returns from the date of delivery.",
    details:
      "If you're not satisfied with your purchase, you can request a return within 7 days of delivery. The product must be unused, in its original packaging, with all accessories and the invoice included. Once picked up, refunds are processed within 5–7 business days to your original payment method.",
  },
  {
    id: "warranty",
    title: "Warranty Policy",
    summary: "1 year manufacturer warranty against defects.",
    details:
      "This product is covered against manufacturing defects for 1 year from the date of purchase. The warranty covers hardware faults under normal use and does not cover physical damage, liquid damage, or unauthorized repairs. Keep your invoice handy — it's required for any warranty claim.",
  },
  {
    id: "shipping",
    title: "Shipping Policy",
    summary: "Free delivery in 3–5 business days.",
    details:
      "Orders are dispatched within 24 hours of confirmation and typically arrive within 3–5 business days, depending on your location. Delivery is free on all prepaid orders above ₹999. You'll receive tracking details by SMS and email as soon as your order ships.",
  },
  {
    id: "support",
    title: "Support & Service",
    summary: "Dedicated support, 7 days a week.",
    details:
      "Our support team is available every day from 9 AM to 9 PM for setup help, troubleshooting, or service requests. Authorized service centers are available in major cities for in-warranty repairs and paid out-of-warranty service.",
  },
];

function PolicyAccordionItem({ policy, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 rounded-2xl bg-[#111] overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left px-6 py-5"
      >
        <div>
          <p className="font-bold">{policy.title}</p>
          <p className="text-sm text-gray-400 mt-1">{policy.summary}</p>
        </div>
        <span
          className={`text-[rgb(217,83,0)] text-2xl leading-none duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-gray-400 text-sm leading-7">{policy.details}</p>
        </div>
      </div>
    </div>
  );
}

export default function LearnMore() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product || FALLBACK_PRODUCT;
  const specs = { ...DEFAULT_SPECS, ...(product.specs || {}) };
  const [openPolicy, setOpenPolicy] = useState("return");

  const specRows = [
    ["Manufacturer", specs.manufacturer],
    ["Type", specs.type],
    ["Connectivity", specs.connectivity],
    ["Battery Backup", specs.batteryLife],
    ["Charge Time", specs.chargeTime],
    ["Driver Size", specs.driverSize],
    ["Weight", specs.weight],
    ["Warranty", specs.warranty],
  ];

  return (
    <section className="min-h-screen bg-black text-white px-4 md:px-10 py-16">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white duration-200 mb-8 inline-flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative bg-gradient-to-br from-[#111] via-black to-[#151515] rounded-[35px] p-10 flex items-center justify-center min-h-[320px]">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="h-[220px] md:h-[300px] object-contain"
              />
            ) : (
              <span className="text-gray-600 text-sm">No image available</span>
            )}
          </div>

          <div>
            <p className="text-[rgb(217,83,0)] tracking-[5px] font-semibold text-sm">
              {product.badge}
            </p>
            <h1 className="text-4xl md:text-5xl font-black mt-3">{product.title}</h1>
            <p className="text-xl text-gray-300 mt-3">{product.subtitle}</p>
            <h2 className="text-3xl font-bold text-[rgb(217,83,0)] mt-6">{product.price}</h2>

            {product.features?.length > 0 && (
              <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                {product.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/buy", { state: { product } })}
                className="px-8 py-3 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300 font-semibold"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Specifications</h2>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {specRows.map(([label, value], i) => (
              <div
                key={label}
                className={`flex justify-between md:justify-start px-6 py-4 text-sm ${
                  i % 2 === 0 ? "bg-[#111]" : "bg-black"
                }`}
              >
                <span className="text-gray-400 md:w-52 shrink-0">{label}</span>
                <span className="font-medium md:font-semibold">{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <p className="text-gray-400 text-sm mb-3">Available colors</p>
              <div className="flex flex-wrap gap-2">
                {specs.colors.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 rounded-full border border-white/10 text-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#111] p-6">
              <p className="text-gray-400 text-sm mb-3">In the box</p>
              <ul className="text-sm space-y-1">
                {specs.inBox.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Policies</h2>
          <div className="space-y-4">
            {POLICIES.map((policy) => (
              <PolicyAccordionItem
                key={policy.id}
                policy={policy}
                isOpen={openPolicy === policy.id}
                onToggle={() =>
                  setOpenPolicy((prev) => (prev === policy.id ? null : policy.id))
                }
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center rounded-[35px] bg-gradient-to-r from-[#111] via-black to-[#151515] py-14 px-6">
          <h2 className="text-3xl font-bold">
            Ready to own the <span className="text-[rgb(217,83,0)]">{product.title}</span>?
          </h2>
          <button
            onClick={() => navigate("/buy", { state: { product } })}
            className="mt-8 px-10 py-4 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300 font-semibold"
          >
            Buy Now — {product.price}
          </button>
        </div>
      </div>
    </section>
  );
}
