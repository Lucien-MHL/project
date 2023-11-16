import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/i18n'
import Theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
)
