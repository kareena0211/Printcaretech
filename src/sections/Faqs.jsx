import React from 'react';

const FAQs = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="space-y-8 text-gray-700 text-lg bg-gray-100 p-4 shadow-xl">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                {faq.question}
              </h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
const faqs = [
  {
    question: 'What products do you offer?',
    answer:
      'We offer a wide range of printers and printing supplies from leading brands, including refurbished printers, to meet all your printing needs.',
  },
  {
    question: 'How can I contact customer support?',
    answer:
      'You can contact our customer support team 24/7 via email at support@printercaretech.com or call us at 1-800-123-4567.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'You have 30 calendar days to return an item from the date you received it. The item must be unused and in the same condition that you received it, in the original packaging, with the receipt or proof of purchase.',
  },
  {
    question: 'Do you offer repair services?',
    answer:
      'Yes, we offer expert repair services to get your printer up and running in no time.',
  },
  {
    question: 'How long does it take to process a refund?',
    answer:
      "Once we receive your returned item, we will inspect it and notify you of the status of your refund. If approved, the refund will be processed within a certain amount of days, depending on your card issuer's policies.",
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we offer international shipping to many countries. Please contact our support team for more details.',
  },
];
