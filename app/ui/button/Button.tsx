import React, { MouseEventHandler } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  type = "button",
  className = "", 
  onClick = () => {},
}: ButtonProps): React.ReactElement => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};
