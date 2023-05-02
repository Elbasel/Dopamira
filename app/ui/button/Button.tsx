import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit";
};

export const Button = ({
  children,
  type = "button",
}: ButtonProps): React.ReactElement => {
  return <button type={type}>{children}</button>;
};
