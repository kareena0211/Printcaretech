import React from 'react';
import WhyChooseUs from '../sections/WhyChooseUs';

export default function Service() {
  return (
    <>
      <div className="flex mt-10 justify-center items-center px-8 py-6 bg-[#f3e8ff] animate__animated animate__fadeIn">
        <div className="aboutCase flex w-full shadow-md mt-3 rounded-sm bg-white animate__animated animate__fadeIn">
          <section className="w-full p-5 md:text-center animate__animated animate__fadeInLeft">
            <h2 className="text-4xl font-bold text-center text-[#7e22ce]">
              Our Service
            </h2>
            <p className="mt-10 text-center">
              Our dedicated customer support team is available 24/7 to assist
              you with any inquiries or issues you may have regarding our
              refurbished printers. Whether it's troubleshooting printer
              problems or providing guidance on product selection, we're here to
              help you every step of the way. With our prompt and professional
              support services, you can rest assured that your printing needs,
              especially with our refurbished printers, are in good hands.
              Contact us today to experience the Printercaretech difference.{' '}
            </p>
          </section>

          <section className="w-full p-5 hidden md:block lg:block animate__animated animate__fadeInRight">
            <img
              src="https://img.freepik.com/free-vector/service-24-7-concept-illustration_114360-7380.jpg?t=st=1716793972~exp=1716797572~hmac=61f6724f9586357f971439d7ed061d41ea60aa8fb91fd0df14e736d5b5dbfe3c&w=740"
              alt="Service Illustration"
              className="w-full h-[25rem] border border-[#7e22ce] hover:scale-105 transition-transform duration-1000 rounded-md"
            />
          </section>
        </div>
      </div>

      <WhyChooseUs />
    </>
  );
}
