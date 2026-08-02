import { useEffect, useState } from 'react'
function useProducts() {
  const [products, setProducts] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState('')
  useEffect(() => { const controller = new AbortController(); async function getProducts() { try { const response = await fetch('https://dummyjson.com/products', { signal: controller.signal }); if (!response.ok) throw new Error('Could not load products. Please try again.'); const data = await response.json(); setProducts(data.products) } catch (err) { if (err.name !== 'AbortError') setError(err.message) } finally { if (!controller.signal.aborted) setLoading(false) } } getProducts(); return () => controller.abort() }, [])
  return { products, loading, error }
}
export default useProducts
