'use client'

import React, { useEffect, useState } from 'react'

interface IStars {
  top: string
  left: string
  duration: string
  delay: string
  dx: string
  dy: string
}

// StarryBackground renders moving stars and sparkling stars as a background overlay.
export const StarryBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [stars, setStars] = useState<IStars[]>([])

  useEffect(() => {
    setMounted(true)
    // Only generate stars on the client
    const numStars = 50
    const newStars = Array.from({ length: numStars }).map(() => {
      const top = Math.random() * 100 + '%'
      const left = Math.random() * 100 + '%'
      const duration = 6 + Math.random() * 10 + 's'
      const delay = Math.random() * 5 + 's'
      // Clamp movement to -40vw to +40vw and -40vh to +40vh
      const dx = ((Math.random() - 0.5) * 80).toFixed(2) + 'vw'
      const dy = ((Math.random() - 0.5) * 80).toFixed(2) + 'vh'
      return { top, left, duration, delay, dx, dy }
    })
    setStars(newStars)
  }, [])

  // Only render on client to avoid hydration mismatch
  if (!mounted) return null

  return (
    <>
      {/* Moving Stars */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {stars.map((star, idx) => (
          <div
            key={idx}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80 pointer-events-none animate-[star-move_10s_linear_infinite]"
            style={{
              top: star.top,
              left: star.left,
              animationDuration: star.duration,
              animationDelay: star.delay,
              // Animate to dx/dy using CSS vars
              ['--x' as string]: star.dx,
              ['--y' as string]: star.dy,
            }}
          />
        ))}
      </div>
      {/* Sparkling + Large Sparkles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Sparkles */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-[5px] h-[5px] bg-white/90 rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.7)]"
            style={sparkleStyle(i)}
          />
        ))}
        {/* Large Sparkles */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={`large-sparkle-${i}`}
            className="absolute w-[10px] h-[10px] bg-white/90"
            style={{
              ...largeSparkleStyle(i),
              clipPath:
                'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)',
              transform: 'rotate(45deg)',
              boxShadow: '0 0 16px 4px rgba(255,255,255,0.7)',
            }}
          />
        ))}
      </div>
    </>
  )
}
// Sparkle positions and animation delays
function sparkleStyle(i: number): React.CSSProperties {
  const positions = [
    { top: '15%', left: '20%', delay: '0s', dur: '2s' },
    { top: '25%', right: '25%', delay: '0.5s', dur: '2.5s' },
    { top: '35%', left: '40%', delay: '1s', dur: '1.8s' },
    { top: '45%', right: '30%', delay: '1.5s', dur: '2.2s' },
    { top: '55%', left: '25%', delay: '0.8s', dur: '3s' },
    { bottom: '25%', right: '35%', delay: '0.3s', dur: '2.7s' },
    { top: '70%', left: '50%', delay: '1.2s', dur: '3s' },
    { top: '80%', right: '20%', delay: '1.5s', dur: '2.8s' },
    { top: '40%', left: '10%', delay: '0.6s', dur: '2.4s' },
    { bottom: '15%', left: '40%', delay: '2s', dur: '2.6s' },
  ]
  const pos = positions[i - 1] || {}
  return {
    ...pos,
    animation: `sparkle-twinkle ${pos.dur || '2s'} ease-in-out infinite ${pos.delay || '0s'}`,
    pointerEvents: 'none',
  }
}

function largeSparkleStyle(i: number): React.CSSProperties {
  const positions = [
    { top: '20%', right: '20%', delay: '0s', dur: '4s' },
    { bottom: '20%', left: '15%', delay: '1s', dur: '3.5s' },
    { top: '60%', left: '25%', delay: '2s', dur: '4.5s' },
    { top: '75%', right: '25%', delay: '3s', dur: '5s' },
  ]
  const pos = positions[i - 1] || {}
  return {
    ...pos,
    animation: `large-sparkle-shine ${pos.dur || '4s'} ease-in-out infinite ${pos.delay || '0s'}`,
    pointerEvents: 'none',
  }
}
