"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../button/Button";

type BarsProps = {
  className?: string;
};

export const Bars = ({ className }: BarsProps): React.ReactElement => {
  const defaultClassName = twMerge(
    "w-3/4 h-1 origin-bottom inline-block rounded-xl transition-all duration-1000 ease-in-out bg-white",
    className
  );

  const [clicked, setClicked] = useState(false);

  return (
    <Button
      onClick={() => setClicked((prev) => !prev)}
      className="flex flex-col w-20 gap-2"
    >
      <span
        className={twMerge(defaultClassName, clicked && "w-1/2")}
        style={{
          transform: clicked ? "translate(8px, 0px) rotatez(45deg)" : "",
        }}
      />
      <span
        className={twMerge(defaultClassName, "origin-top")}
        style={{
          transform: clicked ? "rotateZ(-45deg) translate(3px, -1px)" : "",
        }}
      />
      <span
        className={twMerge(defaultClassName, "w-[33%]")}
        style={{
          transform: clicked ? "translate(30px, -9px) rotateZ(45deg)" : "",
        }}
      />
    </Button>
  );
};
