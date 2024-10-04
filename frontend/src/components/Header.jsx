import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:flex'} items-center space-y-4 md:space-y-0 md:space-x-4`}>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            {/* <Link to="/products" className="hover:text-green-200 transition-colors">Products</Link>
            <Link to="/about" className="hover:text-green-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-green-200 transition-colors">Contact</Link> */}
          </nav>
          {/* <Link to="/cart" className="inline-flex items-center space-x-2 text-white hover:text-green-200 transition-colors">
            <ShoppingCart size={24} />
            <span className="sr-only md:not-sr-only">Cart</span>
          </Link> */}
        </div>
      </div>
    </header>
  );
}