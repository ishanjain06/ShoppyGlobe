import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../store/cartSlice'
import CartItem from '../components/CartItem'
function Cart() { const items = useSelector(selectCartItems); const total = useSelector(selectCartTotal); if (!items.length) return <section className="empty-state"><h1>Your cart is empty</h1><p>Add a few products and they will show up here.</p><Link to="/" className="button-link">Continue Shopping</Link></section>; return <section className="cart-page"><h1>Shopping Cart</h1><div className="cart-layout"><div>{items.map((item) => <CartItem key={item.id} item={item} />)}</div><aside className="order-summary"><h2>Order Summary</h2><p>Total <strong>${total.toFixed(2)}</strong></p><Link to="/checkout" className="button-link">Proceed to Checkout</Link></aside></div></section> }
export default Cart
