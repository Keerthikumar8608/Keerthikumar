
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

const MechanicalParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Optimized mechanical particles loaded", container);
  }, []);

  // Detect if device is mobile for performance optimization
  const isMobile = window.innerWidth < 768;

  return (
    <Particles
      id="optimized-mechanical-particles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute inset-0 z-0"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: isMobile ? 30 : 60, // Reduced FPS for mobile
        interactivity: {
          events: {
            onClick: {
              enable: !isMobile, // Disable click events on mobile
              mode: "push",
            },
            onHover: {
              enable: !isMobile, // Disable hover effects on mobile
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: isMobile ? 80 : 120,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: ["#00FFFF", "#FF2D95", "#E5E5E5"],
          },
          links: {
            color: "#00FFFF",
            distance: isMobile ? 80 : 100,
            enable: true,
            opacity: isMobile ? 0.1 : 0.15,
            width: 1,
            triangles: {
              enable: false, // Disabled for performance
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: isMobile ? 0.5 : 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: isMobile ? 2000 : 1200,
            },
            value: isMobile ? 15 : 25, // Significantly reduced particle count
          },
          opacity: {
            value: isMobile ? 0.3 : 0.4,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle", // Simplified to circle only for performance
          },
          size: {
            value: { min: 1, max: isMobile ? 3 : 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            animation: {
              enable: !isMobile, // Disable rotation animation on mobile
              speed: 6,
              sync: false,
            },
          },
          stroke: {
            width: 0.5,
            color: "#00FFFF",
          },
        },
        detectRetina: true,
        motion: {
          disable: false,
          reduce: {
            factor: isMobile ? 8 : 4,
            value: true,
          },
        },
      }}
    />
  );
};

export default MechanicalParticles;
