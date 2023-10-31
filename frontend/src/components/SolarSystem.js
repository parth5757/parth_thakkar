// // import React, { useEffect } from 'react';

// // function SolarSystem() {
// //   useEffect(() => {
// //     // JavaScript code for creating the solar system animation
// //     const solarSystemData = [  // Define your solar system data
// //       { name: 'Sun', color: '#FDE528' },
// //       [
// //         { name: 'Mercury', color: '#C1B4AC' },
// //         { name: 'Venus', color: '#F2D299' },
// //         { name: 'Earth', color: '#05f' },
// //         [
// //           { name: 'Moon', color: '' }  // Example: Add Moon
// //         ],
// //         { name: 'Mars', color: '#E67E5A' },
// //         [
// //           { name: 'Phobos', color: '' },
// //           { name: 'Deimos', color: '' }
// //         ],
// //         { name: 'Jupiter', color: '#C5AA96' },
// //         [
// //           { name: 'Io', color: '' },
// //           { name: 'Europa', color: '' },
// //           { name: 'Ganymede', color: '' },
// //           { name: 'Callisto', color: '' }
// //         ],
// //         { name: 'Saturn', color: '#AF9D8E' },
// //         [
// //           { name: 'Mimas', color: '' },
// //           { name: 'Enceladus', color: '' },
// //           { name: 'Tethys', color: '' },
// //           { name: 'Dione', color: '' },
// //           { name: 'Rhea', color: '' },
// //           { name: 'Titan', color: '' },
// //           { name: 'Iapetus', color: '' }
// //         ],
// //         { name: 'Uranus', color: '#C2E8EA' },
// //         [
// //           { name: 'Miranda', color: '' },
// //           { name: 'Ariel', color: '' },
// //           { name: 'Umbriel', color: '' },
// //           { name: 'Titania', color: '' },
// //           { name: 'Oberon', color: '' }
// //         ],
// //         { name: 'Neptune', color: '#5C92F0' },
// //         [
// //           { name: 'Triton', color: '' }
// //         ]
// //       ]
// //     ];

// //     // Code to render the solar system here

// //   }, []);

// //   return (
// //     <div className="scene">
// //       {/* HTML structure for the solar system */}
// //     </div>
// //   );
// // }

// // export default SolarSystem;

// import React, { useEffect } from "react";
// import * as THREE from 'three';

// const SolarSystem = () => {
//   useEffect(() => {
//     // Set up your Three.js scene here 
//     const scene = new THREE.Scene();

//     // Crete a camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.querySelector('.scene').appendChild(renderer.domElement);

//     // Create the Sun
//     const subGeometry = new THREE.SphereGeometry(1, 32, 32);
//     const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
//     const sun = new THREE.Mesh(subGeometry, sunMaterial);
//     scene.add(sun);

//     // Create the Earth

//     const earthGeometry = new THREE.SphereGeometry(0.4, 32, 32);
//     const earthMaterial = new THREE.MeshBasicMaterial({color : 0x0000ff });
//     const earth = new THREE.Mesh(earthGeometry, earthMaterial);
//     earth.position.x = 3;
//     scene.add(earth);

//     // Create the Moon
//     const moonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
//     const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa});
//     const moon = new THREE.Mesh(moonGeometry, moonMaterial);
//     moon.position.x = 0.7;
//     earth.add(moon);
    
//     // Animation function 
//     const animate = () => {
//       requestAnimationFrame(animate);
      
//       // Rotate Earth
//       earth.rotation += 0.01;

//       // Rotate Moon

//       moon.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return (
//     <div className="scene"></div>
//   )
// }

// export default SolarSystem;


import React, { useEffect } from 'react';
import * as THREE from 'three';

const SolarSystem = () => {
  useEffect(() => {
    // Set up your Three.js scene here
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.scene').appendChild(renderer.domElement);

    // Create the Sun
    const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create the Earth
    const earthGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earth.position.x = 3; // Position Earth to the right of the Sun
    scene.add(earth);

    // Create the Moon
    const moonGeometry = new THREE.SphereGeometry(0.1, 32, 32);
    const moonMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.x = 0.7; // Position Moon to the right of the Earth
    earth.add(moon);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth
      earth.rotation.y += 0.01;

      // Rotate the Moon
      moon.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="scene"></div>
  );
};

export default SolarSystem;
