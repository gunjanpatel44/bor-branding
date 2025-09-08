type GradientButtonVariant = 'primary' | 'secondary' | 'accent'

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GradientButtonVariant
  className?: string
  children: React.ReactNode
}

export const GradientButton = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: GradientButtonProps) => {
  const variants: Record<GradientButtonVariant, string> = {
    primary: 'bg-btn-brand hover:shadow-glow-nature',
    secondary: 'bg-btn-secondary hover:shadow-brand-md',
    accent: 'bg-btn-accent hover:shadow-mythology-md',
  }

  return (
    <button
      className={`${variants[variant]} ${className} text-brand-100 font-medium px-6 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group cursor-pointer`}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-gradient-x transition-opacity duration-300" />
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
