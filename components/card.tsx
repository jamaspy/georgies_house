/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CardProps {
  name: string;
  description: string;
  image: string;
  rotate?: boolean;
}

const Card = ({ name, description, image, rotate }: CardProps) => {
  return (
    <div
      className={`rounded-xl shadow-md border-4 border-george-black p-4 bg-george-pink text-george-black lg:hover:-translate-y-1 lg:hover:rotate-3 lg:hover:shadow-lg transition-all duration-200 ease-in-out ${
        rotate ? 'rotate-3 md:rotate-0' : '-rotate-2 md:rotate-0'
      }`}
    >
      <div className="flex flex-row items-center justify-start gap-4 mb-2">
        <img
          src={image}
          alt={name}
          className="rounded-full w-24 h-24 border-4 border-george-black"
        />
        <p className="md:text-2xl text-3xl font-aptly font-bold">{name}</p>
      </div>
      <p className="font-katarine">{description}</p>
    </div>
  );
};

export default Card;
