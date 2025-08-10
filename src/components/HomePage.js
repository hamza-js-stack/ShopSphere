import React from 'react';
import ProductCard from './ProductCard';

const HomePage = ({ products, mainHeading, addToCart }) => {
  return (
    <div className="pt-24 pb-12 bg-gray-100 text-gray-900 min-h-screen">
      <main className="container mx-auto px-4">
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 transition-colors duration-500 ease-in-out animate-pulse">
            {mainHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => !p.isSale).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-500">Deluxe Boxes & Sales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.isSale).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
