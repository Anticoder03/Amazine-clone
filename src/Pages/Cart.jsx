import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getCart, updateQuantity, removeFromCart, clearCart } from '../utils/cart'
import { createOrderOnServer, openRazorpay } from '../utils/razorpay'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [items, setItems] = useState(getCart())

  useEffect(() => {
    const onUpdate = () => setItems(getCart())
    window.addEventListener('cartUpdated', onUpdate)
    window.addEventListener('storage', onUpdate)
    return () => {
      window.removeEventListener('cartUpdated', onUpdate)
      window.removeEventListener('storage', onUpdate)
    }
  }, [])

  const handleQty = (id, qty) => {
    updateQuantity(id, qty)
    setItems(getCart())
  }

  const handleRemove = (id) => {
    removeFromCart(id)
    setItems(getCart())
  }

  const handleClear = () => {
    clearCart()
    setItems([])
  }

  const total = items.reduce((s, it) => s + (it.qty || 1) * (it.price || 0), 0)
  const navigate = useNavigate()

  const handleCheckout = async () => {
    if (!items.length) return alert('Cart is empty')
    try {
      const orderPayload = {
        amount: Math.round(total * 100), // paise
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        items: items.map(i => ({ id: i.id, name: i.name || i.name_sort, qty: i.qty || 1, price: i.price }))
      }

      const orderData = await createOrderOnServer(orderPayload)
      await openRazorpay(orderData, {
        prefill: {},
        onSuccess: (res) => {
          clearCart()
          setItems([])
          alert('Payment successful')
          navigate('/')
        },
        onFailure: (err) => {
          console.error('Payment failed', err)
          alert('Payment failed')
        }
      })
    } catch (e) {
      console.error(e)
      alert('Checkout failed. Ensure you have a backend endpoint at /api/razorpay/create-order')
    }
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium mb-4">Shopping Cart</h2>

          {items.length === 0 ? (
            <div className="bg-white p-6 rounded shadow text-gray-700">Your cart is empty.</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                {items.map(item => (
                  <div key={item.id} className="bg-white p-4 rounded shadow flex gap-4 items-center">
                    <div className="w-28 h-28 bg-gray-100 flex items-center justify-center rounded">
                      <img src={`/img/products/${item.image}`} alt={item.name || item.name_sort} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{item.name || item.name_sort}</div>
                      <div className="text-sm text-gray-600">₹{item.price?.toLocaleString?.('en-IN') || item.price}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => handleQty(item.id, (item.qty || 1) - 1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                        <span className="px-2">{item.qty || 1}</span>
                        <button onClick={() => handleQty(item.id, (item.qty || 1) + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                        <button onClick={() => handleRemove(item.id)} className="ml-4 text-sm text-rose-600">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-end">
                  <button onClick={handleClear} className="px-4 py-2 bg-gray-200 rounded">Clear Cart</button>
                </div>
              </div>

              <aside className="bg-white p-4 rounded shadow">
                <div className="text-sm text-gray-600">Subtotal ({items.reduce((s, it) => s + (it.qty || 1), 0)} items):</div>
                <div className="text-2xl font-medium mt-2">₹{total.toLocaleString('en-IN')}</div>
                <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-medium">Proceed to Checkout</button>
              </aside>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
