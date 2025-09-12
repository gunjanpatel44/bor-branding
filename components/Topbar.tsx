'use client'

import company from '@/config/company.json'
import Marquee from 'react-fast-marquee'

const TopBar = () => {
  if (!company.announcement) return null

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-md">
      <Marquee gradient={false} speed={100} loop={0} pauseOnHover={true}>
        <p className="text-gray-200 text-center font-sans p-1">{company.announcement}</p>
      </Marquee>
    </div>
  )
}

export default TopBar
