'use client'

import PRODUCTS from '@/config/products.json'
import { IProduct, ProductCard } from '@/components/ProductCard'
import HeroCarousel from '@/components/HeroCarousel'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroCarousel />
      <section className="py-16 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRODUCTS.products.map((product) => {
            return <ProductCard key={product.id} product={product as IProduct}></ProductCard>
          })}
        </div>
      </section>
    </main>
  )
}
