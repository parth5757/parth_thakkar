// import React, { useEffect } from 'react';

// function Sun({ color }) {
//   useEffect(() => {
//     // Create the Sun
//     const container = document.querySelector('.main');
//     const sun = document.createElement('div');
//     sun.classList.add('sun');
//     sun.style.background = `radial-gradient(circle, ${color} 10%, transparent 10.5%)`;

//     container.appendChild(sun);

//     return () => {
//       // Cleanup if needed when the component is unmounted
//       container.removeChild(sun);
//     };
//   }, [color]);

//   return null; // This component doesn't render any visible content
// }

// export default Sun;


import React from 'react';
import './css/Sun.css'; // Import the CSS file from the 'css' directory

function Sun({ color }) {
  return (
    <div className="sun-container">
      <div className="sun" >
        <div className="glow">parth</div>
      </div>
    </div>
  );
}

export default Sun;
