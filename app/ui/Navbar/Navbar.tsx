import React from "react";
import { Bars } from "../icons/Bars";

type NavbarProps = {};

export const Navbar = ({}: NavbarProps): React.ReactElement => {
  return (
    <nav className="flex py-4">
      <Bars />
    </nav>
  );
};
