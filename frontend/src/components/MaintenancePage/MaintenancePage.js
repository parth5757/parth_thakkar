// MaintenancePage.js

import React from 'react';
import './MaintenancePage.css'; // You can create a separate CSS file for styling

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <h1>Site Under Maintenance</h1>
      <p>We'll be back shortly.</p>
      
      {/* Social Media Icons */}
      <div className="social-icons">
        {/* Add your social media icons here */}
        {/* Example: */}
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.png" alt="LinkedIn" />
        </a>
        {/* Add similar links for other social media icons */}
      </div>
      
      {/* Chat Support */}
      <div className="chat-support">
        <button>Contact Support</button>
      </div>
    </div>
  );
}

export default MaintenancePage;
