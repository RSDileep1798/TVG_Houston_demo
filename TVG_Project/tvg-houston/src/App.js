import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Products from './pages/Products'; 
import Industries from './Pages/Industries';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import Register from './Pages/Register';
import Cart from './Pages/Cart';

export default function App() {
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
