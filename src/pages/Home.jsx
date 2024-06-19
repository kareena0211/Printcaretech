import React from 'react';
import Blog from '../sections/Blog';

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <img
            src="https://img.freepik.com/free-photo/medium-shot-woman-drinking-coffee_23-2149628826.jpg?t=st=1716787765~exp=1716791365~hmac=628a358c355b0d265ea8ac720979b83359609b83bdaec8b8b3787909f1c641bd&w=900"
            alt="Woman drinking coffee"
            className="w-full h-96 object-cover animate__animated animate__fadeIn"
          />
          <div className="absolute inset-0 bg-purple-900 bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
            <div className="text-center text-white animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Welcome to Printercaretech
              </h1>
              <p className="text-lg md:text-2xl">
                Your one-stop solution for all printer needs
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-purple-700 font-bold">
              Our Services
            </h2>
            <p className="mt-4 text-gray-700">
              We provide a wide range of services to ensure your printing needs
              are met with the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-cols-1 gap-8 justify-center">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-700">
                Printer Sales
              </h3>
              <p className="mt-4 text-gray-600">
                Find the best printers for your home or office at competitive
                prices.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-700">
                Repair Services
              </h3>
              <p className="mt-4 text-gray-600">
                Expert repair services to get your printer up and running in no
                time.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-700">
                Supplies & Accessories
              </h3>
              <p className="mt-4 text-gray-600">
                High-quality supplies and accessories for all your printing
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OtherComponents Call  */}
      <Blog />
    </>
  );
};

export default Home;
