import React from 'react';

const RefundAndReturnPolicy = () => {
const refundAndReturn = [
  {
    id: 1,
    head: 'Return and Refunds Policy',
    desc: `You are entitled to cancel your order within 30 days without giving any reason for doing so.
    
    The deadline for canceling an order is 30 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
    
    In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement.
    
    You can inform us of your decision by e-mail printcaretech.
    
    We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement, including for refurbished printers.`,
  },

  {
    id: 2,
    head: 'Returning Goods',
    desc: `You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address:
    
    8270 Woodland Center Blvd, Tampa, FL 33614 USA
    
    We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery, including for refurbished printers.`,
  },
  {
    id: 3,
    head: 'Gifts:',
    desc: `If the goods were marked as a gift when purchased and then shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.
    
    If the goods weren’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, We will send the refund to the gift giver.`,
  },
  {
    id: 4,
    head: 'Contact Us',
    desc: `If you have any questions about our Returns and Refunds Policy, including returns and refunds for refurbished printers, please contact us by e-mail printcaretech.`,
  },
];

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
          Refund and Return Policy
        </h1>
        <div className="space-y-6 text-gray-700 text-gray-700 text-lg bg-gray-100 p-4 shadow-xl">
          {refundAndReturn.map((point) => (
            <section key={point.id} className="animate-fade-in">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {point.head}
              </h2>
              <p>{point.desc}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefundAndReturnPolicy;
