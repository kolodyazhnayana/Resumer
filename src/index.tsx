import React from 'react'
import ReactDOM from 'react-dom/client'
import 'app/index.scss'
import App from 'app'

const root = ReactDOM.createRoot(
  /* eslint-disable */
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
