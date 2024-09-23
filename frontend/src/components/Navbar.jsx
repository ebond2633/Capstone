import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        boxSizing: 'border-box',
        position: 'relative', // Changed from 'absolute' for better layout control
        width: '100%', // Changed from fixed width for responsiveness
        height: '152px',
        background: 'url(https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940), #D9D9D9', // Replace .jpg with actual image paths
        border: '1px solid #000000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center', // Center the content vertically
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px', // Space between buttons
        }}
      >
        {/* <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-pink-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-pink-300 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-300 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </nav> */}
        <Link to="/" className="  nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/services" className="nav-button">Shop</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
        <Link to="/cart" className="nav-button">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;