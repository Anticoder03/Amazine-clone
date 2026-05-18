import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-6">
            We build beautiful shopping experiences to help customers discover great products and
            get them delivered quickly. This project is a learning implementation inspired by
            popular e-commerce layouts and focuses on responsive components, product listings and
            a simple shopping flow.
          </p>

          <section className="grid sm:grid-cols-2 gap-6 mt-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
              <p className="text-gray-600">Deliver value and convenience by making online shopping fast, accessible and enjoyable.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Customer-first design</li>
                <li>Practical, maintainable code</li>
                <li>Performance and accessibility</li>
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Team & History</h2>
            <p className="text-gray-600">Started as a personal project, this codebase demonstrates component-driven UI and routing for a small storefront. Contributions and improvements are welcome.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
