'use client'

import HeroCarousel from '@/components/HeroCarousel'
import { ProductCard } from '@/components/ProductCard'
import { StarryBackground } from '@/components/StarryBackground'
import { products } from '@/config/products'
import { IProduct } from '@/utils/types'

const AppHome = () => {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <section className="py-16 px-4 relative z-10">
        {/* <p className="text-center text-3xl font-semibold pb-10">T-shirt Collection</p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product as IProduct}></ProductCard>
          })}
        </div>
      </section>
      <StarryBackground />
    </main>
  )
}

export default AppHome
