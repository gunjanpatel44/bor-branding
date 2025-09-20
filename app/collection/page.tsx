'use client'

import { IProduct, ProductCard } from '@/components/ProductCard'
import PRODUCTS from '@/config/products.json'
import COLLECTION from '@/config/collection.json'

const Collection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 bg-brand-900 text-brand-100 py-12 sm:py-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-100 bg-clip-text">
          {COLLECTION.title}
        </h2>
        {COLLECTION.subtitle && (
          <p className="text-brand-200 text-base sm:text-lg md:text-xl max-w-2xl">
            {COLLECTION.subtitle}
          </p>
        )}
      </div>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {PRODUCTS.products.map((product) => (
          <ProductCard key={product.id} product={product as IProduct} />
        ))}
      </div>
    </section>
  )
}

export default Collection
