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
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password);

      console.log("User logged in successfully:", result.user);
      setSuccessMessage("Signed in successfully.");
      setError(null);
      navigate("/games");
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Invalid email or password. Try To reset your password");
      setSuccessMessage(null);
    }
  };

  const handleSignUp = () => {
    navigate("/SignUp"); // Redirect to the SignupPage or desired path
  };

  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(formData.email);
      setSuccessMessage("Password reset email sent.");
      setError(null);
    } catch (error) {
      console.error("Error sending reset password email:", error.message);
      setError("Error sending reset password email.");
      setSuccessMessage(null);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem", color: "black" }}>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginRight: "2rem" }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" style={{ marginBottom: "0.5rem", color: "white" }}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: "8px", marginBottom: "1rem", width: "100%" }} />
        </div>
        <div>
          <label htmlFor="password" style={{ marginBottom: "0.5rem", color: "white" }}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ padding: "8px", marginBottom: "1rem", width: "100%" }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer" }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <div>
          <button type="submit" style={{ padding: "8px 16px", border: "none", borderRadius: "4px", backgroundColor: "#D80027", color: "white", fontSize: "1rem", cursor: "pointer" }}>Login</button>
          <button type="button" style={{ marginLeft: "10px", padding: "8px 16px", border: "none", borderRadius: "4px", backgroundColor: "#333", color: "white", fontSize: "1rem", cursor: "pointer" }} onClick={handleSignUp}>Sign Up</button>
          <button type="button" style={{ marginLeft: "10px", padding: "8px 16px", border: "none", borderRadius: "4px", backgroundColor: "#333", color: "white", fontSize: "1rem", cursor: "pointer" }} onClick={handleResetPassword}>Reset Password</button>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default SignInPage;
