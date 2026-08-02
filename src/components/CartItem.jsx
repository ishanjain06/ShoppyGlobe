import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { changeQuantity, removeFromCart } from '../store/cartSlice'
function CartItem({ item }) { const dispatch = useDispatch(); return <article className="cart-item"><img src={item.thumbnail} alt={item.title} loading="lazy" /><div className="cart-item-info"><h3>{item.title}</h3><p>${item.price.toFixed(2)} each</p><div className="quantity-controls"><button aria-label="Decrease quantity" onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(changeQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div></div><div className="cart-actions"><strong>${(item.price * item.quantity).toFixed(2)}</strong><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div></article> }

CartItem.propTypes = { item: PropTypes.shape({ id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, price: PropTypes.number.isRequired, thumbnail: PropTypes.string.isRequired, quantity: PropTypes.number.isRequired }).isRequired }
export default CartItem
