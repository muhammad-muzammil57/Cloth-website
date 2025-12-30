import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import PremiumBanner from "./components/PremiumBanner";
import Products from "./components/Products"; // your products page
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <ProductGrid />
              <PremiumBanner />
              <FAQ/>
              <ContactUs/>
              <Footer/>
            </>
          }
        />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
