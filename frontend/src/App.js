// // import React, { useEffect, useState } from 'react';
// // import './App.css';
// // import axios from 'axios';

// // function App() {
// //   const [message, setMessage] = useState('');

// //   useEffect(() => {
// //     // Make an API request to the Django backend
// //     axios.get('/api/hello/')
// //       .then(response => {
// //         setMessage(response.data.message);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, []); // Empty dependency array to run the effect once on component mount

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h1>Welcome to My Universe</h1>
// //         <p>{message}</p>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import axios from 'axios';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Define your headers here
//     const headers = {
//       'Authorization': 'Bearer your_access_token',
//       'Content-Type': 'application/json', // Adjust as needed
//     };

//     // Make an API request to the Django backend with headers
//   //   axios.get('/api/hello/', { headers })
//   //     .then(response => {
//   //       setMessage(response.data.message);
//   //     })
//   //     .catch(error => {
//   //       console.error('Error fetching data:', error);
//   //     });
//   // }, []); // Empty dependency array to run the effect once on component mount

//     axios.get('/api/hello/')
//     .then(response => {
//       console.log('Response data:', response.data); // Log the response data
//       setMessage(response.data.message);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to My Universe</h1>
//         <p>{message}</p>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './pages/About'; // Import your About page component

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to the Django backend
    axios.get('http://localhost:8000/api/hello/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to parth Universe</h1>
        <p>{message}</p>
        <Link to="/about">About</Link>
        <Route path="/about" component={About} />
      </header>
    </div>
  );
}

export default App;


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
