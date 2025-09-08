'use client'

import company from '@/config/company.json'
import Logo from '@/public/logo/bor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BiCart, BiMenu } from 'react-icons/bi'
import { CgClose } from 'react-icons/cg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-brand text-brand-900 border-b sticky top-0 z-50">
      <div className="px-6">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="flex sm:hidden text-2xl">
            <BiMenu />
          </button>
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <Image src={Logo} alt={company.name} className="size-10 w-auto" />
            <p className="font-times text-2xl hidden sm:flex">BLCKORACK</p>
          </Link>
          {/* Mobile Cart Icon */}
          <Link className="flex sm:hidden items-center gap-2 text-2xl" href="/">
            <BiCart />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center space-x-8">
            <Link href="/" className="transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="transition-colors">
              About us
            </Link>
            <Link href="/about-us" className="transition-colors">
              Login
            </Link>
          </nav>
          {/* Desktop Cart */}
          <Link className="hidden sm:flex items-center gap-2 text-2xl" href="/">
            <BiCart />
          </Link>
        </div>
      </div>
      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-brand-200 shadow-lg transform transition-transform duration-300 z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl text-gray-600"
        >
          <CgClose />
        </button>
        {/* Sidebar Menu */}
        <div className="flex flex-col mt-16 space-y-6 px-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-dark-900 font-medium">
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className="text-brand-900 font-medium"
          >
            About us
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-dark-900 font-medium"
          >
            Login
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}
    </header>
  )
}

export default Header
