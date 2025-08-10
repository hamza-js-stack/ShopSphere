import React from 'react';

const CartPage = ({ cart, bankDetails, setBankDetails, increaseQuantity, decreaseQuantity, handlePayOrder }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const isPaymentEnabled = bankDetails.bankName && bankDetails.accountHolderName && bankDetails.accountNumber;

  return (
    <div className="pt-24 pb-12 bg-gray-100 text-gray-900 min-h-screen">
      <main className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-600">Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex flex-col gap-6">
              {cart.map(item => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-1/2">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-4 w-full md:w-1/2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 text-gray-900 p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span className="text-lg font-bold w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 text-gray-900 p-2 rounded-full transition-colors duration-300 ease-in-out hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-2xl font-extrabold text-blue-600 w-24 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-right text-3xl font-extrabold text-gray-900 mb-4">Total: <span className="text-blue-600">${totalAmount.toFixed(2)}</span></div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Enter Bank Details</h3>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Bank Name"
                  value={bankDetails.bankName}
                  onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Account Holder Name"
                  value={bankDetails.accountHolderName}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountHolderName: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Account Number"
                  value={bankDetails.accountNumber}
                  onChange={(e) => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500"
                />
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={handlePayOrder}
                  className={`font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-md ${isPaymentEnabled ? 'bg-emerald-500 text-white hover:bg-emerald-400 hover:scale-105' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                  disabled={!isPaymentEnabled}
                >
                  Pay Order
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
