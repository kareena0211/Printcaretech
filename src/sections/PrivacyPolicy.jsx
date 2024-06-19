import React from 'react';

const PrivacyPolicy = () => {
const privacyPolicyContent = [
  {
    id: 1,
    heading: 'Privacy Policy',
    content: [
      'PrintCareTech website is owned by us, which is a data controller of your personal data.',
      'We have adopted this Privacy Policy, which determines how we are processing the information collected by PrintCareTech, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using the PrintCareTech website.',
      'We take care of your personal data and undertake to guarantee its confidentiality and security.',
    ],
  },

  {
    id: 2,
    heading: 'Personal information we collect:',
    content: [
      'When you visit PrintCareTech, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement, including the sale of refurbished printers.',
    ],
  },
  {
    id: 3,
    heading: 'Why do we process your data?',
    content: [
      'Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.',
      'You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number, including when purchasing refurbished printers. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features, including purchasing refurbished printers. Users who are uncertain about what information is mandatory are welcome to contact us.',
    ],
  },
  {
    id: 4,
    heading: 'Links to other websites:',
    content: [
      'Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.',
    ],
  },
  {
    id: 5,
    heading: 'Information security:',
    content: [
      'We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.',
    ],
  },
  {
    id: 6,
    heading: 'Legal disclosure:',
    content: [
      'We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.',
    ],
  },
  {
    id: 7,
    heading: 'Contact information:',
    content: [
      'If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, including information related to the sale of refurbished printers, you may send an email to printcaretech.',
    ],
  },
];


  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-700 text-lg bg-gray-100 p-4 shadow-xl">
          {privacyPolicyContent.map((point) => (
            <section key={point.id} className="animate-fade-in">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {point.heading}
              </h2>
              {Array.isArray(point.content) ? (
                <ul className="list-disc list-inside mt-4">
                  {point.content.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{point.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
