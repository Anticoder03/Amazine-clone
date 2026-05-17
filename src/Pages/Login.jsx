import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
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
          <h1 className="text-[28px] leading-tight font-medium text-gray-900 mb-5">Sign in or create account</h1>

          <div className="space-y-4">
            <label className="block">
              <span className="block text-sm font-semibold text-gray-900 mb-1">Enter mobile number or email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-400 px-3 py-3 text-base outline-none focus:border-[#00a8e1] focus:shadow-[0_0_0_3px_rgba(0,168,225,0.2)]"
              />
            </label>

            <label className="block">
              <span className="block text-sm font-semibold text-gray-900 mb-1">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-400 px-3 py-3 text-base outline-none focus:border-[#00a8e1] focus:shadow-[0_0_0_3px_rgba(0,168,225,0.2)]"
              />
            </label>

            <button className="w-full rounded-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-900 font-medium py-2.5 transition-colors">
              Continue
            </button>

            <p className="text-sm text-gray-700 leading-6">
              By continuing, you agree to Amazon&apos;s{' '}
              <a href="#" className="text-[#007185] hover:underline">Conditions of Use</a>{' '}
              and{' '}
              <a href="#" className="text-[#007185] hover:underline"> Privacy Notice</a>.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-base font-semibold text-gray-900">Buying for work?</h2>
              <a href="#" className="mt-1 inline-block text-[#007185] hover:underline">
                Create a free business account
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-300 bg-white py-8">
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

export default Login
