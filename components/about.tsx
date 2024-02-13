import React from 'react';
import Card from './card';
import { boardMembers } from '@/lib/about-data';

const AboutPage = ({ showAboutState }: { showAboutState?: boolean }) => {
  return (
    <div
      className={` h-full w-full flex-1 p-12 flex flex-col items-start justify-center`}
    >
      <section className="flex flex-col mb-4">
        <p className="text-5xl font-bold font-aptly mb-6">About</p>
        <p className="text-xl leading-relaxed font-katarine">
          We are small but mighty. We are a team of passionate individuals who
          are committed to making a difference in the lives of young people.
        </p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
        {boardMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            description={member.description}
            image={member.image}
            rotate={member.rotate}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
