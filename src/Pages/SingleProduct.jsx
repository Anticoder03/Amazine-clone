import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../data/data'

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = data.find(item => String(item.id) === String(id))

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
        <button className="text-blue-600 hover:underline mb-6" onClick={() => navigate(-1)}>
          Back
        </button>

        {product ? (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-105">
              <img
                src={`/img/products/${product.image}`}
                alt={product.name_sort || product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
                {product.name || product.name_sort}
              </h1>
              <p className="mt-4 text-2xl font-bold text-gray-900">₹{product.price}</p>
              <div className="mt-3 text-sm text-gray-600">
                Rating: {product.rating} | Reviews: {product.reviews}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-gray-700">Product not found.</div>
        )}
      </div>
    </div>
  )
}

export default SingleProduct
