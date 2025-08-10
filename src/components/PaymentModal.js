import React from 'react';
import { CheckCircle } from 'lucide-react';

const PaymentModal = ({ paymentMessage, setPaymentMessage }) => {
  if (!paymentMessage) return null;
  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 transform scale-100 transition-all duration-300 ease-in-out">
        <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-700 mb-6">{paymentMessage}</p>
        <button
          onClick={() => setPaymentMessage(null)}
          className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
