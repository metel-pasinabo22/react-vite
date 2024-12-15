import React from "react";

const HeroSection = () => (
  <section className="relative bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 text-white py-16 px-6 h-screen">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Unleash Your Inner Glow</h2>
        <p className="text-lg mb-6">
          Discover the perfect blend of skincare and makeup for radiant beauty. Shop our premium cosmetic collections.
        </p>
        <button className="px-8 py-3 bg-white text-pink-600 font-bold rounded hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2">
        <img
          src="image/bg.jpg"
          alt="Cosmetics Display"
          className="rounded shadow-lg"
          style={{ width: "600px", height: "400px", objectFit: "cover" }}
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
