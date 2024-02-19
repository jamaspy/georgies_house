import React from 'react';

const HomePage = ({ showHomeState }: { showHomeState?: boolean }) => {
  return (
    <div className="h-full w-full flex-1 p-12 flex flex-col items-start justify-center text-gray-800">
      <p className="text-5xl font-bold font-aptly mb-6">
        Welcome to Georgie&rsquo;s House
      </p>
      <p className="text-xl leading-relaxed font-katarine">
        Georgie&rsquo;s House pays homage to the first lighthouse keeper of
        Barrenjoey Lighthouse on Sydney&rsquo;s Northern Beaches. George was
        there to shine a light through darkness or guide ships out at sea.
      </p>
      <p className="text-xl leading-relaxed font-katarine my-4">
        Georgie&rsquo;s has been created through a desperate passion to support
        young people through their life. Georgie&rsquo;s is a community that
        helps young people understand their wellbeing, navigate life&rsquo;s
        challenges, connect with each other and ultimately, thrive.
      </p>
      <p className="text-xl leading-relaxed font-katarine">
        We will be here when the sun is shining as an icon of brilliance,
        happiness and awe, and we will consistently provide a beacon of support,
        guidance and stability during any storm.
      </p>
      <p className="text-5xl font-bold font-aptly mt-8 text-center w-full">
        More Coming Soon...
      </p>
    </div>
  );
};
export default HomePage;
