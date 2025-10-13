'use client'

import GradientLink from '@/components/GradientLink'
import ProductDescription from '@/components/ProductDescription'
// import ReviewForm from '@/components/Review'
import company from '@/config/company.json'
import { IProduct } from '@/utils/types'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import { BiShield } from 'react-icons/bi'

const ProductClient = ({ product }: { product: IProduct }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes[0] || null)
  const [activeImage, setActiveImage] = useState(product.imageUrl)

  const whatsappMessage = useMemo(() => {
    const baseMessage = `Hey! I’d like to order the ${product.name} ${product.category}`
    const sizePart = selectedSize ? ` (Size: ${selectedSize})` : ''
    return encodeURIComponent(`${baseMessage}${sizePart}`)
  }, [product.name, product.category, selectedSize])

  return (
    <main className="bg-black text-white min-h-screen py-12 md:py-20">
      <div className="mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-auto bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800">
              <Image
                src={activeImage}
                alt={product.name}
                width={500}
                height={200}
                className="w-full h-full transition-opacity duration-300 z-50"
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {[product.imageUrl, ...product.gallery].map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square bg-gray-900/50 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    activeImage === img
                      ? 'border-white scale-105'
                      : 'border-gray-800 hover:border-gray-600'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    width={500}
                    height={200}
                    className="w-full h-full object-cover z-50"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider">
                {product.name}
              </h1>
              <p className="text-gray-400 mt-2 text-lg">{product.description}</p>
            </div>
            <div className="text-3xl font-bold flex items-center gap-4">
              <span>&#8377;{product.sellingPrice}</span>
              <span className="text-2xl text-gray-500 line-through">&#8377;{product.mrp}</span>
            </div>
            {/* Size Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3">SELECT SIZE</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 font-semibold ${
                      selectedSize === size
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent border-gray-700 hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <GradientLink
              href={`${company.whatsappLink}?text=${whatsappMessage}`}
              className="text-center w-40"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Now
            </GradientLink>
            <ProductDescription productAccordian={product.productAccordian} />
            <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg flex items-center gap-4">
              <BiShield className="w-8 h-8 text-gray-400" />
              <div>
                <h4 className="font-semibold">Authenticity Guaranteed</h4>
                <p className="text-sm text-gray-500">
                  Every piece is a genuine Blckorack artifact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ReviewForm /> */}
    </main>
  )
}

export default ProductClient
