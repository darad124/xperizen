import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged, setPersistence, browserSessionPersistence } from "firebase/auth";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add this line

  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in.
            const db = getDatabase();
            const userRef = ref(db, 'users/' + user.uid);
            onValue(userRef, (snapshot) => {
              const data = snapshot.val();
              setUser(data);
            });
          } else {
            // No user is signed in.
            setUser(null);
          }
          setLoading(false); // Add this line
        });
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Add this line
  }

  const orders = [
    { id: '1', item: 'Item 1', price: '$10' },
    { id: '2', item: 'Item 2', price: '$20' },
    { id: '3', item: 'Item 3', price: '$30' },
    { id: '4', item: 'Item 4', price: '$40' },
    // Add more orders here
  ];

  return (
    <div className="container px-4 mx-auto text-white">
      <h1 className="my-4 font-bold text-center text-7xl">Profile Page</h1>
      {user && (
        <>
          <h2 className="text-xl font-semibold text-white">{user.username}</h2>
          <p className="text-white">{user.email}</p>
  
          <h3 className="my-4 text-3xl font-semibold">Order Summary</h3>
          {orders.map(order => (
            <div key={order.id} className="p-2 my-2 border">
              <p>{order.item}: {order.price}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
