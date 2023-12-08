import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase"; // Adjust this based on your actual Firebase import

const Settings = () => {
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

  const handleUpdateProfile = async (newData) => {
    try {
      await firebase.auth().currentUser.updateProfile(newData);
      setUser({ ...user, ...newData }); // Update user state with new data
    } catch (error) {
      // Handle error while updating profile
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Settings</h1>
          <p>Email: {user.email}</p>
          {/* Display form fields for updating profile information */}
          <form onSubmit={(e) => {
            e.preventDefault();
            // Call handleUpdateProfile function with new data from form
          }}>
            {/* Example: Update display name */}
            <label>
              Display Name:
              <input
                type="text"
                value={user.displayName}
                onChange={(e) => {
                  setUser({ ...user, displayName: e.target.value });
                }}
              />
            </label>
            {/* Add other fields for updating profile information */}
            <button type="submit">Save Changes</button>
          </form>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Settings;
