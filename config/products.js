// import WhispersOfGrowth1 from '@/public/album/Whispers of Growth/whispers-of-growth-1.webp'
import WhispersOfGrowth2 from '@/public/album/Whispers of Growth/whispers-of-growth-2.webp'
// import WhispersOfGrowth3 from '@/public/album/Whispers of Growth/whispers-of-growth-3.webp'
import WhispersOfGrowth4 from '@/public/album/Whispers of Growth/whispers-of-growth-4.webp'
import WhispersOfGrowth5 from '@/public/album/Whispers of Growth/whispers-of-growth-5.webp'
import WhispersOfGrowth6 from '@/public/album/Whispers of Growth/whispers-of-growth-6.webp'
import WhispersOfGrowth7 from '@/public/album/Whispers of Growth/whispers-of-growth-7.webp'
import WhispersOfGrowth8 from '@/public/album/Whispers of Growth/whispers-of-growth-8.webp'
import WhispersOfGrowth9 from '@/public/album/Whispers of Growth/whispers-of-growth-9.webp'
import WhispersOfGrowth10 from '@/public/album/Whispers of Growth/whispers-of-growth-10.webp'
// import FieldOfMemory1 from '@/public/album/Fields of Memory/fields-of-memory-1.webp'
import FieldOfMemory2 from '@/public/album/Fields of Memory/fields-of-memory-2.webp'
// import FieldOfMemory3 from '@/public/album/Fields of Memory/fields-of-memory-3.webp'
import FieldOfMemory4 from '@/public/album/Fields of Memory/fields-of-memory-4.webp'
import FieldOfMemory5 from '@/public/album/Fields of Memory/fields-of-memory-5.webp'
import FieldOfMemory6 from '@/public/album/Fields of Memory/fields-of-memory-6.webp'
import FieldOfMemory7 from '@/public/album/Fields of Memory/fields-of-memory-7.webp'
import FieldOfMemory8 from '@/public/album/Fields of Memory/fields-of-memory-8.webp'
// import FieldOfMemory9 from '@/public/album/Fields of Memory/fields-of-memory-9.webp'
import FieldOfMemory10 from '@/public/album/Fields of Memory/fields-of-memory-10.webp'
import Adikavya1 from '@/public/album/Adikavya/adikavya-1.webp'
import Adikavya2 from '@/public/album/Adikavya/adikavya-2.webp'
import Adikavya3 from '@/public/album/Adikavya/adikavya-3.webp'
import Adikavya4 from '@/public/album/Adikavya/adikavya-4.webp'
import Adikavya5 from '@/public/album/Adikavya/adikavya-5.webp'
import TShirtSizeChart from '@/public/size-chart/box-fit-tshirt-size-chart.webp'
// import ComingSoon from '@/public/album/Coming Soon/ComingSoon.webp'

export const products = [
  {
    id: 1,
    name: 'Fields of Memory',
    slug: 'fields-of-memory-tee',
    description: 'Step into nostalgia with soulful streetwear.',
    mrp: 1999,
    sellingPrice: 1499,
    theme: 'fieldsOfMemory',
    category: 'T-Shirt',
    imageUrl: FieldOfMemory2,
    gallery: [
      FieldOfMemory10,
      FieldOfMemory6,
      FieldOfMemory8,
      FieldOfMemory7,
      FieldOfMemory4,
      FieldOfMemory5,
      TShirtSizeChart,
    ],
    productAccordian: [
      {
        id: 1,
        title: 'Description',
        desc: 'Step into the nostalgia of Indian childhood with the Fields of Memory. Inspired by days spent playing in the fields and gathering by the water, it captures the essence of simple joys and timeless bonds. With bold artwork on a deep textured base, this tee blends streetwear aesthetics with soulful tradition — a wearable memory.',
      },
      {
        id: 2,
        title: 'Product Details',
        desc: [
          '240 GSM Heavyweight',
          '100% Cotton',
          'Relaxed Oversized Fit',
          'High-Density Screen Print',
          'Double Bio Washed',
          'Screen-Printed Patch Design',
        ],
      },
      {
        id: 3,
        title: 'Care Instructions',
        desc: [
          'Hand Wash in Cold Water or Dry Clean Only',
          'Do Not Bleach',
          'Dry in Shade to Maintain Print Quality',
          'Iron Inside Out on Low Heat',
        ],
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ribbonText: '25% OFF',
    ribbonColor: 'red',
  },
  {
    id: 2,
    name: 'Whispers of Growth',
    slug: 'whispers-of-growth-tee',
    description: 'Nature vs concrete — a story told in fabric.',
    mrp: 1999,
    sellingPrice: 1499,
    theme: 'whispersOfGrowth',
    category: 'T-Shirt',
    imageUrl: WhispersOfGrowth2,
    gallery: [
      WhispersOfGrowth10,
      WhispersOfGrowth8,
      WhispersOfGrowth6,
      WhispersOfGrowth7,
      WhispersOfGrowth9,
      WhispersOfGrowth4,
      WhispersOfGrowth5,
      TShirtSizeChart,
    ],
    productAccordian: [
      {
        id: 1,
        title: 'Description',
        desc: 'The Whispers of Growth contrasts the beauty of trees with the harshness of bricks, symbolizing how urban life replaces what once grew wild. A design that speaks for the environment while staying rooted in streetwear culture.',
      },
      {
        id: 2,
        title: 'Product Details',
        desc: [
          '240 GSM Heavyweight',
          '100% Cotton',
          'Relaxed Oversized Fit',
          'High-Density Screen Print',
          'Double Bio Washed',
          'Screen-Printed Patch Design',
        ],
      },
      {
        id: 3,
        title: 'Care Instructions',
        desc: [
          'Hand Wash in Cold Water or Dry Clean Only',
          'Do Not Bleach',
          'Dry in Shade to Maintain Print Quality',
          'Iron Inside Out on Low Heat',
        ],
      },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    ribbonText: '25% OFF',
    ribbonColor: 'red',
  },
  {
    id: 3,
    name: 'Adikavya',
    slug: 'adikavya-tee',
    description: 'Ramayana retold — the eternal triumph of dharma.',
    mrp: 1999,
    sellingPrice: 1499,
    theme: 'adikavya',
    category: 'T-Shirt',
    imageUrl: Adikavya1,
    gallery: [Adikavya2, Adikavya3, Adikavya4, Adikavya5, TShirtSizeChart],
    comingSoon: false,
    productAccordian: [
      {
        id: 1,
        title: 'Description',
        desc: 'Adikavya, the first epic, comes alive on this T-shirt through the timeless tale of Ramayana. The design captures Ravan’s abduction of Sita Mata, Jatayu’s brave resistance, and the divine strength of Lord Ram, Lakshman, and Hanuman. A symbol of dharma, courage, and devotion, this piece reminds us that righteousness always prevails.',
      },
      {
        id: 2,
        title: 'Product Details',
        desc: [
          '240 GSM Heavyweight',
          '100% Cotton',
          'Relaxed Oversized Fit',
          'High-Density Screen Print',
          'Double Bio Washed',
          'Screen-Printed Patch Design',
        ],
      },
      {
        id: 3,
        title: 'Care Instructions',
        desc: [
          'Hand Wash in Cold Water or Dry Clean Only',
          'Do Not Bleach',
          'Dry in Shade to Maintain Print Quality',
          'Iron Inside Out on Low Heat',
        ],
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    ribbonText: 'Just Launched',
    // ribbonColor: 'purple',
  },
]

export const productSlugs = ['fields-of-memory-tee', 'whispers-of-growth-tee']
// 'adikavya-tee'
