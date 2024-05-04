import Card from '@/components/card';
import { boardMembers } from '@/lib/about-data';
import Link from 'next/link';
import React from 'react';

const JACK = {
  name: 'Jack Jones',
  jobTitle: 'CEO',
  description:
    'Jack has previously worked in educational settings mentoring Indigenous youth in urban, rural and remote environments, led a mental health charity and worked as a consultant, advising government agencies on mental health service design, policies, reform and systemic change. Jack is the CEO of Georgie’s, overseeing the design and implementation of the service, whilst managing relationships and partnerships throughout the journey. Jack reports directly to the Board.',
  image: '/jack.jpeg',
};
const JADE = {
  name: 'Jade Speight',
  jobTitle: 'Marketing and Communications Manager',
  description:
    "Super keen to be jumping on board to head up Georgie’s Marketing and Comms! I feel so lucky to have grown up in the best place on earth (the Northern Beaches), always at the beach, I consider myself a big fan of health and wellness, my morning routine is paramount to a productive day. I love connecting with people over a good cup of coffee and I've always got some sort of music playing.",
  image: '/jade.jpeg',
};
const TeamPage = () => {
  return (
    <div className="flex flex-col h-full p-12">
      <h1 className="font-bold text-3xl block font-aptly text-neutral-800">
        Our Team
      </h1>
      <p className="text-neutral-700 font-katarine">
        We are small, mighty and looking to grow! We are a team of passionate
        individuals who are committed to making a difference in the lives of
        young people. We also believe the more dedicated and passionate
        individuals we have involved in Georgie&lsquo;s, the greater our impact.
        If you would like to get involved, please contact us{' '}
        <Link href="/contact" className="text-george-lime underline">
          here
        </Link>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Card {...JACK} />
        <Card {...JADE} />
      </div>
      <h1 className="font-bold text-3xl block mb-8 font-aptly">Our Board</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
        {boardMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            description={member.description}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
