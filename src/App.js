
import './App.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from 'react';
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';


function App() {
   const particlesInit = async (main) => {
    console.log(main);
      await loadFull(main);
  };
    const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App"> 
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "linear-gradient(89deg, #2C3E50 0%, #4CA1AF 100%)"
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm />
   {/* {
        
        <FaceRecognition />}*/}

    </div>
  );
}

export default App;
