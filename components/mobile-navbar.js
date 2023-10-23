import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "Button";
import Image from "next/image";

function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-wrap w-full bg-black bg-opacity-75 md:flex-nowrap">
      <div className="w-full h-[72px] flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[72px] px-16 border-b border-white justify-between items-center inline-flex">
          <div className="flex items-center justify-start gap-6">
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <Image
                className="w-[150px] h-[69px]"
                src="./logo.svg" // Adjust the path to your logo image
                alt="Your logo description"
                width={150} // Specify the width in pixels
                height={69} // Specify the height in pixels
                layout="fixed" // Set the layout to "fixed"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 md:hidden">
            <a
              href="#"
              className="block p-4 bg-black icon"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="text-white" />
            </a>
          </div>
          <div className="items-center justify-center hidden gap-4 md:flex">
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
        <div className="flex flex-wrap items-center justify-center w-full gap-4 px-8 py-4 bg-gray-900">
          <a
            href="#home"
            className="block p-4 text-lg font-bold text-white active"
          >
            Logo
          </a>
          <a
            href="#about"
            className="block p-4 text-lg text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#blog"
            className="block p-4 text-lg text-white hover:bg-gray-700"
          >
            Blog
          </a>
          <a
            href="#events"
            className="block p-4 text-lg text-white hover:bg-gray-700"
          >
            Events
          </a>
          <a
            href="#contact"
            className="block p-4 text-lg text-white hover:bg-gray-700"
          >
            Contact
          </a>
          <a
            href="#signup"
            className="block p-4 text-lg text-orange hover:bg-gray-700"
          >
            Sign Up
          </a>
          <a
            href="#login"
            className="block p-4 text-lg text-white hover:bg-gray-700"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
