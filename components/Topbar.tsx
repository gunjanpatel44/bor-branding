'use client'
import company from '@/config/company.json'

const TopBar = () => {
  if (!company.announcement) return null

  return (
    <div className="w-full bg-accent-600 text-center text-white overflow-hidden">
      <div className="whitespace-nowrap animate-marquee py-2 text-sm font-medium">
        {company.announcement}
      </div>
    </div>
  )
}

export default TopBar
