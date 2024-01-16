import { useState, useEffect } from "react";
import ContactUs from "@/components/contact";
import { PaystackButton } from "react-paystack";
import { useAuthState } from "../src/firebase";
import { ref, get } from 'firebase/database';
import React, { useCallback } from 'react';
import { db } from '../src/firebase';
import { handlePaymentSuccess } from '../src/firebase';
import SignUpModal from "@/components/signUpModal";
import LoginModal from "@/components/loginModal";


const navLinks = [
 
  { text: "sign Up", modal: "signup" },
  { text: "login", modal: "login" },
];




const HomePage = () => {
  const user = useAuthState();
  const [modal, setModal] = useState(null);
  
  const [referenceId, setReferenceId] = useState(null); // State variable for storing the reference ID

  const email = user?.email;

  const config = {
    reference: new Date().getTime(),
    email: email,
    amount: 300000,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
  };

  const handleSuccess = (reference) => {
    console.log('Reference:', reference);
    console.log('payment has been made succesfully');
    
    
    setReferenceId(reference); // Store the reference ID in state
  };
 



  const sendEmail = useCallback(() => {
    if (user) {
      const userRef = ref(db, 'users/' + user.uid);
      console.log('User reference:', userRef);
  
      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log('Snapshot:', snapshot.val());
            const username = snapshot.val().username;
            console.log('Username:', username);
  
            const emailData = {
              sender: {
                name: "Xperizen",
                email: "xperizen@gmail.com"
              },
              to: [{
                email: user.email,
                name: username
              }],
              subject: "Your ticket for the meeting",
              htmlContent: `
      
    `
  
            };
            console.log('Email data:', emailData);
  
            return fetch('/api/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(emailData),
            });
          } else {
            console.error('Snapshot does not exist');
          }
        })
        .then((response) => {
          console.log('Fetch response:', response);
          return response.json();
        })
        .then((responseBody) => {
          console.log('Response body:', responseBody);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [user]); // include any dependencies of sendEmail here
  

  
useEffect(() => {
  if (referenceId) {
    console.log('Reference ID:', referenceId);
    
    // Call the imported handlePaymentSuccess function
    handlePaymentSuccess(user);

    // Call sendEmail function
    sendEmail();
  }
}, [referenceId, user, sendEmail]); // now user and sendEmail are dependencies

  

  const handleClose = () => {
    console.log("closed");
    // You can add more logic here when the payment is closed
  };

  const handleSignupClick = () => {
    setModal("signup");

    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden";
    
  };
  

  const handleBuyTicketClick = () => {
   

    const handler = window.PaystackPop.setup({
      ...config,
      callback: handleSuccess,
      onClose: handleClose,
    });
    handler.openIframe();
  };

  return (
    <div>
  <div
    className="hidden md:flex bg-no-repeat bg-cover md:bg-contain h-[1100px] bg-black bg-opacity-30"
    style={{
      backgroundImage: "url('/The meating final final.png')",
    }}
  ></div>
  <div
    className="h-[600px] md:hidden bg-cover bg-no-repeat bg-black bg-opacity-30"
    style={{
      backgroundImage: "url('/The meating final mobile.png')",
    }}
  ></div>

  <div className="flex justify-center mt-10">
    {user ? (
      <PaystackButton
        className="px-4 py-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-700"
        {...config}
        onSuccess={handleSuccess}
        onClose={handleClose}
        text="Buy Ticket"
        onClick={handleBuyTicketClick}
      />
    ) : (
      <div>
         <SignUpModal
                  isOpen={modal === "signup"}
                  onRequestClose={() => {
                    setModal("");
                    document.body.style.overflow = "auto"; // Allow background scrolling
                  }}
                  onLoginClick={() => {
                    setModal("login");
                    document.body.style.overflow = "hidden"; // Prevent background scrolling
                  }}
                />

              <LoginModal
                  isOpen={modal === "login"}
                  onRequestClose={() => {
                    setModal("");
                    document.body.style.overflow = "auto"; // Allow background scrolling
                  }}
                  onSignUpClick={() => {
                    setModal("signup");
                    document.body.style.overflow = "hidden"; // Prevent background scrolling
                  }}
                />

                
      <button
        className="px-4 py-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-700"
        onClick={handleSignupClick}
      >
        Buy Ticket
      </button>
      </div>
    )}
  </div>

  {/* Consider passing className as a prop to ContactUs component if needed */}
  <ContactUs className="mt-8" />
</div>

  );
};

export default HomePage;
