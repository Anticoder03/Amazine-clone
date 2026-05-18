export const CART_KEY = 'cart_items_v1'

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
  // notify other listeners
  try {
    window.dispatchEvent(new CustomEvent('cartUpdated'))
  } catch (e) {}
}

export function getCartCount() {
  const cart = getCart()
  return cart.reduce((sum, it) => sum + (it.qty || 1), 0)
}

export function addToCart(product, qty = 1) {
  const cart = getCart()
  const existing = cart.find(item => String(item.id) === String(product.id))
  if (existing) {
    existing.qty = (existing.qty || 1) + qty
  } else {
    const copy = { ...product, qty }
    cart.push(copy)
  }
  saveCart(cart)
  return cart
}

export function removeFromCart(id) {
  const cart = getCart().filter(item => String(item.id) !== String(id))
  saveCart(cart)
  return cart
}

export function updateQuantity(id, qty) {
  const cart = getCart().map(item => {
    if (String(item.id) === String(id)) {
      return { ...item, qty: Math.max(0, qty) }
    }
    return item
  }).filter(i => i.qty > 0)
  saveCart(cart)
  return cart
}

export function clearCart() {
  saveCart([])
  return []
}
