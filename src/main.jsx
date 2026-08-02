import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import Loader from './components/Loader'
import './index.css'

const Home = lazy(() => import('./pages/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const NotFound = lazy(() => import('./pages/NotFound'))
const page = (Component) => <Suspense fallback={<Loader />}><Component /></Suspense>
const router = createBrowserRouter([{ path: '/', element: <App />, children: [
  { index: true, element: page(Home) }, { path: 'product/:id', element: page(ProductDetail) },
  { path: 'cart', element: page(Cart) }, { path: 'checkout', element: page(Checkout) }, { path: '*', element: page(NotFound) },
] }])

createRoot(document.getElementById('root')).render(<StrictMode><Provider store={store}><RouterProvider router={router} /></Provider></StrictMode>)
