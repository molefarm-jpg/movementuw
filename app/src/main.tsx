import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const redirectPath = new URLSearchParams(window.location.search).get('p')
if (redirectPath) {
  window.history.replaceState(null, '', decodeURIComponent(redirectPath))
}

createRoot(document.getElementById('root')!).render(<App />)
