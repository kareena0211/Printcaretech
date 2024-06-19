import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center animate__animated animate__fadeInDown">
          Why Choose Us
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-4 animate__animated animate__fadeInLeft">
            <img
              src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148923846.jpg?t=st=1716804263~exp=1716807863~hmac=2010269c8c6cf64be180f9cd8f3763507d56513f22bb5d02a9f9ef8d49c1e00a&w=900"
              alt="Why Choose Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 p-4 animate__animated animate__fadeInRight">
            <ul className="space-y-6 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="text-purple-700 text-2xl font-bold mr-2 animate__animated animate__fadeInUp">
                  1.
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2 animate__animated animate__fadeInUp">
                    Quality Refurbished Printers
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We offer top-quality refurbished printers and printing
                    supplies from leading brands to ensure the best results for
                    your printing needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 text-2xl font-bold mr-2 animate__animated animate__fadeInUp">
                  2.
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2 animate__animated animate__fadeInUp">
                    Expert Support
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    Our knowledgeable customer support team is available round
                    the clock to assist you with any queries or issues you may
                    encounter.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 text-2xl font-bold mr-2 animate__animated animate__fadeInUp">
                  3.
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2 animate__animated animate__fadeInUp">
                    Wide Range of Services
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    From printer sales to repair services and supplies, we offer
                    a comprehensive range of services to meet all your printing
                    needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 text-2xl font-bold mr-2 animate__animated animate__fadeInUp">
                  4.
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2 animate__animated animate__fadeInUp">
                    Customer Satisfaction
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We prioritize customer satisfaction by providing
                    personalized services and solutions tailored to your
                    specific needs.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-700 text-2xl font-bold mr-2 animate__animated animate__fadeInUp">
                  5.
                </span>
                <div>
                  <h2 className="text-2xl font-semibold text-purple-700 mb-2 animate__animated animate__fadeInUp">
                    Competitive Pricing
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                    We offer competitive pricing on all our refurbished printers
                    and services, ensuring you get the best value for your
                    investment.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
