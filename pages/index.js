import { useState, useEffect } from "react";
import ContactUs from "@/components/contact";
import { PaystackButton } from "react-paystack";
import { useAuthState } from "../src/firebase";
import { ref, get } from 'firebase/database';
import React, { useCallback } from 'react';
import { db } from '../src/firebase';






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
  <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px; padding: 20px; background-color: #000;">
    <h1 style="color: #FFA500; text-align: center;">Your Ticket Confirmation for the Meating Event, ${username}!</h1>
    <img src="https://drive.google.com/uc?export=download&id=1ODoTVAgaACtO2D2HzpfbkkWocTpWY2sx" alt="Meating Event banner" style="width:100%;height:auto;">
    <div style="background-color: #333; padding: 20px; margin: 20px 0;">
      <h2 style="color: #FFA500;">Event Details</h2>
      <ul style="list-style-type: none; padding: 0; color: #fff;">
        <li><strong>Date:</strong> Friday, Feb 2, 2024</li>
        <li><strong>Time:</strong> 5pm</li>
        <li><strong>About:</strong> Get ready for an evening of savoring different types of meat, accompanied by a live band. It's not just a meeting, it's a "meating"!</li>
      </ul>
    </div>
    <p style="color: #fff;">This email confirms your ticket purchase for the event. Your reference ID is ${userRef.key}.</p>
    <p style="color: #fff;">We're excited to have you join us! If you have any questions or need further information, please let us know.</p>
    <p style="color: #fff;">Looking forward to seeing you there!</p>
    <p style="color: #888;">Best,</p>
    <p style="color: #888;">The Xperizen Team</p>
    <p style="color: #888; text-align: center;"><img src="https://drive.google.com/uc?export=download&id=1rBCHNIdekXnV00MSQjiOD4VO-M6MVpRn" alt="Xperizen Logo" style="width:100px;height:auto;"></p>
  </div>
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

  const handleLoginClick = () => {
    alert("Please sign in or sign up first");
    
  };
  

  const handleBuyTicketClick = () => {
    if (!user) {
      alert("Please sign in or sign up first");
      // Optionally, you can open the login modal here
      return;
    }

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
      <button
        className="px-4 py-2 font-bold text-white bg-orange-600 rounded hover:bg-orange-700"
        onClick={handleLoginClick}
      >
        Buy Ticket
      </button>
    )}
  </div>

  {/* Consider passing className as a prop to ContactUs component if needed */}
  <ContactUs className="mt-8" />
</div>

  );
};

export default HomePage;
