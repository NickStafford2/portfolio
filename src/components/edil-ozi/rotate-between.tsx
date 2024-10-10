import { FC, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Quote } from '@/template/QuoteBox'

interface Props {
  quotes: Quote[]
  className?: string
}
const RotateBetween: FC<Props> = ({ quotes, className }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={quotes[index].text}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'font-display font-bold tracking-[-0.02em] drop-shadow-sm',
          className
        )}
      >
        {quotes[index].text} - {quotes[index].source}
      </motion.p>
    </AnimatePresence>
  )
}

export default RotateBetween
