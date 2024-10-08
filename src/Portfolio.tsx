import App from './App'
import { StrictMode } from 'react'
import Header from './template/Header'
// import Sidebar from './template/Sidebar'

import BackgroundGrid from '@/components/edil-ozi/background-grid'

export function Portfolio() {
  return (
    <StrictMode>
      <Header></Header>
      <div className="py-24 ">
        {/* <Sidebar></Sidebar> */}
        <App />

        <section
          className="fixed top-0 bottom-0 left-0 right-0 bg-black dark:bg-black"
          style={{ zIndex: -999 }}
        >
          <BackgroundGrid />
        </section>
      </div>
    </StrictMode>
  )
}
