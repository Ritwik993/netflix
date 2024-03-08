import React from "react";
import Logo from "../assests/Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className="absolute w-44 px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={Logo} alt="" />
    </div>
  );
};

export default Header;
