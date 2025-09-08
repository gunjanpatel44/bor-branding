/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import SLIDES from '@/config/slides.json'
import GradientLink from './GradientLink'

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', onSelect)
    onSelect()
    const interval = setInterval(() => {
      if (emblaApi && typeof emblaApi.scrollTo === 'function') {
        const nextIndex = (emblaApi.selectedScrollSnap() + 1) % SLIDES.length
        emblaApi.scrollTo(nextIndex, true)
      } else {
        emblaApi.scrollNext()
      }
    }, 4000)
    return () => {
      emblaApi.off('select', onSelect)
      clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, index) => (
            <div
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 select-none"
              key={index}
            >
              <div
                className={`relative w-full h-[80vh] md:h-[60vh] transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  index === selectedIndex ? 'scale-100' : 'scale-90 opacity-50'
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end text-center text-white p-8 rounded-2xl transition-opacity duration-500 ${
                    index === selectedIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-3xl font-extrabold uppercase tracking-widest">
                    {slide.title}
                  </h3>
                  <p className="max-w-xs text-gray-300 my-4">{slide.subtitle}</p>
                  <GradientLink href={slide.ctaLink} variant="primary">
                    {slide.ctaText}
                  </GradientLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:px-8">
        <button
          onClick={scrollPrev}
          className="bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Previous slide"
        >
          <BiChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Next slide"
        >
          <BiChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default HeroCarousel
