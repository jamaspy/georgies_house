import Card from '@/components/card';
import { boardMembers } from '@/lib/about-data';
import React from 'react';

const JACK = {
  name: 'Jack Jones',
  jobTitle: 'CEO',
  description:
    'Jack has previously worked in educational settings mentoring Indigenous youth in urban, rural and remote environments, led a mental health charity and worked as a consultant, advising government agencies on mental health service design, policies, reform and systemic change. Jack is the CEO of Georgie’s, overseeing the design and implementation of the service, whilst managing relationships and partnerships throughout the journey. Jack reports directly to the Board.',
  image:
    'https://media.licdn.com/dms/image/C5603AQFQ1ADBC6KYgQ/profile-displayphoto-shrink_800_800/0/1619768117922?e=1712793600&v=beta&t=Qm3LpFTtZtmPzsjdvO_RsDsNafL7IE3Yove0qOf_Am4',
};
const JADE = {
  name: 'Jade Speight',
  jobTitle: 'Marketing and Communications Manager',
  description:
    'Jack has previously worked in educational settings mentoring Indigenous youth in urban, rural and remote environments, led a mental health charity and worked as a consultant, advising government agencies on mental health service design, policies, reform and systemic change. Jack is the CEO of Georgie’s, overseeing the design and implementation of the service, whilst managing relationships and partnerships throughout the journey. Jack reports directly to the Board.',
  image:
    'https://media.licdn.com/dms/image/D5603AQHmYv7uEsc9Bg/profile-displayphoto-shrink_400_400/0/1708914143376?e=1717027200&v=beta&t=-NR92Dol3VKe1FMwj5cUvqmNrg9Rgdy4rpVDRbAu9AU',
};
const TeamPage = () => {
  return (
    <div className="flex flex-col h-full p-12">
      <h1 className="font-bold text-3xl block font-aptly text-neutral-800">
        Our Team
      </h1>
      <p className="text-neutral-700 font-katarine">
        We are small but mighty. We are a team of passionate individuals who are
        committed to making a difference in the lives of young people.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <Card {...JACK} />
        <Card {...JADE} />
      </div>
      <h1 className="font-bold text-3xl block mb-8">Our Board</h1>
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
