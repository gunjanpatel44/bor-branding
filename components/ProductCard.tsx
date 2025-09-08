/* eslint-disable @next/next/no-img-element */
import React from 'react'

export type TProductCardTheme = 'nature' | 'mythology' | 'nostalgia'

export interface IProduct {
  id: string
  name: string
  description: string
  imageUrl: string
  theme: TProductCardTheme
}

interface IProductCardProps {
  product: IProduct
  className?: string
}

export const ProductCard = ({ product, className = '' }: IProductCardProps) => {
  const themeClasses: Record<TProductCardTheme, string> = {
    nature: 'from-green-900/40 to-black border-green-700/30',
    mythology: 'from-red-900/40 to-black border-red-700/30',
    nostalgia: 'from-indigo-900/40 to-black border-indigo-700/30',
  }

  return (
    <div
      className={`bg-gradient-to-br ${themeClasses[product.theme]} p-5 rounded-2xl border text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 cursor-pointer group ${className}`}
    >
      <div className="transform transition-transform duration-300 group-hover:scale-105">
        <div className="overflow-hidden rounded-xl mb-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
        </div>
        <div className="flex p-2 flex-col gap-1">
          <h3 className="text-xl font-bold text-white">{product.name}</h3>
          <p className="text-gray-400">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
