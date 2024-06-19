import React from 'react';

const disclaimerContent = [
  {
    title: 'Disclaimer',
    content: [
      'If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@printcaretech .com.',
    ],
  },
  {
    title: 'Disclaimers for printtechcare.com',
    content: [
      'All the information on this website – https://printtechcare.com – is published in good faith and for general information purposes only.',
      'printcaretech sells refurbished printers and does not make any warranties about the completeness, reliability, and accuracy of this information.',
      'Any action you take upon the information you find on this website (printtechcare) is strictly at your own risk.',
      'printcaretech will not be liable for any losses and/or damages in connection with the use of our website.',
      'From our website, you can visit other websites by following hyperlinks to such external sites.',
      'While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites.',
      'These links to other websites do not imply a recommendation for all the content found on these sites.',
      "Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.",
      'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control.',
      'Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.',
    ],
  },
  {
    title: 'Consent',
    content: [
      'By using our website, you hereby consent to our disclaimer and agree to its terms.',
    ],
  },
  {
    title: 'Update',
    content: [
      'Should we update, amend, or make any changes to this document, those changes will be prominently posted here.',
    ],
  },
];

const Disclaimer = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-8 text-center">
          Disclaimer
        </h1>
        <div className="space-y-6 text-gray-700 text-lg bg-gray-100 p-4 shadow-xl">
          {disclaimerContent.map((section, index) => (
            <section key={index} className="animate-fade-in">
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside mt-4">
                  {section.content.map((item, subIndex) => (
                    <li key={subIndex}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
