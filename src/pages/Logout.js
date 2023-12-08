import React from "react";
import firebase from "gatsby-plugin-firebase"; // Adjust this based on your actual Firebase import
import { navigate } from "gatsby";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut(); // Firebase sign out
      navigate("/"); // Redirect to the home page after logout
    } catch (error) {
      // Handle logout error
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
