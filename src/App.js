import React from "react";
import {
  BrowserRouter as Router,
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

function Layout() {
  const location = useLocation();
  const hideNavFooterPaths = ["/auth"];

  const hideNavFooter = hideNavFooterPaths.includes(location.pathname);

  return (
    <>
      {!hideNavFooter && <NavBar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/auth" element={<Authentication authBlock={"login"} />} />
      </Routes>
      {!hideNavFooter && <Footer />}
      <ScrollTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
