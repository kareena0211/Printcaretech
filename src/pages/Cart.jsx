import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total price by summing up prices of all items in the cart
  const total = cart.reduce((acc, item) => {
    if (typeof item.price === 'string' && item.price.trim() !== '') {
      acc += parseInt(item.price.replace(/[^\d.]/g, ''), 10) || 0;
    }
    return acc;
  }, 0);

  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-20 flex">
      {/* Cart section */}
      <div className="md:w-1/2 pr-4">
        <h2 className="text-3xl font-bold text-center mb-6">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.imageUrl || 'https://via.placeholder.com/50'}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="flex-grow">
                  <p className="font-bold">{item.name}</p>
                  <p className="text-blue-800">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 ml-4"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Billing section */}
      <div className="md:w-1/2 pl-4 flex items-center justify-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Billing</h2>
          <div className="border-b border-gray-300 mb-4"></div>

          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total:</span>
            <span className="text-blue-600 font-semibold">{total}</span>
          </div>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
