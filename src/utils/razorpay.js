// Frontend helpers for Razorpay checkout
// Requires a server endpoint POST /api/razorpay/create-order that creates an order
// using Razorpay secret key and returns JSON: { id: '<order_id>', amount: <amount_in_paise>, currency: 'INR', key: '<razorpay_key_id>' }

export async function loadRazorpayScript() {
  if (window.Razorpay) return true
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => reject(new Error('Razorpay SDK failed to load'))
    document.body.appendChild(script)
  })
}

export async function createOrderOnServer(payload) {
  // payload should include amount (in paise), currency, receipt, items, etc.
  const res = await fetch('/api/razorpay/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const txt = await res.text().catch(() => '')
    throw new Error('Order creation failed: ' + txt || res.status)
  }
  return res.json()
}

export async function openRazorpay(orderData, { onSuccess, onFailure, prefill } = {}) {
  await loadRazorpayScript()
  if (!window.Razorpay) throw new Error('Razorpay SDK not available')

  const options = {
    key: orderData.key, // public key sent from server
    amount: orderData.amount, // in paise
    currency: orderData.currency || 'INR',
    name: 'My Shop',
    description: 'Order Payment',
    order_id: orderData.id,
    handler: function (response) {
      onSuccess && onSuccess(response)
    },
    prefill: prefill || {},
    theme: { color: '#F37254' }
  }

  const rzp = new window.Razorpay(options)
  rzp.on('payment.failed', function (resp) {
    onFailure && onFailure(resp)
  })
  rzp.open()
  return rzp
}
