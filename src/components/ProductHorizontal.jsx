import React from 'react'

const ProductHorizontal = ({ title, products }) => {
  return (
    <>
      <div className="container w-[90%] mx-auto mt-12 ">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="flex gap-4 overflow-x-scroll">
            {products && products.map((product) => (
        <div key={product.id || product.name_sort} className="min-w-[160px]">
          <div className="bg-gray-100 rounded overflow-hidden h-40 flex items-center justify-center">
            <img
              src={`/img/products/${product.image}`}
              alt={product.name_sort || product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-sm mt-2 line-clamp-1">{product.name_sort || product.name}</h3>
        </div>
        ))}
        </div>
      </div>
    </>
  )
}

export default ProductHorizontal
