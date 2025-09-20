'use client'

import { useState, useEffect, useMemo } from 'react'
import company from '@/config/company.json'

const TopBar = () => {
  const announcements = useMemo(() => company.announcements || [], [])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (announcements.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length)
    }, 4000) // every 4s
    return () => clearInterval(interval)
  }, [announcements])

  if (announcements.length === 0) return null

  return (
    <div className="relative h-7 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md">
      {announcements.map((msg, i) => (
        <p
          key={i}
          className={`absolute inset-0 flex items-center justify-center text-gray-200 text-sm font-sans transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {msg}
        </p>
      ))}
    </div>
  )
}

export default TopBar
