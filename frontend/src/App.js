// // import React, { useEffect, useState } from 'react';
// import './App.css';
// // import axios from 'axios';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes
// // import About from './pages/About'; // Import your About page component

// function App() {

//   return (
//     <div className="main">
//       <h1>Under Maintenance</h1>
//       <p>We are currently performing maintenance. Please check back later.</p>
//     </div>
//   );

//   // const [message, setMessage] = useState('');

//   // useEffect(() => {
//   //   // Make an API request to the Django backend
//   //   axios.get('http://localhost:8000/api/hello/')
//   //     .then(response => {
//   //       setMessage(response.data.message);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // }, []); // Empty dependency array to run the effect once on component mount

//   // return (
//   //   // <Router>
//   //     <div className="App">
//   //       <header className="App-header">
//   //         <h1>Welcome to Parth Universe</h1>
//   //         <p>{message}</p>
//   //         {/* <Link to="/about">About</Link>
    
//   //         <Routes> Wrap Routes around Route components
//   //           <Route path="/about" element={<About />} />
//   //         </Routes> */}
//   //       </header>
//   //     </div>
//   //   // </Router>
//   // );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';
// import MaintenancePage from './MaintenancePage'; // Import the MaintenancePage component

// function App() {
//   const [message, setMessage] = useState('');
//   const [underMaintenance, setUnderMaintenance] = useState(false); // Add state for maintenance mode

//   useEffect(() => {
//     // Make an API request to check if the site is under maintenance
//     axios.get('http://localhost:8000/api/is-under-maintenance')
//       .then(response => {
//         const isUnderMaintenance = response.data.isUnderMaintenance;
//         setUnderMaintenance(isUnderMaintenance);

//         if (!isUnderMaintenance) {
//           // If not under maintenance, fetch the message
//           axios.get('http://localhost:8000/api/hello/')
//             .then(response => {
//               setMessage(response.data.message);
//             })
//             .catch(error => {
//               console.error('Error fetching data:', error);
//             });
//         }
//       })
//       .catch(error => {
//         console.error('Error checking maintenance status:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {underMaintenance ? (
//           // Display the maintenance page when under maintenance
//           <MaintenancePage />
//         ) : (
//           // Display the regular content when not under maintenance
//           <>
//             <h1>Welcome to My Universe</h1>
//             <p>{message}</p>
//           </>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // JavaScript code for creating stars
    const container = document.querySelector('.main');

    function createStar() {
      const star = document.createElement('div');
      star.classList.add('star');

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;

      container.appendChild(star);

      setTimeout(() => {
        star.remove();
        createStar();
      }, Math.random() * 2000);
    }

    for (let i = 0; i < 100; i++) {
      createStar();
    }

    // Create a planet
    const planet = document.createElement('div');
    planet.classList.add('planet');
    container.appendChild(planet);
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div className="main">
      <h1>Under Maintenance</h1>
      <p>We are currently performing maintenance. Please check back later.</p>
    </div>
  );
}

export default App;   