import React from 'react';
import Card from './card';
import { boardMembers } from '@/lib/about-data';

const JACK = {
  name: 'Jack Jones',
  description:
    'Jack has previously worked in educational settings mentoring Indigenous youth in urban, rural and remote environments, led a mental health charity and worked as a consultant, advising government agencies on mental health service design, policies, reform and systemic change. Jack is the CEO of Georgie’s, overseeing the design and implementation of the service, whilst managing relationships and partnerships throughout the journey. Jack reports directly to the Board.',
  image:
    'https://media.licdn.com/dms/image/C5603AQFQ1ADBC6KYgQ/profile-displayphoto-shrink_800_800/0/1619768117922?e=1712793600&v=beta&t=Qm3LpFTtZtmPzsjdvO_RsDsNafL7IE3Yove0qOf_Am4',
  rotate: false,
};

const AboutPage = ({ showAboutState }: { showAboutState?: boolean }) => {
  return (
    <div className="h-full w-full flex-1 p-12 flex flex-col items-start justify-center text-gray-800">
      <section className="flex flex-col mb-4">
        <p className="text-5xl font-bold font-aptly mb-6 text-gray-800">
          Our Team
        </p>
        <p className="text-xl leading-relaxed font-katarine text-gray-800">
          We are small but mighty. We are a team of passionate individuals who
          are committed to making a difference in the lives of young people.
        </p>
      </section>
      <Card
        name={JACK.name}
        description={JACK.description}
        image={JACK.image}
        rotate={JACK.rotate}
      />
      <p className="text-5xl font-bold font-aptly my-6">Our Board</p>
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
