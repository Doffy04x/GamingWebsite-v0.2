import React from 'react';
import { navigate } from 'gatsby';

const handleProfileClick = () => {
  navigate('/Profile');
};

const ProfileIcon = ({ onClick }) => {
  const iconStyles = {
    position: 'absolute',
    top: '30px',
    right: '40px',
    cursor: 'pointer',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white" 
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={iconStyles}
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M5 20h14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    </svg>
  );
};

export default ProfileIcon;
