import React from 'react';

const HomePage = ({ showHomeState }: { showHomeState?: boolean }) => {
  return (
    <div
      className={`h-full w-full flex-1 p-12 flex flex-col items-start justify-center`}
    >
      <p className="text-5xl font-bold font-aptly mb-6">
        Welcome to Georgies House
      </p>
      <p className="text-xl leading-relaxed font-katarine">
        George was the first lighthouse keeper at Barrenjoey Lighthouse.
      </p>
      <p className="text-xl leading-relaxed font-katarine">
        Georgie&rsquo;s is a community that helps young people understand their
        wellbeing, connect and support one another and ultimately, thrive.
      </p>
      <p className="text-xl leading-relaxed font-katarine">
        We will be here when the sun is shining as an icon of brilliance,
        happiness and awe, and we will consistently provide a beacon of support,
        guidance and stability during the storm.
      </p>
      <p className="text-5xl font-bold font-aptly mt-8 text-center w-full">
        More Coming Soon...
      </p>
    </div>
  );
};
export default HomePage;
