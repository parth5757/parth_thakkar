import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavScrollExample from './components/Navbar';
// import Sun from './components/Sun'

function App() {
  const [message, setMessage] = useState('');
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Fetch maintenance message and remaining time
    Promise.all([
      axios.get('http://127.0.0.1:8000/api/hello/'),
      axios.get('http://127.0.0.1:8000/api/time/'),
    ]).then(([messageResponse, timeResponse]) => {
      setMessage(messageResponse.data.message);
      setTimeRemaining(timeResponse.data.time_remaining);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
    

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
    

  }, []); // Empty dependency array to run the effect once on component mountm

  return (
    <div className="main">
      <NavScrollExample />   
      <div className="center">
        <h1>Under Maintenance Till</h1>
        <p class="time-remaining"><span id="remainingTime">{timeRemaining}</span></p>
        <p>We are currently performing maintenance. Please check back later.</p>
        <p>{message}</p>
      </div>

      p
      {/* Add the Sun Component here */}


      {/* <Sun /> */}
    </div>
  );
}

export default App;