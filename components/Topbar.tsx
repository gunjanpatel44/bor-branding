'use client'
import company from '@/config/company.json'

const TopBar = () => {
  if (!company.announcement) return null

  return (
    <div className="w-full inset-0 bg-gradient-to-r from-success-200 to-success-500 text-center text-gray-700 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee py-2 text-sm font-medium">
        {company.announcement}
      </div>
    </div>
  )
}

export default TopBar
