import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { addToCart } from '../store/cartSlice'
function ProductItem({ product }) { const dispatch = useDispatch(); return <article className="product-card"><Link to={`/product/${product.id}`}><img src={product.thumbnail} alt={product.title} loading="lazy" /></Link><div className="product-info"><p className="category">{product.category}</p><Link to={`/product/${product.id}`}><h3>{product.title}</h3></Link><p className="price">${product.price.toFixed(2)}</p><button onClick={() => dispatch(addToCart(product))}>Add to Cart</button></div></article> }

ProductItem.propTypes = { product: PropTypes.shape({ id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, price: PropTypes.number.isRequired, thumbnail: PropTypes.string.isRequired, category: PropTypes.string.isRequired }).isRequired }
export default ProductItem
