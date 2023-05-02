"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type BarsProps = {
  className?: string;
};

export const Bars = ({ className }: BarsProps): React.ReactElement => {
  const defaultClassName = twMerge(
    "w-20  h-2 origin-bottom inline-block rounded-xl transition-all duration-1000 ease-in-out bg-black",
    className
  );

  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked((prev) => !prev)}
      className="flex flex-col gap-2"
    >
      <span
        className={defaultClassName}
        style={{
          transform: clicked ? "translate(8px, 0px) rotatez(45deg);" : "",
        }}
      />
      <span
        className={twMerge(defaultClassName, "origin-top")}
        style={{
          transform: clicked ? "rotatez(-45deg);" : "",
        }}
      />
      <span
        className={defaultClassName}
        style={{
          transform: clicked ? "translate(30px,-11px) rotatez(45deg);" : "",
        }}
      />
    </div>
  );
};
