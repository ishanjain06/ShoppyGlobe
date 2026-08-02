import { useSelector } from 'react-redux'
import useProducts from '../hooks/useProducts'
import { selectSearch } from '../store/searchSlice'
import ProductItem from './ProductItem'
import Loader from './Loader'
function ProductList() { const { products, loading, error } = useProducts(); const search = useSelector(selectSearch).toLowerCase(); const shownProducts = products.filter((product) => product.title.toLowerCase().includes(search)); if (loading) return <Loader />; if (error) return <p className="status-message error">{error}</p>; return <><p className="result-count">{shownProducts.length} products found</p><section className="product-grid">{shownProducts.map((product) => <ProductItem key={product.id} product={product} />)}</section>{!shownProducts.length && <p className="status-message">No products match your search.</p>}</> }
export default ProductList
