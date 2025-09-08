type GradientLinkVariant = 'primary' | 'secondary' | 'accent'

interface GradientLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GradientLinkVariant
  className?: string
  children: React.ReactNode
  href: string
}

const GradientLink = ({
  variant = 'primary',
  children,
  className = '',
  href,
}: GradientLinkProps) => {
  const variants: Record<GradientLinkVariant, string> = {
    primary: 'bg-btn-brand hover:shadow-glow-nature',
    secondary: 'bg-btn-secondary hover:shadow-brand-md',
    accent: 'bg-btn-accent hover:shadow-mythology-md',
  }

  return (
    <a
      href={href}
      className={`${variants[variant]} ${className} text-brand-100 font-medium px-6 py-3 rounded-xl transition-all duration-300 transform -translate-y-1 relative overflow-hidden group cursor-pointer inline-block`}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-gradient-x transition-opacity duration-300" />
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </a>
  )
}

export default GradientLink
