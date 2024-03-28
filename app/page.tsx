import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex h-full">
      <section className="w-full md:w-1/2">
        <div className="overflow-y-auto flex-1 flex flex-col items-start justify-center h-full p-4 md:p-8 text-neutral-800">
          <p className="text-5xl font-bold font-aptly mb-6">
            Welcome to Georgie&rsquo;s House
          </p>
          <p className="text-xl leading-relaxed font-katarine">
            Georgie&rsquo;s House pays homage to the first lighthouse keeper of
            Barrenjoey Lighthouse on Sydney&rsquo;s Northern Beaches. George was
            there to shine a light through darkness or guide ships out at sea.
          </p>
          <p className="text-xl leading-relaxed font-katarine my-4">
            Georgie&rsquo;s has been created through a desperate passion to
            support young people through their life. Georgie&rsquo;s is a
            community that helps young people understand their wellbeing,
            navigate life&rsquo;s challenges, connect with each other and
            ultimately, thrive.
          </p>
          <p className="text-xl leading-relaxed font-katarine mb-12 md:mb-0">
            We will be here when the sun is shining as an icon of brilliance,
            happiness and awe, and we will consistently provide a beacon of
            support, guidance and stability during any storm.
          </p>
        </div>
      </section>
      <section className="hidden md:flex w-1/2 bg-george-orange min-h-[90vh]">
        <div className="h-full  flex items-center justify-center">
          <Image
            src="/Logo_Orange_InvertedWhite.svg"
            alt="georgies house lighthouse"
            width={1000}
            height={300}
            className="mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
