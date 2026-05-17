import React from 'react'
import { data } from '../data/data'
import { useNavigate } from 'react-router-dom'

const SearchProduct = ({ category, priceRange }) => {
    const navigate = useNavigate()

    const filteredProducts = data.filter(product => {
        const matchesCategory = !category || category === 'all' || product.catogary === category

        let matchesPrice = true
        if (priceRange === 'under-200') {
            matchesPrice = product.price < 200
        } else if (priceRange === '200-500') {
            matchesPrice = product.price >= 200 && product.price <= 500
        } else if (priceRange === '500-1000') {
            matchesPrice = product.price > 500 && product.price <= 1000
        } else if (priceRange === 'above-1000') {
            matchesPrice = product.price > 1000
        }

        return matchesCategory && matchesPrice
    })

    return (
        <div className="w-full bg-white">
            <div className="divide-y divide-gray-200">
                {filteredProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 hover:bg-gray-50 transition-colors"
                        role="button"
                        tabIndex={0}
                        onClick={() => navigate(`/product/${product.id}`)}
                    >
                        <div className="md:w-[320px] lg:w-[340px] flex-shrink-0">
                            <div className="bg-gray-100 rounded-lg overflow-hidden h-56 flex items-center justify-center">
                                <img
                                    src={`/img/products/${product.image}`}
                                    alt={product.name_sort || product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            {index === 0 && (
                                <span className="inline-block bg-slate-900 text-white text-xs font-semibold px-2 py-1 rounded mb-3">
                                    Amazon's Choice
                                </span>
                            )}

                            <h3 className="text-lg md:text-xl font-medium text-gray-900 leading-snug line-clamp-2">
                                {product.name || product.name_sort}
                            </h3>

                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                                <span className="text-orange-500">★★★★☆</span>
                                <span className="text-sm text-blue-700">({product.reviews?.toLocaleString?.() || product.reviews})</span>
                            </div>

                            <div className="mt-3">
                                <span className="text-3xl font-semibold text-gray-900">₹{product.price}</span>
                            </div>

                            <p className="mt-2 text-sm text-gray-600 max-w-3xl">
                                Free delivery, easy returns and fast shipping available on this item.
                            </p>

                            <div className="mt-4">
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-2 rounded-full transition-colors">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchProduct
