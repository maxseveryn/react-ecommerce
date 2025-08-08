import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
