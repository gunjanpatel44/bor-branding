import { ReactNode } from 'react'

type ProductCardGradientProps = {
  theme?: 'nature' | 'mythology' | 'nostalgia'
  children: ReactNode
  className?: string
}

export const ProductCardGradient = ({
  theme = 'nature',
  children,
  className = 'p-4 rounded-2xl border border-dark-700',
}: ProductCardGradientProps) => {
  const gradientClasses = {
    nature: 'bg-nature-gradient',
    mythology: 'bg-mythology-gradient',
    nostalgia: 'bg-nostalgia-gradient',
  }

  return (
    <div className={`relative overflow-hidden box- ${className}`}>
      {/* Base card background */}
      <div className="absolute inset-0 bg-dark-800 rounded-2xl" />
      {/* Theme gradient overlay */}
      <div className={`absolute inset-0 ${gradientClasses[theme]} opacity-5 rounded-2xl`} />
      {/* Hover effect */}
      <div className="absolute inset-0 bg-card-hover opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
