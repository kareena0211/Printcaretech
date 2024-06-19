import React from 'react';

const Blog = () => {
  const blogs = [
    {
      title: 'The Ultimate Guide to Printer Maintenance',
      date: 'May 1, 2024',
      excerpt:
        'Learn how to keep your printer in top condition with our comprehensive maintenance guide.',
      image:
        'https://img.freepik.com/free-vector/organic-flat-printing-industry-illustrated_23-2148899339.jpg?t=st=1716788388~exp=1716791988~hmac=4f2c9dcca585061d45b323666a0b3339b87b1a62ad0653891c3714a395489c43&w=740',
    },
    {
      title: 'Top 10 Printers for Home Office Use',
      date: 'April 20, 2024',
      excerpt: 'Discover the best printers for your home office setup.',
      image:
        'https://img.freepik.com/free-photo/medium-shot-smiley-woman-with-laptop_23-2149628873.jpg?t=st=1716788430~exp=1716792030~hmac=7fb6b3d68c652c43fd017541cb529fa12fd45d79258241c648fa5dc5c48ef8ab&w=900',
    },
    {
      title: 'How to Troubleshoot Common Printer Issues',
      date: 'April 10, 2024',
      excerpt:
        'Get tips on resolving common printer problems quickly and easily.',
      image:
        'https://img.freepik.com/free-vector/printing-industry-illustration_23-2148885542.jpg?t=st=1716788468~exp=1716792068~hmac=131376e6feaa7118ef898f81f7c8a3879dfdd13ba864e2db2a836ccea25235d1&w=740',
    },
    {
      title: 'The Benefits of Using Eco-Friendly Printer Supplies',
      date: 'March 25, 2024',
      excerpt:
        'Find out how eco-friendly printer supplies can save you money and help the environment.',
      image:
        'https://img.freepik.com/free-vector/hand-drawn-international-trade-illustrated_52683-76252.jpg?t=st=1716788539~exp=1716792139~hmac=aca4ac951b4aa7f37136688416eed7fcef7812e4ec8a116d833bfc210cfefdc2&w=826',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-purple-700 font-bold">
            Our Blog
          </h1>
          <p className="mt-4 text-gray-700">
            Stay updated with the latest news, tips, and insights from the world
            of printing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-700">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-700">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
