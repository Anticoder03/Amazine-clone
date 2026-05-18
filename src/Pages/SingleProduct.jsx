import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { data } from '../data/data'
import Navbar from '../components/Navbar';
import ProductHorizontal from '../components/ProductHorizontal';
import { sliders } from '../data/data';
import Footer from '../components/Footer';
import { addToCart } from '../utils/cart'

const categoryLabelMap = {
  clothing: 'Clothing',
  electronics: 'Electronics',
  accessories: 'Accessories'
}

const SingleProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = data.find(item => String(item.id) === String(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
          <button className="text-blue-600 hover:underline mb-6" onClick={() => navigate(-1)}>
            Back
          </button>
          <div className="text-gray-700">Product not found.</div>
        </div>
      </div>
    )
  }

  const categoryLabel = categoryLabelMap[product.catogary] || 'Product'
  const productTitle = product.name || product.name_sort

  return (
    <>
    <Navbar />
        <div className="min-h-screen bg-[#eaeded] px-4 py-6">
      <div className="max-w-350 mx-auto space-y-4">
        <nav className="text-sm text-gray-600 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-blue-700 hover:underline">Home</Link>
          <span>/</span>
          <Link to={`/?category=${product.catogary}`} className="hover:text-blue-700 hover:underline">
            {categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-gray-900 line-clamp-1">{product.name_sort || product.name}</span>
        </nav>
        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)] gap-6 items-start">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 items-start">
              <div>
                <div className="sticky top-6 bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center h-105">
                  <img
                    src={`/img/products/${product.image}`}
                    alt={productTitle}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mt-4 text-center text-blue-700 text-sm hover:underline cursor-pointer">
                  Click to see full view
                </div>
              </div>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-[28px] leading-tight font-medium text-gray-900">
                    {productTitle}
                  </h1>
                  {/* <button className="text-gray-700 hover:text-black">
                    <span className="sr-only">Share</span>
                    <span className="text-2xl">⤴</span>
                  </button> */}
                </div>

                <div className="mt-2 text-blue-700 text-sm hover:underline cursor-pointer">
                  Visit the {categoryLabelMap[product.catogary] || 'Store'}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900">{product.rating}</span>
                    <span className="text-orange-500 text-lg leading-none">★★★★☆</span>
                    <span className="text-blue-700 hover:underline">({product.reviews?.toLocaleString?.() || product.reviews})</span>
                  </div>
                  <span className="text-blue-700 hover:underline">Search this page</span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 rounded bg-[#cc0c39] px-3 py-2 text-white text-sm font-semibold">
                  Great Summer Deal
                </div>

                <div className="mt-5 flex items-end gap-3 flex-wrap">
                  <span className="text-4xl font-medium text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-lg text-gray-800">/month (3 months)</span>
                </div>

                <div className="mt-2 text-sm text-gray-800">
                  with <span className="font-semibold">No Cost EMI</span> on your Amazon Pay Later
                  <span className="text-blue-700 font-semibold hover:underline ml-1">All EMI Plans</span>
                </div>

                <div className="mt-3 flex items-center gap-3 flex-wrap text-sm">
                  <span className="text-rose-500 text-lg">-50%</span>
                  <span className="text-2xl text-gray-900">₹{product.price.toLocaleString('en-IN')}</span>
                  <span className="text-gray-500 line-through">M.R.P. ₹{Math.round(product.price * 1.5).toLocaleString('en-IN')}</span>
                  <span className="text-blue-700 hover:underline">Price history</span>
                </div>

                <div className="mt-4 text-sm text-gray-800">
                  <span className="inline-flex items-center gap-2 rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-700">
                    a
                    <span>Fulfilled</span>
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-900">
                  Inclusive of all taxes
                </p>

                <p className="mt-3 text-sm text-gray-800 leading-6 max-w-3xl">
                  {product.name || product.name_sort} is displayed in an Amazon-style product detail layout with a breadcrumb trail, image focus, rating summary, and purchase-ready price section.
                </p>
              </div>
            </div>
          </div>

          <aside className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sticky top-6">
            <div className="text-3xl font-medium text-gray-900">₹{product.price.toLocaleString('en-IN')}</div>
            <div className="mt-2 text-sm text-gray-700">FREE delivery on eligible orders</div>
            <div className="mt-1 text-sm text-emerald-700 font-medium">In stock</div>

                <div className="mt-5 flex flex-col gap-3">
                  <button
                    className="rounded-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2.5"
                    onClick={() => { addToCart(product); navigate('/cart') }}
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full bg-[#ffa41c] hover:bg-[#fa8900] text-gray-900 font-medium py-2.5">
                    Buy Now
                  </button>
                </div>

            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <div>Secure transaction</div>
              <div>Ships from Amazon</div>
              <div>Sold by Amazon</div>
            </div>
          </aside>
        </div>
      </div>
    </div>
           <ProductHorizontal title="Up to 40% off | Best Deals on smartphones" products={sliders} />
    <Footer />
    </>
  )
}

export default SingleProduct
