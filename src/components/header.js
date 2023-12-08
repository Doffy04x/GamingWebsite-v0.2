import * as React from "react";
import { navigate } from "gatsby";
import { Link } from 'gatsby';


const Header = () => {
  const handleLoginClick = () => {
    navigate("/SignIn"); 
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "5rem",
        padding: "0 1rem",
        color: "white",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginRight: "2rem",
        }}
      >
        DOFFY
      </div>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
<li style={{ marginRight: '1rem' }}>
        {/* Use Link to navigate to games.js */}
        <Link to="/games" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>
          Games
        </Link>
      </li>        <li style={{ marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>About Us</a></li>
        <li style={{ marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>Upcoming </a></li>
        <li style={{ marginRight: '1rem' }}><a href="#" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>Contact us</a></li>
        {/* Other navigation links */}
      </ul>

      <button
        onClick={handleLoginClick}
        style={{
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#D80027",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
