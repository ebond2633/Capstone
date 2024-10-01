import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut, Leaf } from 'lucide-react';


const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full bg-cover bg-center py-6 px-4 md:px-8 lg:px-16" style={{
      backgroundImage: "url('https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')",
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    }}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-white hover:text-green-200 transition-colors duration-300">
          <Leaf size={32} />
            Verdant Elegance
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-green-200 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          <div className={`md:flex items-center space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-green-800 py-4' : 'hidden'}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            {/* <Link to="/about" className="nav-link">About</Link> */}
            <Link to="/contact" className="nav-link">Contact</Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="nav-link flex items-center">
                  <User size={20} className="mr-2" />
                  Profile
                </Link>
                <button onClick={handleLogout} className="nav-link flex items-center">
                  <LogOut size={20} className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/login" className="nav-link">Login</Link>
              </>
            )}
           
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;