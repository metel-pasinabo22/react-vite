import React from "react";

const LimitedEditionCollection = () => (
  <section className="py-12 px-6 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 h-screen">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6 text-white">Limited Edition Collection</h3>
      <div className="flex  space-x-4">
        <div className="bg-white p-6 rounded-lg shadow-lg min-w-[250px]">
          <img
            src="image/Blush-on.jpg"
            alt="Rare Beauty Blush on"
            className="w-52 h-52 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Rare Beauty Blush-On</h4>
          <p className="text-lg text-gray-600">₱49.99</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg min-w-[250px]">
          <img
            src="image/foundation-liquid.jpg"
            alt="Velvet Finish Foundation"
            className="w-52 h-52 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Velvet Foundation</h4>
          <p className="text-lg text-gray-600">₱59.99</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg min-w-[250px]">
          <img
            src="image/Highlighter.jpg"
            alt="Luxe Gold Highlighter"
            className="w-52 h-52 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Luxe Gold Highlighter</h4>
          <p className="text-lg text-gray-600">₱39.99</p>
        </div>
      </div>
    </div>
  </section>
);

export default LimitedEditionCollection;
