import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/Home"; // Renamed Home to HeroSection
import BestSellers from "./components/BestSellers";
import TrendingNow from "./components/TrendingNow";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <Router>
      {/* Header component */}
      <Header />
      {/* Routing for all the pages */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/trending-now" element={<TrendingNow />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
