import { notFound } from 'next/navigation'
import { products } from '@/config/products'
import type { Metadata } from 'next'
import ProductClient from './ProductClient'
import { StaticImageData } from 'next/image'
import { IProduct } from '@/utils/types'

// Generate static pages for each product at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

// Generate dynamic metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug) as IProduct | undefined
  if (!product) {
    return { title: 'Product Not Found | Blckorack' }
  }
  return {
    title: `${product.name} | Blckorack`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()
  const plainProduct = {
    ...product,
    imageUrl: product.imageUrl?.src || product.imageUrl,
    gallery: product.gallery?.map((img: StaticImageData) => img.src || img),
  }

  return <ProductClient product={plainProduct as IProduct} />
}
