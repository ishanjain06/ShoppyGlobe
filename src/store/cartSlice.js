import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({ name: 'cart', initialState: { items: [] }, reducers: {
  addToCart: (state, action) => { const oldItem = state.items.find((item) => item.id === action.payload.id); if (oldItem) oldItem.quantity += 1; else state.items.push({ ...action.payload, quantity: 1 }) },
  removeFromCart: (state, action) => { state.items = state.items.filter((item) => item.id !== action.payload) },
  changeQuantity: (state, action) => { const item = state.items.find((cartItem) => cartItem.id === action.payload.id); if (item && action.payload.quantity >= 1) item.quantity = action.payload.quantity },
  clearCart: (state) => { state.items = [] },
} })
export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
export default cartSlice.reducer
