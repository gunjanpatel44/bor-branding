'use client'

import company from '@/config/company.json'
import Logo from '@/public/logo/bor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from 'react-icons/ai'
import CountdownTimer from './CountDownTimer'
import TopBar from './Topbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header
        ref={headerRef}
        className={`bg-brand text-brand-900 border-b border-gray-800/50 sticky top-0 z-40 transition-transform duration-300 `}
      >
        {company.saleEndDate && new Date() < new Date(company.saleEndDate) ? (
          <CountdownTimer endDate={company.saleEndDate} />
        ) : (
          <TopBar />
        )}
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl z-50"
              aria-label="Toggle Menu"
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <AiOutlineMenu
                  className={`absolute transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <AiOutlineClose
                  className={`absolute transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                  }`}
                />
              </div>
            </button>
            {/* Logo */}
            <Link
              className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 md:static md:left-0 md:translate-x-0"
              href="/"
            >
              <Image src={Logo} alt={company.name} className="size-10 w-auto" />
              <span className="text-2xl hidden sm:block font-times uppercase">{company.name}</span>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium">
              <Link href="/" className="transition-colors">
                Home
              </Link>
              <Link href="/collection" className="transition-colors">
                Collection
              </Link>
              <Link href="/about-us" className="transition-colors">
                About us
              </Link>
              <Link href="/exchange-policy" className="transition-colors">
                Exchange Policy
              </Link>
            </nav>
            {/* Instagram */}
            <div className="flex justify-between items-center gap-2">
              <Link
                href={company.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
              >
                <AiOutlineInstagram className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-[calc(100vh-92px)] w-full text-brand-900 bg-brand/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-30 md:hidden
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Menu Links */}
          <div className="flex flex-col justify-center items-center flex-1 text-2xl space-y-8">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/collection" onClick={() => setIsOpen(false)}>
              Collection
            </Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              About us
            </Link>
            <Link href="/exchange-policy" onClick={() => setIsOpen(false)}>
              Exchange Policy
            </Link>
          </div>
          {/* Social Links */}
          <div className="w-full mb-12">
            <ul className="flex justify-center gap-6 text-3xl">
              <li>
                <Link
                  href={company.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <AiOutlineInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href={company.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <AiOutlineYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href={company.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <AiOutlineWhatsApp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
