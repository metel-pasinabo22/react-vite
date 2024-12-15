import React from "react";

const BestSellers = () => (
  <section className="py-12 px-6 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 h-screen">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold  text-white text-center mb-6">Best Sellers</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Product 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="image/serumm.jpg"
            alt="Hydra Glow Serum"
            className="w-80 h-90 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Hydra Moist Glow Serum</h4>
          <p className="text-lg text-gray-600">₱29.99</p>
        </div>

        {/* Product 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="image/foundation.jpg"
            alt="Foundation"
            className="w-80 h-90 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Liquid Face Foundation</h4>
          <p className="text-lg text-gray-600">₱29.99</p>
        </div>

        {/* Product 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="image/powder-foundation.jpg"
            alt="Hydra Glow Serum"
            className="w-80 h-90 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Face Powder Foundation</h4>
          <p className="text-lg text-gray-600">₱29.99</p>
        </div>

        {/* Product 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="image/lipstick.jpg"
            alt="Velvet Matte Lipstick"
            className="w-80 h-90 object-cover rounded-lg mb-4"
          />
          <h4 className="text-xl font-semibold mb-2">Velvet Matte Lipstick</h4>
          <p className="text-lg text-gray-600">₱19.99</p>
        </div>
      </div>
    </div>
  </section>
);

export default BestSellers;
