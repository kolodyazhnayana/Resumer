import React from 'react'
import './index.scss'
import { withProviders } from './providers'
import { Routing } from 'pages'

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  )
}

export default withProviders(App)
