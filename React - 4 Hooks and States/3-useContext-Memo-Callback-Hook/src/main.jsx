import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './useMemoHook'
import App from './useCallbackHook'

createRoot(document.getElementById('root')).render(
    <App />
)
