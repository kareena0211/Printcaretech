import React from 'react';

const Testimonials = () => {

const testimonials = [
  {
    quote:
      "PrintCareTech's printers are simply amazing! They've helped streamline our printing processes and improve efficiency in our office.",
    name: 'Michael Thompson',
    position: 'CEO, GreenTech Solutions',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNEvrS6sPiV69-2bhp9FK9k4Iw-Eemeyg_MA&s',
  },
  {
    quote:
      "I've been using PrintCareTech's services for years, and I'm always impressed by their dedication to customer satisfaction. Highly recommended!",
    name: 'Sarah Lee',
    position: 'Freelance Graphic Designer',
    image:
      'https://www.pngitem.com/pimgs/m/50-504977_paz-monica-african-american-businessman-png-african-american.png',
  },
  {
    quote:
      'Thanks to PrintCareTech, I was able to find the perfect printer for my home office. Their expertise and support made the whole process effortless.',
    name: 'James Anderson',
    position: 'Small Business Owner',
    image:
      'https://w7.pngwing.com/pngs/362/14/png-transparent-businessperson-smile-graphy-businessman-people-public-relations-innovation-thumbnail.png',
  },
  {
    quote:
      "I'm extremely satisfied with PrintCareTech's services. Their team went above and beyond to solve my printing issues, and I couldn't be happier with the results.",
    name: 'Laura Martinez',
    position: 'Marketing Manager, Visionary Ventures',
    image: 'https://i.ibb.co/HpQ3R1Z/file.png',
  },
]


  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
          Testimonials
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded shadow-2xl border border-[#a21caf]"
            >
              <div className="flex  mb-4 flex-col">
                <p className="text-lg text-gray-800">{testimonial.quote}</p>
                <div className="flex  mt-4">
                 
                  <div>
                    <p className="text-base font-semibold text-purple-700">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
