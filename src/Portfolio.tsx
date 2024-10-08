import App from './App'
import { StrictMode } from 'react'
import Header from './template/Header'
import Sidebar from './template/Sidebar'

export function Portfolio() {
  return (
    <StrictMode>
      <Header></Header>
      <div className="page">
        <Sidebar></Sidebar>
        <App />
      </div>
    </StrictMode>
  )
}
