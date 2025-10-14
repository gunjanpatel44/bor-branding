import GradientLink from '@/components/GradientLink'

const NotFound = () => {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-4xl mx-auto">
        {/* T-shirt Mockup Section */}
        <div className="mb-12">
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-brand-900-800 rounded-lg flex items-center justify-center border border-gray-800 shadow-2xl shadow-gray-900/50 relative overflow-hidden">
            <span className="text-8xl md:text-9xl font-black text-gray-700 font-mono tracking-wider animate-pulse">
              404
            </span>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-4 left-4 text-xs text-gray-500 uppercase">
              Blckorack Error Series
            </div>
          </div>
        </div>
        {/* Content Section */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest mb-4">
          This Page Cracked
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-8">
          You found a glitch in our universe. A flaw in the design. We think that&apos;s worth
          celebrating. This page may be gone, but you&apos;ve discovered something exclusive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GradientLink href="/collection" variant="primary">
            Own The Error
          </GradientLink>
          <GradientLink href="/" variant="secondary">
            Return to Safety
          </GradientLink>
        </div>
      </div>
    </main>
  )
}

export default NotFound
