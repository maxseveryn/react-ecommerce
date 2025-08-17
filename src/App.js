import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import Authentication from "./pages/Authentication/Authentication.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Favourite from "./pages/Favourite/Favourite.jsx";

import { CartProvider } from "./context/CartProvider.js";
import { ProductsProvider } from "./context/ProductsProvider.js";
import { ThemeProvider } from "./context/ThemeProvider.js";

function Layout() {
  const location = useLocation();

  const hideNavFooterPaths = ["/auth/login", "/auth/register"];
  const hideNavFooter = hideNavFooterPaths.includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route
          path="/auth/login"
          element={<Authentication authBlock="login" />}
        />
        <Route
          path="/auth/register"
          element={<Authentication authBlock="register" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideNavFooter && <Footer />}
      <ScrollTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider>
            <Layout />
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default App;
