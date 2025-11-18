import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { initScrollAnimations, addScrollAnimationStyles } from './utils/scrollAnimations';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products'; 
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Cart from './pages/Cart';
import CustomerPortal from './pages/CustomerPortal';

function AppContent() {
  const location = useLocation();
  const isPortalPage = location.pathname === '/customer-portal' || location.pathname === '/portal';

  useEffect(() => {
    // Initialize scroll animations
    addScrollAnimationStyles();
    
    // Re-initialize on route changes
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // Customer Portal has its own layout (no navbar/footer)
  if (isPortalPage) {
    return (
      <Routes>
        <Route path="/customer-portal" element={<CustomerPortal />} />
        <Route path="/portal" element={<CustomerPortal />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}
