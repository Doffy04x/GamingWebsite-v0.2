import React, { useState } from "react";
import { navigate } from "gatsby";
import firebase from "gatsby-plugin-firebase";
import backgroundImage from "../images/c.png";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password);

      console.log("User signed up successfully:", result.user);
      setSuccessMessage("Signed up successfully. Validation email sent.");
      setError(null);
      sendValidationEmail(result.user);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error.message);
      if (error.code === "auth/email-already-in-use") {
        setError("Email already in use.");
      } else {
        setError("Error signing up. Please try again.");
      }
      setSuccessMessage(null);
    }
  };

  const sendValidationEmail = (user) => {
    user.sendEmailVerification().then(() => {
      console.log("Validation email sent.");
    }).catch((error) => {
      console.error("Error sending validation email:", error.message);
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem",
      color: "black",
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
      boxSizing: "border-box",
      height: "32px",
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
    successMessage: {
      color: "green",
    },
  };


  return (
    <div style={styles.container}>
      {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
      <h1 style={styles.title}>Sign Up</h1>
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
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
          <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
        </div>
        <div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </div>
      </form>
      {error && <p style={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default SignUpPage;
