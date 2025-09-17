/* eslint-disable @next/next/no-img-element */
'use client'

import SLIDES from '@/config/slides.json'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import GradientLink from './GradientLink'

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      duration: 40,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((slide, index) => (
            <div
              className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0 px-2 select-none"
              key={index}
            >
              <div
                className={`relative w-full h-[80vh] md:h-[65vh] transition-all duration-700 ease-out ${
                  index === selectedIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'
                }`}
              >
                <img src={slide.imageUrl} alt={slide.alt} className="w-full h-full object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end text-center text-white p-8 transition-opacity duration-500 ${
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
      {/* Navigation */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 md:px-8">
        <button
          onClick={scrollPrev}
          className="bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Previous slide"
        >
          <BiChevronLeft size={28} />
        </button>
        <button
          onClick={scrollNext}
          className="bg-black/40 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Next slide"
        >
          <BiChevronRight size={28} />
        </button>
      </div>
    </div>
  )
}

export default HeroCarousel
