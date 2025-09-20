import { notFound } from 'next/navigation'
import PRODUCTS from '@/config/products.json'
import type { Metadata } from 'next'
import ProductClient from './ProductClient'
import { IProduct } from '@/components/ProductCard'

// Generate static pages for each product at build time
export async function generateStaticParams() {
  return PRODUCTS.products.map((product) => ({
    slug: product.slug,
  }))
}

// Generate dynamic metadata for each product page
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = PRODUCTS.products.find((p) => p.slug === params.slug) as IProduct | undefined
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
  const product = PRODUCTS.products.find((p) => p.slug === slug)
  if (!product) {
    notFound()
  }
  return <ProductClient product={product as IProduct} />
}
