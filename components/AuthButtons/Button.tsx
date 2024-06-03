"use client";
import React from "react";

const Button = ({
  onClick,
  label,
  icon,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) => {
  return (
    <button
      onClick={() => onClick()}
      className="border p-2 rounded-md flex flex-row items-center justify-center gap-3 pr-2 ml-auto font-semibold hover:bg-neutral-200 w-full"
    >
      {icon} {label}
    </button>
  );
};

export default Button;
