import React from "react";

const TrendingNow = () => (
  <section className="py-12 px-6 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 h-screen">
    <h3 className="text-2xl font-bold text-center mb-6 text-white">Trending Now</h3>
    <div className="flex overflow-x-auto space-x-4">
      {/* Product 1 */}
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[200px]">
        <img
          src="image/Glow-Mask.jpg"
          alt="Gold Infused Glow Mask"
          className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <h4 className="text-xl font-semibold mb-2">Gold Infused Glow Mask</h4>
        <p className="text-lg text-gray-600">₱39.99</p>
      </div>

      {/* Product 2 */}
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[200px]">
        <img
          src="image/Ultra-Matte-Lipstick.jpg"
          alt="Ultra Matte Lipstick"
          className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <h4 className="text-xl font-semibold mb-2">Ultra Matte Lipstick</h4>
        <p className="text-lg text-gray-600">₱19.99</p>
      </div>

      {/* Product 3 */}
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[200px]">
        <img
          src="image/Primer.jpg"
          alt="Glow Enhancing Primer"
          className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <h4 className="text-xl font-semibold mb-2">Glow Enhancing Primer</h4>
        <p className="text-lg text-gray-600">₱25.99</p>
      </div>

      {/* Product 4 */}
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[200px]">
        <img
          src="image/Eyeshadow.jpg"
          alt="Velvet Touch Eyeshadow"
          className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <h4 className="text-xl font-semibold mb-2">Velvet Touch Eyeshadow</h4>
        <p className="text-lg text-gray-600">₱29.99</p>
      </div>

      {/* Product 5 */}
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-[200px]">
        <img
          src="image/Hydrating-Mist.jpg"
          alt="Hydrating Face Mist"
          className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
        />
        <h4 className="text-xl font-semibold mb-2">Hydrating Face Mist</h4>
        <p className="text-lg text-gray-600">₱18.99</p>
      </div>
    </div>
  </section>
);

export default TrendingNow;
