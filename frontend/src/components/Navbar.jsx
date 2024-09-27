import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        height: 'auto',
        background: 'url(https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940), #D9D9D9',
        border: '1px solid #000000',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/products" className="nav-button">Products</Link>
        <Link to="/cart" className="nav-button">Cart</Link>
        <Link to="/register" className="nav-button">Register</Link>
        <Link to="/login" className="nav-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;