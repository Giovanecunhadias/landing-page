import { useState, useEffect } from 'react';

export function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState<number>(0); // Start with 0 or any default value

  useEffect(() => {

    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { windowHeight };
}
