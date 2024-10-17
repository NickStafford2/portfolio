import App from './App.tsx'
import { StrictMode, useState } from 'react'
import Header from '@/Header/Header.tsx'
import Sidebar from './template/Sidebar.tsx'
import { motion } from 'framer-motion'
import BackgroundGrid from '@/components/edil-ozi/background-grid'
import ThemeProvider from './context/ThemeProvider.tsx'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

const appVariants = {
  open: { paddingLeft: '100px' },
  closed: { paddingLeft: 0 },
}

export function Portfolio() {
  // add this back If I want a sidebar.
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StrictMode>
      <ThemeProvider>
        <Header></Header>
        <div className="flex flex-row py-[var(--header-height)]">
          <motion.aside
            animate={isOpen ? 'open' : 'closed'}
            variants={variants}
            className="fixed bottom-0 left-0 top-[100px] w-[300px] py-14"
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
            className="fixed bottom-0 left-0 right-0 top-0 bg-background"
            style={{ zIndex: -999 }}
          >
            <BackgroundGrid />
          </section>
        </div>
      </ThemeProvider>
    </StrictMode>
  )
}
