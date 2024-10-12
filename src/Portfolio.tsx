import App from './App'
import { StrictMode, useState } from 'react'
import Header from './template/Header'
import Sidebar from './template/Sidebar'
import { motion } from 'framer-motion'
import BackgroundGrid from '@/components/edil-ozi/background-grid'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

const appVariants = {
  open: { paddingLeft: '100px' },
  closed: { paddingLeft: 0 },
}

export function Portfolio() {
  const [isOpen, setIsOpen] = useState(false)

  function handleDataFromChild() {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <StrictMode>
      <Header sendDataToParent={handleDataFromChild}></Header>
      <div className="py-[64px] flex flex-row">
        <motion.aside
          animate={isOpen ? 'open' : 'closed'}
          variants={variants}
          className="py-14 fixed left-0 top-[100px] bottom-0 w-[300px]"
        >
          <Sidebar></Sidebar>
        </motion.aside>
        <motion.div
          // className="overflow-x-hidden"
          animate={isOpen ? 'open' : 'closed'}
          variants={appVariants}
        >
          <App />
        </motion.div>

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
