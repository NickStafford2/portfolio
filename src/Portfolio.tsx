import App from './App'
import { StrictMode, useState } from 'react'
import Header from './template/Header'
import Sidebar from './template/Sidebar'
import { motion } from 'framer-motion'
import BackgroundGrid from '@/components/edil-ozi/background-grid'
import { Button } from './components/ui/button'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}
export function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StrictMode>
      <Header></Header>
      <div className="py-24 flex flex-row">
        <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>Sidebar</Button>
        <motion.div
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className="py-24 fixed left-0 top-[100px] bottom-0 w-[300px]"
        >
          <Sidebar></Sidebar>
        </motion.div>
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
