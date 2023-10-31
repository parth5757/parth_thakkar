// RocketIntro.js
import React, { useEffect } from 'react';
import './RocketIntro.css'; // Import your CSS here

function RocketIntro({ onIntroComplete }) {
  useEffect(() => {
    const rocket = document.querySelector('.rocket');
    const rocketFire = document.querySelector('.fire');

    // Rocket animation code
    const animateRocket = () => {
      const animationDuration = 5; // 5 seconds
      const start = performance.now();

      function step(timestamp) {
        const elapsed = (timestamp - start) / 1000; // Convert to seconds

        // Example animation: Move the rocket upwards
        rocket.style.transform = `translateY(-${elapsed * 100}px)`; // Adjust the value for speed

        if (elapsed < animationDuration) {
          requestAnimationFrame(step);
        } else {
          // Animation completed
          onIntroComplete();
        }
      }

      requestAnimationFrame(step);
    };

    // Start the rocket animation
    animateRocket();

    // Automatically redirect after 5 seconds
    setTimeout(() => {
      onIntroComplete();
    }, 5000); // 5000 milliseconds = 5 seconds
  }, [onIntroComplete]);

  return (
    <div>
      <div className="fire-wrapper">
        <img className="fire" src="https://www.stivaliserna.com/assets/rocket/fire.svg" alt="Rocket fire" />
      </div>
      <div className="rocket">🚀</div>
    </div>
  );
}

export default RocketIntro;
