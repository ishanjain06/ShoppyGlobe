import { Link } from 'react-router-dom'
function NotFound() { return <section className="empty-state"><p className="not-found-code">404</p><h1>Page not found</h1><p>The page you are looking for does not exist or may have moved.</p><Link to="/" className="button-link">Back to Home</Link></section> }
export default NotFound
