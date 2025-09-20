'use client'

import COMPANY from '@/config/company.json'
import Logo from '@/public/logo/bor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { useWindowScroll } from 'react-use'
import TopBar from './Topbar'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const headerRef = useRef<HTMLElement>(null)

  const { y } = useWindowScroll()

  useEffect(() => {
    // Desktop: always show
    if (window.innerWidth >= 768) {
      setIsVisible(true)
      return
    }
    const headerHeight = headerRef.current?.offsetHeight || 70
    if (y > lastScrollY.current && y > headerHeight) {
      // scrolling down
      setIsVisible(false)
    } else {
      // scrolling up
      setIsVisible(true)
    }
    lastScrollY.current = y
  }, [y])

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
        className={`bg-brand text-brand-900 border-b border-gray-800/50 sticky top-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar />
        <div className="container mx-auto px-4">
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
              <Image src={Logo} alt={COMPANY.name} className="size-10 w-auto" />
              <span className="text-2xl hidden sm:block font-times uppercase">{COMPANY.name}</span>
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 font-medium">
              <Link href="/" className="hover:text-gray-400 transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="hover:text-gray-400 transition-colors">
                About
              </Link>
              <Link href="/shop" className="hover:text-gray-400 transition-colors">
                Shop
              </Link>
            </nav>
            {/* Cart */}
            <div className="flex items-center">
              <Link
                href="/cart"
                className="flex items-center gap-2 text-2xl hover:text-gray-400 transition-colors"
                aria-label="Cart"
              >
                <BiShoppingBag size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Sidebar Drawer */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-8rem)] w-full text-brand-900 bg-brand/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-30 md:hidden
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Menu Links */}
          <div className="flex flex-col justify-center items-center flex-1 text-2xl space-y-8 font-semibold">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </div>
          {/* Social Links */}
          <div className="w-full p-6">
            <ul className="flex justify-center gap-6 text-3xl">
              <li>
                <Link
                  href={COMPANY.instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <AiFillInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href={COMPANY.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                >
                  <AiFillYoutube />
                </Link>
              </li>
              <li>
                <Link
                  href={COMPANY.whatsappLink}
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
