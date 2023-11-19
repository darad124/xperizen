import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { signIn } from "../src/firebase";
import SignUpModal from "./signUpModal";

const LoginModal = ({ onSignUpClick, isOpen, onRequestClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const [user, error] = await signIn(email, password);

      if (user) {
        // Login successful
        console.log("Login successful. User data:", user);
        onRequestClose();
      } else {
        // Handle login error
        console.error("Login error:", error);
        // You can add more code here to handle the error
      }
    } catch (error) {
      // Handle unexpected errors
      console.error("Unexpected error:", error);
    }
  };

  return (
    <Modal
  isOpen={isOpen}
  onRequestClose={onRequestClose}
  contentLabel="login Modal"
  className="modal"
  overlayClassName="overlay"
>

      <div className="flex flex-col items-center justify-center h-auto px-1 bg-transparent lg:mt-4 md:px-8 lg:px-12">
        <div className="relative flex flex-col items-center w-full gap-6 px-2 bg-white md:px-12 lg:px-14">
          <div
            className="absolute text-5xl text-black transition-transform transform cursor-pointer lg:text-3xl top-2 right-2 hover:scale-110"
            onClick={onRequestClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <h1 className="w-full text-center text-black py-2 lg:py-0 text-5xl lg:mt-0 mt-8  font-bold font-['Poppins']">
            Login
          </h1>
          <p className="w-full text-center text-black py-2 lg:text-lg text-3xl font-normal font-['Poppins']">
            Enter your login details
          </p>

          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center justify-center w-full gap-6 py-2 lg:gap-4"
          >
            <div className="flex flex-col items-start justify-start w-full lg:h-20 lg:gap-2">
              <label className="w-full text-black lg:text-base text-3xl font-normal font-['Poppins'] leading-normal">
                Email<span className="text-orange-600">*</span>
              </label>
              <input
                className="w-full py-6 bg-white border border-black lg:p-3"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full lg:h-20 lg:gap-2">
              <label className="w-full text-black lg:text-base text-3xl font-normal font-['Poppins'] leading-normal">
                Password<span className="text-orange-600">*</span>
              </label>
              <input
                className="w-full p-2 py-6 bg-white border border-black lg:p-3"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-8 mt-8 h-28">
              <button
                type="submit"
                className="w-full px-6 lg:py-3  lg:mt-6  bg-orange-600 hover:bg-orange-700 rounded-[13px] justify-center items-center gap-2 flex"
              >
                <div className="text-white lg:text-base text-4xl lg:p-0 p-2 font-normal font-['Poppins'] leading-normal">
                  login
                </div>
              </button>
              <button className="w-full px-6 lg:py-3 hover:bg-gray-100 py-1 rounded-[13px] border border-black justify-center items-center gap-3 flex">
                <div className="relative w-6 h-6" />
                <div className="text-black lg:text-base  text-4xl font-normal font-['Poppins'] whitespace-nowrap leading-normal">
                  login with Google
                </div>
              </button>
            </div>
            <div className="justify-start items-center lg:mt-3 lg:gap-[5px] flex flex-col lg:flex-row py-2">
              <p className="text-center text-black lg:text-base text-2xl whitespace-nowrap  font-normal font-['Poppins'] lg:leading-normal">
                Already have an account?
              </p>
              <div className="relative block group">
                <button
                  onClick={onSignUpClick}
                  className="text-center text-black lg:text-base text-2xl lg:font-normal font-['Poppins'] leading-normal"
                >
                  Sign Up
                </button>
                <span className="h-[2px] bg-black absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
