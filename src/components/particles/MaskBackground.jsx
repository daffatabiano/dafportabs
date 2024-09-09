import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { optionsParticles } from './options';

function MaskBackground() {
  const containerRef = useRef(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef]
    ),
    options = useMemo(() => optionsParticles, []),
    lightTheme = () => {
      containerRef.current?.loadTheme('light');
    },
    darkTheme = () => {
      containerRef.current?.loadTheme('dark');
    };

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </div>
  );
}

export default MaskBackground;
