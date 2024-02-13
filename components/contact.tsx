import React from 'react';
import ContactForm from './contactForm';

const ContactPage = ({ showContactState }: { showContactState?: boolean }) => {
  return (
    <div
      className={`h-full w-full flex-1 p-12 flex flex-col items-start justify-center`}
    >
      <p className="text-5xl font-bold font-aptly mb-6">Get in touch...</p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
