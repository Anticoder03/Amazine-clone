import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [country, setCountry] = useState('IN +91')
  const [mobile, setMobile] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="py-6 flex justify-center border-b border-gray-200">
        <Link to="/" className="inline-flex items-end gap-1">
          <span className="text-4xl font-bold text-black tracking-tight">amazon</span>
          <span className="text-lg font-semibold text-[#007185]">.in</span>
        </Link>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 py-10 bg-[#f7f7f7]">
        <section className="w-full max-w-107.5 bg-white border border-gray-300 rounded-lg px-6 py-5 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Create Account</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile number</label>
              <div className="mt-2 flex gap-2">
                <select value={country} onChange={(e) => setCountry(e.target.value)} className="border border-gray-300 rounded-md px-3 py-2 bg-white">
                  <option>IN +91</option>
                  <option>US +1</option>
                  <option>GB +44</option>
                </select>
                <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile number" className="flex-1 border border-gray-300 rounded-md px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Your name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="First and last name" className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password (at least 6 characters)</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="mt-2 w-full border border-gray-300 rounded-md px-3 py-2" />
              <p className="mt-2 text-sm text-gray-600">Passwords must be at least 6 characters.</p>
            </div>

            <button type="button" className="w-full rounded-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2.5">Verify mobile number</button>

            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-sm font-semibold text-gray-900">Already a customer?</h2>
              <Link to="/login" className="mt-1 inline-block text-[#007185] hover:underline">Sign in instead</Link>
            </div>

            <p className="text-xs text-gray-600 mt-4">By creating an account or logging in, you agree to Amazon's <a href="#" className="text-[#007185] hover:underline">Conditions of Use</a> and <a href="#" className="text-[#007185] hover:underline">Privacy Policy</a>.</p>
          </form>
        </section>
      </main>

      <footer className="border-t border-gray-300 bg-white py-6">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-[#007185] flex flex-wrap justify-center gap-x-8 gap-y-3">
          <a href="#" className="hover:underline">Conditions of Use</a>
          <a href="#" className="hover:underline">Privacy Notice</a>
          <a href="#" className="hover:underline">Help</a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-700">© 1996–2026, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}

export default Register
