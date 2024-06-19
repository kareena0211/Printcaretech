import React, { useState } from 'react';
import { productData } from './productData';

import { useCart } from "../../context/CartContext";
const btns = ['All', 'Printers', 'Mouse', 'keyboard'];
const itemsPerPage = 8; // Number of items to display per page

const Products = () => {
   const { addToCart } = useCart();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
const [cartItems, setCartItems] = useState([]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter products based on the current page and selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page to 1 when category changes
  };


  return (
    <main className="container mx-auto px-4 mt-20">
      <h2 className="text-purple-600 font-bold text-5xl text-center mb-8">
        Our Products
      </h2>

      <div className="flex justify-center space-x-4 mb-8">
        {btns.map((value, index) => (
          <button
            key={index}
            onClick={() =>
              handleCategoryFilter(
                value === 'All' ? 'All' : value.toLowerCase(),
              )
            }
            className={`bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${
              selectedCategory ===
              (value === 'All' ? 'All' : value.toLowerCase())
                ? 'bg-purple-700'
                : ''
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  Refurbished {product.name}
                </h2>
                {product.brand && (
                  <p className="text-sm text-gray-700 mb-2">
                    Brand: {product.brand}
                  </p>
                )}
                {product.type && (
                  <p className="text-sm text-gray-700 mb-2">
                    Type: {product.type}
                  </p>
                )}
                {product.connection && (
                  <p className="text-sm text-gray-700 mb-2">
                    Connection: {product.connection}
                  </p>
                )}
                {product.switchType && (
                  <p className="text-sm text-gray-700 mb-2">
                    Switch Type: {product.switchType}
                  </p>
                )}
                {product.features && product.features.length > 0 && (
                  <ul className="list-disc pl-5 mb-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-lg font-semibold mb-2">
                  Price: {product.price}
                </p>
                {product.mrp && (
                  <p className="text-sm text-gray-700 mb-2">
                    MRP: {product.mrp}
                  </p>
                )}
                {product.discount && (
                  <p className="text-sm text-gray-700">
                    Discount: {product.discount}
                  </p>
                )}
              </div>
              <div className="text-center p-2">
                <button
                  className="bg-purple-600 px-2 rounded p-1 text-white"
                  onClick={() => addToCart(product)} // Add this line
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
