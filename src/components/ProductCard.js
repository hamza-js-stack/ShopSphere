import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 cursor-pointer flex flex-col h-full">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
        />
        {product.isSale && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">SALE</span>
        )}
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-extrabold text-blue-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out shadow-md hover:bg-blue-500 hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
