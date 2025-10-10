'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  endDate: string // e.g.,  "2025-10-13T12:39:00+05:30" (ISO format)
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(0)
  useEffect(() => {
    const endTime = new Date(endDate).getTime()
    const updateTimer = () => {
      const now = Date.now()
      const remaining = endTime - now
      setTimeLeft(remaining > 0 ? remaining : 0)
    }
    updateTimer() // run once immediately
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [endDate])

  const formatTime = (ms: number) => {
    if (ms <= 0) return '00:00:00'
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full bg-red-700 text-white text-center py-2 font-semibold tracking-wide text-sm md:text-base flex justify-center items-center gap-2">
      {timeLeft > 0 ? (
        <>
          <span className="uppercase">🔥 Sale Ends In</span>
          <span className="bg-black/30 px-3 py-1 rounded-md font-mono">{formatTime(timeLeft)}</span>
        </>
      ) : (
        <span className="uppercase">⏰ Sale Ended</span>
      )}
    </div>
  )
}
