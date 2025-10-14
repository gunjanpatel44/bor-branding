import { themeClasses } from '@/utils'
import { IProduct } from '@/utils/types'
import Ribbon from 'antd/es/badge/Ribbon'
import Image from 'next/image'
import Link from 'next/link'

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
    category,
    mrp,
    sellingPrice,
    description,
    imageUrl,
    ribbonText,
    ribbonColor,
    comingSoon,
  },
  className = '',
}: IProductCardProps) => {
  const cardContent = (
    <div
      id={String(id)}
      className={`bg-gradient-to-br group p-5 rounded-2xl border text-white transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-black/60 cursor-pointer h-full ${themeClasses[theme]} ${className}`}
    >
      <div className="transform transition-transform duration-300 group-hover:scale-105 h-full flex flex-col">
        <Image
          src={imageUrl}
          alt={name}
          width={500}
          height={200}
          className="w-full h-full object-cover overflow-hidden rounded-xl mb-4"
        />
        <div className="flex p-2 flex-col gap-1 mt-auto">
          <h3 className="text-xl font-bold text-white truncate">{name}</h3>
          <p className="text-gray-400 truncate">{description}</p>
          <p className="text-gray-500">{category}</p>
          <div className="flex items-center gap-2 text-gray-300 mt-2">
            <p className="text-lg font-semibold">&#8377;{sellingPrice}</p>
            <p className="text-gray-500 text-base line-through">&#8377;{mrp}</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {!comingSoon ? (
        <Link href={`/collection/${slug}`} className="block h-full">
          {ribbonText ? (
            <Ribbon text={ribbonText} color={ribbonColor || 'red'}>
              {cardContent}
            </Ribbon>
          ) : (
            cardContent
          )}
        </Link>
      ) : ribbonText ? (
        <Ribbon text={ribbonText} color={ribbonColor || 'red'}>
          {cardContent}
        </Ribbon>
      ) : (
        cardContent
      )}
    </>
  )
}
