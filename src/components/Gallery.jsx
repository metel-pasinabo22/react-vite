import React from "react";

const Gallery = () => (
  <section className="py-12 px-6 bg-gradient-to-r from-pink-400 via-violet-500 to-pink-400 h-screen">
    <h3 className="text-2xl text-white font-bold text-center mb-6 ">Gallery</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <img src="image/gallery.png" alt="Gallery Photo 1" className="rounded-lg shadow-md" />
      <img src="image/gallery2.png" alt="Gallery Photo 2" className="rounded-lg shadow-md" />
      <img src="image/gallery3.png" alt="Gallery Photo 3" className="rounded-lg shadow-md" />
    </div>
  </section>
);

export default Gallery;
