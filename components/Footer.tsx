import company from '@/config/company.json'
import Logo from '@/public/logo/bor-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <footer className="bg-brand text-gray-900 px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="flex h-fit items-center gap-2">
            <Link href="/">
              <Image src={Logo} alt={company.name} className="size-14" />
            </Link>
            <div className="flex flex-col items-center">
              <p className="font-times uppercase text-2xl">{company.name}</p>
              <p className="text-sm italic">{company.tagLine}</p>
            </div>
          </div>
          {/* Quick Links */}
          <div className=" flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/return-policy">Return Policy</Link>
              </li>
            </ul>
          </div>
          {/* Follow us on */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow us on</h4>
            <ul className="flex text-3xl gap-2 space-y-2">
              <li>
                <Link href={company.instagramLink} target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram className="hover:text-instagram transition-colors" />
                </Link>
              </li>
              <li>
                <Link href={company.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <AiOutlineWhatsApp className="hover:text-whatsapp transition-colors" />
                </Link>
              </li>
              <li>
                <Link href={company.youtubeLink} target="_blank" rel="noopener noreferrer">
                  <AiFillYoutube className="hover:text-youtube transition-colors" />
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-1">
              {/* Mail */}
              <li>
                <Link
                  href={`mailto:${company.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-youtube transition-colors"
                >
                  <AiFillMail />
                  {company.email}
                </Link>
              </li>
              {/* Phone */}
              <li>
                <Link
                  href={`tel:${company.mobile}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-phone transition-colors"
                >
                  <AiFillPhone className="-scale-x-100" />
                  +91 {company.mobile}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="bg-brand-900 text-gray-300 text-sm text-center p-2 border-t border-gray-800">
        <p>
          &copy; {currentYear} {company.name}. All rights reserved.
        </p>
      </div>
    </div>
  )
}
