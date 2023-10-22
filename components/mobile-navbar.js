import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50 bg-black bg-opacity-75 w-full flex flex-wrap md:flex-nowrap">
      <div className="w-full h-[72px] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[72px] px-16 border-b border-white justify-between items-center inline-flex">
          <div className="justify-start items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <img className="w-[150px] h-[69px]" src="./logo.svg" />
            </div>
          </div>
          <div className="justify-center items-center gap-4 flex md:hidden">
            <a
              href="#"
              className="icon p-4 block bg-black"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-white" />
            </a>
          </div>
          <div className="justify-center items-center gap-4 hidden md:flex">
            <Button color="white">Login</Button>
            <Button color="orange">Sign Up</Button>
          </div>
        </div>
      </div>
      <div
        id="myMenu"
        className={`${
          showMenu ? "block" : "hidden"
        } transition duration-300 ease-in-out md:hidden`}
      >
        <div className="bg-gray-900 w-full py-4 px-8 flex flex-wrap justify-center items-center gap-4">
          <a href="#home" className="active p-4 block text-lg font-bold text-white">
            Logo
          </a>
          <a href="#about" className="p-4 block text-lg text-white hover:bg-gray-700">
            About
          </a>
          <a href="#blog" className="p-4 block text-lg text-white hover:bg-gray-700">
            Blog
          </a>
          <a href="#events" className="p-4 block text-lg text-white hover:bg-gray-700">
            Events
          </a>
          <a href="#contact" className="p-4 block text-lg text-white hover:bg-gray-700">
            Contact
          </a>
          <a href="#signup" className="p-4 block text-lg text-orange hover:bg-gray-700">
            Sign Up
          </a>
          <a href="#login" className="p-4 block text-lg text-white hover:bg-gray-700">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
