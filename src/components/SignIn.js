import React, { useState } from "react";
import { navigate } from "gatsby";
import firebase from "gatsby-plugin-firebase";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password);

      console.log("User logged in successfully:", result.user);
      setSuccessMessage("Signed in successfully.");
      setError(null);
      navigate("/games");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Invalid email or password.");
      setSuccessMessage(null);
    }
  };

  const handleSignUp = () => {
    navigate("/signup"); // Redirect to the SignupPage or desired path
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      color: "white",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginRight: "2rem",
    },
    label: {
      marginBottom: "0.5rem",
      color: "white",
    },
    input: {
      padding: "8px",
      marginBottom: "1rem",
      width: "100%",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#D80027",
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
    },
    errorMessage: {
      color: "red",
    },
    signUpButton: {
      marginLeft: "10px",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#333", // Change the color to your preference
      color: "white",
      fontSize: "1rem",
      cursor: "pointer",
    },
    successMessage: {
      color: "green",
    },
    // Rest of your styles...
  };

  return (
    <div style={styles.container}>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <h1 style={styles.title}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Login
          </button>
          <button type="button" style={styles.signUpButton} onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        {/* Error messages */}
      </form>
    </div>
  );
};

export default SignInPage;
