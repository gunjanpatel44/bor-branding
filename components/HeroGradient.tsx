import { ReactNode } from 'react'

interface HeroGradientProps {
  children: ReactNode
  className?: string
}

export const HeroGradient = ({ children, className = '' }: HeroGradientProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-hero-overlay opacity-10 animate-float" />
      {/* Mesh pattern overlay */}
      <div
        className="absolute inset-0 bg-mesh-gradient opacity-5"
        style={{ backgroundSize: '40px 40px' }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
