import { useState } from 'react'
import { IProductDescription } from './ProductCard'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'

const ProductDescription = ({ productAccordian }: { productAccordian: IProductDescription[] }) => {
  const [openPanel, setOpenPanel] = useState<number | null>(null)

  const togglePanel = (id: number) => {
    setOpenPanel(openPanel === id ? null : id)
  }

  return (
    <div className="w-full border-t border-gray-800 cursor-pointer">
      <div className="space-y-2">
        {productAccordian.map((section) => (
          <div key={section.id} className="border-b border-gray-800">
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-semibold text-left text-white"
                onClick={() => togglePanel(section.id)}
                aria-expanded={openPanel === section.id}
              >
                <span className="text-lg uppercase transition tracking-wider">{section.title}</span>
                {openPanel === section.id ? (
                  <MdKeyboardArrowUp className="w-6 h-6" />
                ) : (
                  <MdKeyboardArrowDown className="w-6 h-6" />
                )}
              </button>
            </h2>
            <div
              className={`grid transition-all duration-500 ease-in-out text-gray-400 ${
                openPanel === section.id
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-4 leading-relaxed">{section.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductDescription
