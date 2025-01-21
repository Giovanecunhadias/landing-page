import { useState, useEffect } from 'react'

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window ?window.innerWidth: 0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { windowWidth }
}