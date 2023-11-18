import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useState, useEffect } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

export const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      return [user, null];
    } catch (error) {
      console.error(error);
      return [null, error];
    }
  };
  


  export const signUp = async (email, password, name) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Update the displayName field of the auth user
      await updateProfile(auth.currentUser, { displayName: name });
  
      // Store additional user information in the database
      await set(ref(db, 'users/' + user.uid), {
        username: name,
        email: email,
      });
  
      // Return the user information
      return user;
    } catch (error) {
      // Return the error
      return error;
    }
  };
  
  
  

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
};

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const dbRef = ref(db, 'users/' + authUser.uid);
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data && data.username) {
            setUser({ ...authUser, username: data.username });
          } else {
            setUser(authUser);
          }
        });
      } else {
        setUser(null);
      }
    });
  
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  

  return user;
};

export {
  app,
  db,
  auth,
  onAuthStateChanged,
};
