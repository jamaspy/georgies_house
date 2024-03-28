/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CardProps {
  name: string;
  description: string;
  image: string;
  jobTitle?: string;
}

const Card = ({ name, description, image, jobTitle }: CardProps) => {
  return (
    <div className="rounded-md shadow border border-neutral-200 bg-white p-4">
      <div className="flex flex-row items-center justify-start gap-4 mb-2">
        <img
          src={image}
          alt={name}
          className="rounded-full w-24 h-24 object-cover object-center"
        />
        <div className="flex flex-col">
          <p className="md:text-2xl text-3xl font-aptly font-bold">{name}</p>
          {jobTitle && (
            <p className="block text-xs text-neutral-700 font-katarine">
              {jobTitle}
            </p>
          )}
        </div>
      </div>
      <p className="font-katarine">{description}</p>
    </div>
  );
};

export default Card;
