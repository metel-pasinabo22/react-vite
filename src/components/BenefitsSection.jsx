import React from "react";

function BenefitsSection() {
  const benefits = [
    {
      src: "https://via.placeholder.com/100",
      title: "Premium Quality",
      description: "We use the finest ingredients to create products that are both effective and luxurious.",
    },
    {
      src: "https://via.placeholder.com/100",
      title: "Cruelty-Free",
      description: "All of our products are 100% cruelty-free and ethically sourced.",
    },
    {
      src: "https://via.placeholder.com/100",
      title: "Eco-Friendly",
      description: "We are committed to sustainable packaging and practices.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-purple-200 via-pink-100 to-purple-200 py-12 px-6 h-screen">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">Why Choose GlowUp?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <img src={benefit.src} alt={benefit.title} className="mx-auto mb-4" />
              <h4 className="font-bold text-lg">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
