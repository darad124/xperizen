import { useState, useEffect } from "react";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import SignUpModal from "./signUpModal";
import LoginModal from "./loginModal";
import {
  auth,
  onAuthStateChanged,
  signOutUser,
  useAuthState,
} from "../src/firebase"; // Update this path to point to your firebase.js file
import ReactDOM from "react-dom";

const navLinks = [
  { text: "About", link: "/about" },
  { text: "Blog", link: "/blog" },
  { text: "Events", link: "/events" },
  { text: "Contact", link: "/contact" },
  { text: "sign Up", modal: "signup" },
  { text: "login", modal: "login" },
];

export default function Navbar() {
  const [modal, setModal] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useAuthState();
  const handleLoginClick = () => {
    setModal("login");
  };
  const handleSignUpClick = () => {
    setModal("signup");
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User:", user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleModalClick = (modalType, closeMenu) => {
    setModal(modalType);
    if (closeMenu) {
      toggleMenu();
    }
  };

  return (
    <div className={`top-0 flex flex-wrap w-full bg-black bg-opacity-75 z-10 sticky md:flex-nowrap ${modal ? 'hidden' : ''}`}>


      <div className="inline-flex flex-col items-center justify-start w-full">
        <div className="inline-flex items-center self-stretch justify-between px-2 border-b md:px-16">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-col justify-start items-center gap-2.5 inline-flex">
              <Image
                className="w-[150px] h-[69px]"
                src="/logo.png" // Adjust the path to your logo image
                alt="Logo"
                width={150} // Specify the width in pixels
                height={69} // Specify the height in pixels
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
          <div className=" items-center justify-end hidden gap-4 md:flex">
            {user !== null ? (
              <div className="relative text-3xl text-orange-600">
                <FontAwesomeIcon icon={faUser} onClick={toggleDropdown} />
                {dropdownOpen && (
                  <div className="absolute right-0 z-10 w-48 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                        {user.displayName}
                      </p>
                    </div>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Purchase
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                      >
                        Contact Us
                      </a>
                      <button
                        onClick={signOutUser}
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button color="white" onClick={handleLoginClick}>
                  Login
                </Button>
                <Button color="orange" onClick={handleSignUpClick}>
                  Sign Up
                </Button>
                <SignUpModal
                  isOpen={modal === "signup"}
                  onRequestClose={() => setModal("")}
                  onLoginClick={() => setModal("login")}
                />
                <LoginModal
                  isOpen={modal === "login"}
                  onRequestClose={() => setModal("")}
                  onSignUpClick={() => setModal("signup")}
                />
              </>
            )}
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
                {link.modal ? (
                  <button onClick={() => handleModalClick(link.modal, true)}>
                    {link.text}
                  </button>
                ) : (
                  <a href={link.link} onClick={toggleMenu}>
                    {link.text}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
