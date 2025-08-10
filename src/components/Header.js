import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartCount, setCurrentPage }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-800 shadow-xl z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-3xl font-extrabold text-blue-600">ShopSphere</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-lg font-medium text-gray-700 transition duration-300 ease-in-out hover:text-blue-600"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('cart')}
            className="relative p-2 rounded-full bg-transparent border-none cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200"
            aria-label="View Cart"
          >
            <ShoppingCart className="h-6 w-6 text-gray-800" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/4 -translate-y-1/4">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
