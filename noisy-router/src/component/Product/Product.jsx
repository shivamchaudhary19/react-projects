import React from "react";

import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
  {
    id: "noisy-pro-x",
    title: "Noisy Pro X",
    subtitle: "Premium Wireless Headphones",
    price: "₹7,999",
    image: product1,
    badge: "FLAGSHIP",
    features: ["Active Noise Cancellation", "40 Hours Battery", "Hi-Res Audio", "Bluetooth 5.4"],
    specs: {
      manufacturer: "XYZ Audio Pvt. Ltd.",
      type: "Wireless",
      connectivity: "Bluetooth 5.4",
      batteryLife: "40 Hours (ANC on)",
      chargeTime: "1.5 Hours (Fast Charge: 10 min = 5 hrs)",
      driverSize: "40mm Dynamic Drivers",
      weight: "254 g",
      colors: ["Matte Black", "Storm Grey"],
      warranty: "1 Year Manufacturer Warranty",
      inBox: ["Headphones", "USB-C Cable", "Carry Case", "User Manual"],
    },
  },
  {
    id: "noisy-air",
    title: "Noisy Air",
    subtitle: "Lightweight Everyday Comfort",
    price: "₹3,999",
    image: product2,
    badge: "BEST SELLER",
    features: ["Ultra Light Design", "Fast Charging", "ENC Calling", "Deep Bass"],
    specs: {
      manufacturer: "XYZ Audio Pvt. Ltd.",
      type: "Wireless",
      connectivity: "Bluetooth 5.3",
      batteryLife: "24 Hours",
      chargeTime: "1 Hour (Fast Charge: 5 min = 3 hrs)",
      driverSize: "32mm Dynamic Drivers",
      weight: "180 g",
      colors: ["White", "Sky Blue"],
      warranty: "1 Year Manufacturer Warranty",
      inBox: ["Headphones", "USB-C Cable", "User Manual"],
    },
  },
  {
    id: "noisy-studio",
    title: "Noisy Studio",
    subtitle: "Built for Creators",
    price: "₹10,999",
    image: product3,
    badge: "PRO SERIES",
    features: ["Studio Grade Audio", "Premium Build", "50mm Drivers", "Ultra Comfort"],
    specs: {
      manufacturer: "XYZ Audio Pvt. Ltd.",
      type: "Wired / Wireless (Dual Mode)",
      connectivity: "Bluetooth 5.4 + 3.5mm Jack",
      batteryLife: "50 Hours (Wireless Mode)",
      chargeTime: "2 Hours",
      driverSize: "50mm Studio Drivers",
      weight: "290 g",
      colors: ["Matte Black", "Studio Silver"],
      warranty: "2 Year Manufacturer Warranty",
      inBox: ["Headphones", "3.5mm Cable", "USB-C Cable", "Carry Pouch", "User Manual"],
    },
  },
  {
    id: "noisy-gaming",
    title: "Noisy Gaming",
    subtitle: "Game Without Limits",
    price: "₹5,999",
    image: product4,
    badge: "GAMING",
    features: ["Low Latency", "RGB Lighting", "7.1 Surround", "Crystal Clear Mic"],
    specs: {
      manufacturer: "XYZ Audio Pvt. Ltd.",
      type: "Wired",
      connectivity: "USB / 3.5mm Jack",
      batteryLife: "Not applicable (wired)",
      chargeTime: "Not applicable (wired)",
      driverSize: "50mm Bass Drivers",
      weight: "310 g",
      colors: ["Black/RGB"],
      warranty: "1 Year Manufacturer Warranty",
      inBox: ["Headphones", "Detachable Mic", "USB Adapter", "User Manual"],
    },
  },
];

function ProductCard({ product, reverse, onBuyNow, onLearnMore }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[35px] bg-gradient-to-r from-[#111] via-black to-[#151515] mb-16 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(217,83,0,.2)] duration-500 md:h-[450px]`}
    >
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-[80px] md:text-[180px] font-black tracking-widest">NOISY</h1>
      </div>

      <div
        className={`relative md:absolute md:inset-0 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1 flex items-center">
          <div className="p-8 md:p-14 z-10 max-w-xl">
            <p className="text-[rgb(217,83,0)] tracking-[5px] font-semibold">{product.badge}</p>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">{product.title}</h2>
            <p className="text-xl text-gray-300 mt-3">{product.subtitle}</p>

            <ul className="mt-8 space-y-3 text-gray-300">
              {product.features.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>

            <h3 className="text-4xl font-bold text-[rgb(217,83,0)] mt-8">{product.price}</h3>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => onBuyNow?.(product)}
                className="px-8 py-3 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300"
              >
                Buy Now
              </button>
              <button
                onClick={() => onLearnMore?.(product)}
                className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center pb-10 md:pb-0 md:items-end">
          <img
            src={product.image}
            alt={product.title}
            className="h-[280px] md:h-[90%] object-contain hover:scale-105 duration-500"
          />
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate("/buy", { state: { product } });
  };

  const handleLearnMore = (product) => {
    navigate("/learn-more", { state: { product } });
  };

  const handleExploreCollection = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-10">
      {/* ... header ... */}

      {PRODUCTS.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          reverse={index % 2 !== 0}
          onBuyNow={handleBuyNow}
          onLearnMore={handleLearnMore}
        />
      ))}

      <div className="text-center mt-24">
        <h2 className="text-4xl font-bold">
          Find Your Perfect <span className="text-[rgb(217,83,0)]">Sound</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8">
          Whether you're travelling, gaming, working or simply enjoying your favourite playlist,
          Noisy has a headphone designed for your lifestyle.
        </p>
        <button
          onClick={handleExploreCollection}
          className="mt-10 px-10 py-4 rounded-full bg-[rgb(217,83,0)] hover:scale-105 duration-300"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}