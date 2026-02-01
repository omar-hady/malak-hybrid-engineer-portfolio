'use client'

import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="mouse-glow"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
      }}
    />
  )
}

