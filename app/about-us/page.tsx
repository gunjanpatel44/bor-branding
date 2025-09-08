import type { Metadata } from 'next'
import Image from 'next/image'

import ArtisticImage from '@/public/artistic/artistic.png'
import ABOUT_US from '@/config/about.json'
import { BiShield, BiSolidZap, BiUser } from 'react-icons/bi'
import { TbUserSquare } from 'react-icons/tb'

// Metadata is now dynamically generated from your JSON file for better SEO
export const metadata: Metadata = {
  title: ABOUT_US.meta.title,
  description: ABOUT_US.meta.description,
  keywords: ABOUT_US.meta.keywords,
}

const iconMap: { [key: string]: React.ReactNode } = {
  Shield: <BiShield className="h-10 w-10 mx-auto mb-4 text-gray-200" />,
  User: <BiUser className="h-10 w-10 mx-auto mb-4 text-gray-200" />,
  Zap: <BiSolidZap className="h-10 w-10 mx-auto mb-4 text-gray-200" />,
  Users: <TbUserSquare className="h-10 w-10 mx-auto mb-4 text-gray-200" />,
}

const AboutUsPage = () => {
  return (
    // A dark theme is used to better match the premium, streetwear aesthetic of your brand.
    <main className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-[10vh] min-h-[350px] md:h-[40vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={ArtisticImage}
          alt="Abstract branding image for Blckorack"
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient Overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="relative text-center px-4 z-10">
          <h1 className="text-4xl font-times md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest mb-4 animate-fade-in-down">
            {ABOUT_US.hero.title}
          </h1>
          <p className="text-xl italic md:text-2xl font-light max-w-3xl mx-auto text-gray-300 animate-fade-in-up">
            {ABOUT_US.hero.subtitle}
          </p>
        </div>
      </section>
      {/* Brand Story Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-wider">
              {ABOUT_US.story.title}
            </h2>
            <div className="space-y-6 text-lg text-gray-300 font-light text-left md:text-center">
              {ABOUT_US.story.paragraphs.map((para, i) => {
                // Special styling for the brand name definitions to make them stand out
                if (para.startsWith('“Blck”') || para.startsWith('“Orack”')) {
                  const parts = para.split(' ')
                  const term = parts[0]
                  const definition = parts.slice(1).join(' ')
                  return (
                    <blockquote
                      key={i}
                      className="text-left bg-gray-900 p-6 rounded-lg border border-gray-800 shadow-lg"
                    >
                      <p>
                        <span className="font-semibold text-white">{term}</span> {definition}
                      </p>
                    </blockquote>
                  )
                }
                return <p key={i}>{para}</p>
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Section */}
      <section className="bg-gray-900 py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {ABOUT_US.values.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-lg bg-black border border-gray-800 transform hover:scale-105 hover:border-white transition-all duration-300 cursor-pointer"
              >
                {iconMap[item.icon]}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA / Charity Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-10 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wider">
            {ABOUT_US.contact.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light">{ABOUT_US.contact.desc}</p>
          <a
            href={ABOUT_US.contact.ctaLink}
            className="inline-block bg-white text-black font-bold uppercase tracking-widest py-4 px-10 rounded-md hover:bg-gray-300 transition-colors duration-300"
          >
            {ABOUT_US.contact.ctaText}
          </a>
        </div>
      </section>
    </main>
  )
}

export default AboutUsPage
