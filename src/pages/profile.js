import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase"; // Adjust this based on your actual Firebase import

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data upon component mount
    const fetchUserData = async () => {
      try {
        const currentUser = firebase.auth().currentUser; // Get the current user
        if (currentUser) {
          setUser(currentUser); // Set user state with the fetched user data
        } else {
          setUser(null);
        }
      } catch (error) {
        // Handle error while fetching user data
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          {/* Display other user details here */}
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
