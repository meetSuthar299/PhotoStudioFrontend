import React, { useCallback } from 'react';
import { Particles } from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

function StarsBackground() {
  const initializeParticleEngine = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 800,
            density: {
              enable: true,
              value_area: 200,
            },
          },
          color: {
            value: '#FFFEF9',
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: true,
              speed: 0.75,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 1.25,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              size_min: 0,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        fullScreen: false,
        retina_detect: true,
      }}
      init={initializeParticleEngine}
      className="mask-inline-faded pointer-events-none absolute inset-0 -z-10"
    />
  );
}

export default StarsBackground;