import React from 'react';
import MyProfileImage from '../src/image';

const Header = () => {
  return (
    <header className="container">
      <div className="info">
        <h1>Your Name</h1>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </div>
      <div className="image">
        {/* Replace with your image */}
        <img src={MyProfileImage} alt="Profile" />
      </div>
    </header>
  );
};

export default Header;