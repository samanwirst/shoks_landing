import React from "react";
import NavigationBar from "./NavigationBar";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <NavigationBar />
      {children}
    </header>
  );
};

export default Header;