import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';

const App = () => {
  // Product data is now in App.js as it's a central source of truth for the application.
  const products = [
    { id: 1, name: "Luxury Watch", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOathEMhIHcqSCffEv9nBDHRZC8xCSUES2aEzjeLZbLVV71U_saQ01K_5ipY7Fjdqzas&usqp=CAU", isSale: false },
    { id: 2, name: "ROLEX WATCH", price: 55.34, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqIudnWZMKpYtcl6lgjSSQIeFMNMGl7lNVtVDFMH1xAndcqs_nWRN85G4hZ_wpTw0uXYY&usqp=CAU", isSale: false },
    { id: 3, name: "CITIZEN WATCH", price: 30.12, image: "https://img4.dhresource.com/webp/m/260x260/f3/albu/km/g/14/57d7dfa0-a3da-4925-a666-a3751ec82949.jpg", isSale: true },
    { id: 4, name: "Gucci (luxury)", price: 45.67, image: "https://img4.dhresource.com/webp/m/260x260/f3/albu/jc/h/03/7a13e337-3f1b-421a-b4e6-0ed22edd4fa2.jpg", isSale: false },
    { id: 5, name: "PUMA SHOES BRANDED", price: 75, image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D", isSale: true },
    { id: 6, name: "Louis Vuitton", price: 89.10, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww", isSale: false },
    { id: 7, name: "Reebok", price: 35, image: "https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww", isSale: false },
    { id: 8, name: "Cartier", price: 50, image: "https://media.istockphoto.com/id/500873190/photo/suave-modern-man-in-casual-style.jpg?s=612x612&w=0&k=20&c=VysQsQzOkZdhxD6T5IVQ-5WtZDkPU9lNv23xFLna-1A=", isSale: false },
    { id: 9, name: "Harry Winston", price: 129, image: "https://media.istockphoto.com/id/1193306166/photo/male-hand-with-jewelry.jpg?s=612x612&w=0&k=20&c=sqJ6L1ERYxZkbiGyDASreCUTEAnS-i_qjUvIMTAzb7M=", isSale: false },
  ];

  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [paymentMessage, setPaymentMessage] = useState(null);
  const [mainHeading, setMainHeading] = useState('Our Latest Collection');
  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountHolderName: '',
    accountNumber: ''
  });

  const headingTexts = [
    'Our Latest Collection',
    'FLAT DISCOUNT OF 50% ON OVER $200 SHOPPING'
  ];

  useEffect(() => {
    let currentHeadingIndex = 0;
    const interval = setInterval(() => {
      currentHeadingIndex = (currentHeadingIndex + 1) % headingTexts.length;
      setMainHeading(headingTexts[currentHeadingIndex]);
    }, 3000); 
    
    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCurrentPage('cart');
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0));
  };

  const handlePayOrder = () => {
    if (!bankDetails.bankName || !bankDetails.accountHolderName || !bankDetails.accountNumber) {
      setPaymentMessage("Please fill in all bank details to complete your order.");
      return;
    }
    setPaymentMessage('Your order has been placed successfully! Thank you for your purchase.');
    setCart([]);
    setBankDetails({ bankName: '', accountHolderName: '', accountNumber: '' });
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-100">
      <Header cartCount={cart.length} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <HomePage products={products} mainHeading={mainHeading} addToCart={addToCart} />
      ) : (
        <CartPage 
          cart={cart} 
          bankDetails={bankDetails}
          setBankDetails={setBankDetails}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          handlePayOrder={handlePayOrder}
        />
      )}
      <Footer />
      <PaymentModal paymentMessage={paymentMessage} setPaymentMessage={setPaymentMessage} />
    </div>
  );
};

export default App;
