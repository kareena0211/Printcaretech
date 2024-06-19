import React from 'react';

import Testimonials from '../sections/Testimonial';

const About = () => {
  return (
    <>
      <div className="bg-white mt-10">
        <div className="relative bg-purple-700 py-12">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900')",
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
              About Printercaretech
            </h1>
            <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
              Your trusted partner for all printer solutions
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-purple-700 font-bold animate__animated animate__fadeInUp">
              Our Story
            </h2>
            <p className="mt-4 text-gray-700 animate__animated animate__fadeInUp">
              Welcome to PrintCareTech, your destination for high-quality
              refurbished printers at unbeatable prices. Our printers are
              rigorously tested to perform like new, offering significant
              savings and supporting eco-friendly practices. Choose from top
              brands like HP, Canon, Brother, and Epson, perfect for home,
              office, or business needs. Enjoy comprehensive warranties and
              exceptional customer support with every purchase. Visit
              PrintCareTech today for affordable, reliable, and sustainable
              printing solutions. Print smarter, save more, and go green with
              PrintCareTech!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 shadow-2xl animate__animated animate__fadeInLeft">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                At PrintCareTech, our mission is to provide high-quality,
                affordable, and eco-friendly refurbished printers. We ensure
                each product meets rigorous standards, delivering exceptional
                value and reliability to our customers.
              </p>
            </div>
            <div className="p-6 shadow-2xl animate__animated animate__fadeInRight">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                Our vision is to lead in sustainable printing solutions,
                reducing electronic waste and promoting environmental
                responsibility. We aim to make advanced printing technology
                accessible to all while supporting a greener planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
};

export default About;
