import ContactForm from '@/components/contactForm';
import React from 'react';
import Image from 'next/image';
const ContactPage = () => {
  return (
    <div className="flex flex-col items-start justify-start h-full p-12">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex-1">
          <h1 className="font-bold text-3xl block font-aptly text-neutral-800">
            Get in touch
          </h1>
          <p className="mb-8 text-neutral-700 font-katarine">
            Please fill out the form below and we will get back to you as soon
            as possible.
          </p>
          <ContactForm />
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          <Image
            src="/Lighthouse_Orange.svg"
            alt="georgies house lighthouse"
            width={110}
            height={300}
            // className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
