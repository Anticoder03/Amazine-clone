import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <Navbar />
        <main className="min-h-screen bg-gray-50 py-12 px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-8">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>

            <p className="text-gray-700 mb-6">We offer a variety of services to improve your shopping experience and help sellers reach customers.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Reliable and fast delivery options to your doorstep.</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">Simple returns and refund policy for eligible items.</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Seller Tools</h3>
                <p className="text-sm text-gray-600">Tools and analytics to grow your store.</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Customer Support</h3>
                <p className="text-sm text-gray-600">Responsive support for account and order issues.</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-gray-600">Multiple secure payment methods and EMI plans.</p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Business Accounts</h3>
                <p className="text-sm text-gray-600">Special features and pricing for business customers.</p>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default Services
