'use client'

import COMPANY from '@/config/company.json'
import Logo from '@/public/logo/bor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineWhatsApp } from 'react-icons/ai'
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
            <Image src={Logo} alt={COMPANY.name} className="size-10 w-auto" />
            <p className="font-times text-2xl hidden sm:flex">BLCKORACK</p>
          </Link>
          {/* Mobile Cart */}
          <Link className="flex sm:hidden items-center gap-2 text-2xl" href="/">
            <BiCart />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-brand-600 transition-colors">
              About us
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
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header in Sidebar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <Link className="flex items-center gap-2" href="/" onClick={() => setIsOpen(false)}>
            <Image src={Logo} alt={COMPANY.name} className="size-10 w-auto" />
            <p className="font-times text-lg font-semibold text-gray-800">BLCKORACK</p>
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-600">
            <CgClose />
          </button>
        </div>
        {/* Menu Links */}
        <div className="flex flex-col px-6 py-6 space-y-5 text-lg font-medium text-gray-800">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-brand-600">
            Home
          </Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="hover:text-brand-600">
            About us
          </Link>
        </div>
        {/* Social Links */}
        <div className="absolute bottom-0 w-full px-6 py-5 border-t border-gray-200">
          <ul className="flex justify-center gap-8 text-3xl text-gray-700">
            <li>
              <Link href={COMPANY.instagramLink} target="_blank">
                <AiFillInstagram className="hover:text-pink-500 transition-colors" />
              </Link>
            </li>
            <li>
              <Link href={COMPANY.whatsappLink} target="_blank">
                <AiOutlineWhatsApp className="hover:text-green-500 transition-colors" />
              </Link>
            </li>
            <li>
              <Link href={COMPANY.youtubeLink} target="_blank">
                <AiFillYoutube className="hover:text-red-500 transition-colors" />
              </Link>
            </li>
          </ul>
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
