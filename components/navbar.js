import { useState } from "react";
import Button from "Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const navLinks = [
  { text: "About", link: "/about" },
  { text: "Blog", link: "/blog" },
  { text: "Events", link: "/events" },
  { text: "Contact", link: "/contact" },
  { text: "signin", link: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-wrap w-full bg-black bg-opacity-75 md:flex-nowrap">
      <div className="inline-flex flex-col items-center justify-start w-full">
        <div className="inline-flex items-center self-stretch justify-between px-2 border-b md:px-16">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <Image
                className="w-[150px] h-[69px]"
                src="./logo.png" // Adjust the path to your logo image
                alt="Logo"
                width={150} // Specify the width in pixels
                height={69} // Specify the height in pixels
                layout="fixed" // Set the layout to "fixed"
              />
            </div>
            {/* Navigation links for desktop */}
            <div className="items-start justify-start hidden gap-8 md:flex">
              {navLinks.slice(0, 4).map((link, index) => (
                <div
                  key={index}
                  className="text-white text-base font-semibold font-['Poppins'] leading-normal"
                >
                  <a href={link.link}>{link.text}</a>
                </div>
              ))}
            </div>
            {/* Buttons for desktop */}
          </div>
          <div className="flex items-center justify-end hidden gap-4 md:flex">
            <Button color="white">Login</Button>
            <Button color="orange">Sign Up</Button>
          </div>
          {/* Hamburger menu icon for mobile (now on the right) */}
          <div
            className="ml-auto cursor-pointer md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="text-2xl text-white" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl text-white" />
            )}
          </div>
        </div>
        {/* Navigation links for mobile */}
        {menuOpen && (
          <div className="flex flex-col items-center gap-2 pb-2 md:hidden">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="text-white text-base font-semibold font-['Poppins'] leading-normal"
              >
                <a href={link.link} onClick={toggleMenu}>
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
