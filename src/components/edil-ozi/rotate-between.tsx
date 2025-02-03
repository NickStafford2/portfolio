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
      <motion.div
        key={quotes[index].text}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'font-display flex-column bg-blue flex font-bold tracking-[-0.02em] drop-shadow-sm',
          className
        )}
      >
        <p>"{quotes[index].text}"</p>
        <p className="text-right text-gray-400">- {quotes[index].source}</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default RotateBetween
