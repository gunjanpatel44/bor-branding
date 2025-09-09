/* eslint-disable @next/next/no-img-element */
import Ribbon from 'antd/es/badge/Ribbon'

export type TProductCardTheme = 'nature' | 'mythology' | 'nostalgia'

export interface IProduct {
  id: string
  name: string
  description: string
  imageUrl: string
  theme: TProductCardTheme
  mrp: number
  sellingPrice: number
  ribbonText?: string
  ribbonColor?: string
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

  const cardContent = (
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
          <div className="flex items-center gap-2 text-gray-300">
            <p className="text-lg">&#8377;{product.sellingPrice}</p>
            <p className="text-gray-500 text-base line-through">&#8377;{product.mrp}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return product.ribbonText ? (
    <Ribbon text={product.ribbonText} color={product?.ribbonColor || 'red'}>
      {cardContent}
    </Ribbon>
  ) : (
    cardContent
  )
}
