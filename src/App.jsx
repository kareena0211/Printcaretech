import React from 'react';
import 'animate.css'; // Import animate.css
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Footer from './sections/Footer';
import About from './pages/About';
import Service from './pages/Service';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/Contact';
import PrivacyPolicy from './sections/PrivacyPolicy';

import RefundAndReturnPolicy from './sections/RefundAndReturnPolicy ';
import FAQs from './sections/Faqs';
import ProductPage from './pages/products/Products';
import TermsAndConditions from './sections/TermsAndConditions';
import Disclaimer from './sections/Disclaimer';
import Cart from './pages/Cart';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          {/* ------------ PRODUCTS ROUTER---------------- */}
          <Route path="/products" element={<ProductPage />} />

          {/* ----- FOOTER SECTION PAGES --------- */}
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          <Route path="/refund&return" element={<RefundAndReturnPolicy />} />
          <Route path="/t&c" element={<TermsAndConditions />} />

          <Route path="/faqs" element={<FAQs />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
