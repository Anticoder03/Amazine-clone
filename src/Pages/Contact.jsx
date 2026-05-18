import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

          <p className="text-gray-700 mb-6">Have a question or feedback? Send us a message and we'll get back to you.</p>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent (demo)') }}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <div>
              <button type="submit" className="rounded-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2.5 px-6">Send message</button>
            </div>
          </form>

          <div className="mt-8 border-t pt-6 text-sm text-gray-700">
            <p>Customer support: support@example.com</p>
            <p>Phone: +91 99999 99999</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact
