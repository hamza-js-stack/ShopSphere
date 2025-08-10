import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ShopSphere</h3>
          <p className="text-sm">Your one-stop shop for the latest trends in watches, shirts, pants, and shoes. Quality and style, delivered to your door.</p>
        </div>
        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
          </ul>
        </div>
        {/* Contact Information Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-sm">Feel free to contact us with any questions or concerns.</p>
          <p className="text-sm mt-2">Our support team is available 24/7 to assist you.</p>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-gray-700 mt-8 pt-6">
        <p className="text-sm text-gray-400">&copy; 2023 ShopSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
