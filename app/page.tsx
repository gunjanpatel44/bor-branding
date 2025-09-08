'use client'

import Image from 'next/image'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GradientButton } from '@/components/GradientButton'
import { HeroGradient } from '@/components/HeroGradient'
import { ProductCardGradient } from '@/components/ProductCardGradient'
import ImageTshirt1 from '@/public/t-shirts/image-tshirt-1.jpg'
import ImageTshirt2 from '@/public/t-shirts/image-tshirt-2.jpg'
import ImageTshirt3 from '@/public/t-shirts/image-tshirt-3.jpg'
import ImageTshirt4 from '@/public/t-shirts/image-tshirt-4.jpg'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroGradient className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-[220px] text-gray-400">BlckOrack</p>
          <GradientButton variant="primary">Explore Collection</GradientButton>
        </div>
      </HeroGradient>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        pagination
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
      >
        <SwiperSlide>
          <Image src={ImageTshirt1} alt="bo" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTshirt2} alt="bo" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={ImageTshirt3} alt="bo" width={200} height={200} />
        </SwiperSlide>
      </Swiper>
      {/* Product Cards */}
      <section className="py-16 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ProductCardGradient theme="nature">
            <Image
              src={ImageTshirt4}
              alt="bo"
              className="mx-auto rounded-xl"
              width={300}
              height={300}
            />
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-xl font-bold">Nature Growth Tee</h3>
              <p className="text-dark-300">Forest green with growth symbolism</p>
            </div>
          </ProductCardGradient>
          <ProductCardGradient theme="mythology">
            <Image
              src={ImageTshirt4}
              alt="bo"
              className="mx-auto rounded-xl"
              width={300}
              height={300}
            />
            <h3 className="text-xl font-bold mb-2">Ramayana Tee</h3>
            <p className="text-dark-300">Bold red with epic storytelling</p>
          </ProductCardGradient>
          <ProductCardGradient theme="nostalgia">
            <Image
              src={ImageTshirt4}
              alt="bo"
              className="mx-auto rounded-xl"
              width={300}
              height={300}
            />
            <h3 className="text-xl font-bold text-nostalgia-400 mb-2">Nostalgia Tee</h3>
            <p className="text-dark-300">Black with childhood memories</p>
          </ProductCardGradient>
        </div>
      </section>
    </main>
  )
}
