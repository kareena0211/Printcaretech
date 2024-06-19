import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="list-none">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-purple-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
            <ul className="list-none">
              <li>
                <Link
                  to="/disclaimer"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-gray-400 hover:text-purple-500"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund&return"
                  className="text-gray-400 hover:text-purple-500"
                >
                  Return & Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/t&c" className="text-gray-400 hover:text-purple-500">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="list-none">
              <li>
                <p className="text-gray-400 hover:text-purple-500">
                  +(1) 888-291-3869
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-purple-500">
                  89 Woodland Center, USA
                </p>
              </li>
              <li>
                <p className="text-gray-400 hover:text-purple-500">
                  support@printercaretech.com
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-3 text-white">
              Free Delivery on your first order!
            </p>
            <form action="#" method="post">
              <div className="form-group flex">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required=""
                  className="min-w-0 px-3.5 py-2 outline-none sm:text-sm sm:leading-6"
                />
                <button
                  className="text-white px-3 py-2 ml-1.5"
                  style={{ backgroundColor: '#737373' }}
                >
                  GO
                </button>
              </div>
            </form>

          
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 Printercaretech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
