import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#f3e8ff] py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center animate__animated animate__fadeInDown">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8 animate__animated animate__fadeInUp bg-white shadow-xl">
          <div className="lg:w-1/2 p-6">
            <img
              src="https://img.freepik.com/free-photo/working-businesswoman-calling-office_329181-8848.jpg?t=st=1716805738~exp=1716809338~hmac=a088a272f8fb7bf5799a5e40182eb970cfc6ea2a55235e8d1288748f504d7c59&w=360"
              alt="Contact Us"
              className="w-[30rem] h-[35rem] rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 p-4  bg-gray-100 rounded-lg shadow-lg animate__animated animate__fadeInRight">
            <form className="p-10">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
