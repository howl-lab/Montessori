// main.tsx — the entry point of your React app.
// React 18 uses createRoot instead of the old ReactDOM.render()

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/variables.css'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // StrictMode runs extra checks in development to help catch bugs early
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
