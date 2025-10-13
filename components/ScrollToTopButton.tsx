'use client'

import { useEffect, useState } from 'react'
import { FaHandPointUp } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Function to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Function to toggle button visibility
  const toggleVisibility = () => {
    if (window.scrollY > 20) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      onClick={handleScrollToTop}
      title="Go to top"
      className={`fixed bottom-5 right-7 z-50 p-4 rounded-lg text-white text-xl transition-all duration-200 ease-in-out ${
        isVisible
          ? 'visible bg-[var(--primary)] hover:bg-[var(--secondary)]'
          : 'invisible bg-transparent'
      }`}
      aria-label="Scroll to top"
    >
      <FaHandPointUp aria-hidden="true" />
    </button>
  )
}

export default ScrollToTopButton
