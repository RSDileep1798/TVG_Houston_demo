import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartItemCount } = useCart();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    'nav-link' + (isActive ? ' nav-link-active' : '');

  const cartItemCount = getCartItemCount();

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-mark"></div>
          <div className="logo-text">
            <strong>TVG</strong>
            <span>Houston</span>
          </div>
        </Link>

        <div className="nav-right">
          {/* Desktop & mobile menu */}
          <div className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About TVG Houston
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/products"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/industries"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Industries
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>

          <Link 
            to="/cart" 
            className="btn btn-cart" 
            onClick={closeMenu}
            style={{
              position: 'relative',
              marginRight: '0.7rem',
              textDecoration: 'none',
            }}
          >
            Cart
            {cartItemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
              >
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link to="/signin" className="btn btn-sign" onClick={closeMenu}>
            Sign
          </Link>

          {/* Mobile toggle button */}
          <button
            type="button"
            className="nav-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <header>
//       <nav className="nav">
//         <Link to="/" className="logo">
//           <div className="logo-mark"></div>
//           <div className="logo-text">
//             <strong>TVG</strong>
//             <span>Houston</span>
//           </div>
//         </Link>

//         <div className="nav-right">
//           <div className="nav-links">
//             <NavLink to="/about" className="nav-link">
//               About TVG Houston
//             </NavLink>
//             <NavLink to="/services" className="nav-link">
//               Services
//             </NavLink>
//             <NavLink to="/industries" className="nav-link">
//               Industries
//             </NavLink>
//             <NavLink to="/contact" className="nav-link">
//               Contact
//             </NavLink>
//           </div>

//           <Link to="/signin" className="btn btn-sign">
//             Sign
//           </Link>

//           <div className="nav-menu-toggle">☰</div>
//         </div>
//       </nav>
//     </header>
//   );
// }