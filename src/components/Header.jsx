import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../store/searchSlice'
import { selectCartCount } from '../store/cartSlice'
function Header() { const dispatch = useDispatch(); const cartCount = useSelector(selectCartCount); return <header className="header"><div className="header-inner"><Link to="/" className="logo">Shoppy<span>Globe</span></Link><input className="search-box" type="search" placeholder="Search products..." aria-label="Search products" onChange={(event) => dispatch(setSearch(event.target.value))} /><nav><NavLink to="/">Home</NavLink><NavLink to="/cart" className="cart-link">Cart <span>{cartCount}</span></NavLink></nav></div></header> }
export default Header
