/* eslint-disable @next/next/no-img-element */
import Ribbon from 'antd/es/badge/Ribbon'
import Link from 'next/link'

export type TProductCardTheme = 'nature' | 'mythology' | 'nostalgia'

export type IProductDescription = {
  id: number
  title: string
  desc: string
}

export interface IProduct {
  id: number
  slug: string
  name: string
  theme: TProductCardTheme
  mrp: number
  sellingPrice: number
  description: string
  productAccordian: IProductDescription[]
  imageUrl: string
  gallery: string[]
  sizes: string[]
  ribbonText?: string
  ribbonColor?: string
}

interface IProductCardProps {
  product: IProduct
  className?: string
}

export const ProductCard = ({
  product: {
    id,
    slug,
    name,
    theme,
    mrp,
    sellingPrice,
    description,
    imageUrl,
    ribbonText,
    ribbonColor,
  },
  className = '',
}: IProductCardProps) => {
  const themeClasses: Record<TProductCardTheme, string> = {
    nature: 'from-green-900/40 to-black border-green-700/30',
    mythology: 'from-red-900/40 to-black border-red-700/30',
    nostalgia: 'from-indigo-900/40 to-black border-indigo-700/30',
  }

  const cardContent = (
    <div
      id={String(id)}
      className={`bg-gradient-to-br group p-5 rounded-2xl border text-white transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-black/60 cursor-pointer h-full ${themeClasses[theme]} ${className}`}
    >
      <div className="transform transition-transform duration-300 group-hover:scale-105 h-full flex flex-col">
        <div className="overflow-hidden rounded-xl mb-4">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex p-2 flex-col gap-1 mt-auto">
          <h3 className="text-xl font-bold text-white truncate">{name}</h3>
          <p className="text-gray-400 truncate">{description}</p>
          <div className="flex items-center gap-2 text-gray-300 mt-2">
            <p className="text-lg font-semibold">&#8377;{sellingPrice}</p>
            <p className="text-gray-500 text-base line-through">&#8377;{mrp}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Link href={`/collection/${slug}`} className="block h-full">
      {ribbonText ? (
        <Ribbon text={ribbonText} color={ribbonColor || 'red'}>
          {cardContent}
        </Ribbon>
      ) : (
        cardContent
      )}
    </Link>
  )
}
