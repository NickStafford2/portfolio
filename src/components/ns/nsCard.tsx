import { BackgroundGradient } from '@/components/ui/background-gradient.tsx'
import React, { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click.tsx'

const expandableVarients = {
  hidden: { height: 0, cursor: 'pointer' },
  visible: { height: 'auto', cursor: 'default' },
}

const containerVarients = {
  hidden: { cursor: 'pointer' },
  visible: { cursor: 'default' },
}

export function NsCard({
  children,
  title,
}: {
  children?: React.ReactNode
  title?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isVisible])
  useOutsideClick(ref, () => setIsVisible(false))

  return (
    <BackgroundGradient
      onClick={() => setIsVisible(!isVisible)}
      className="h-full w-full rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900"
    >
      <motion.div
        ref={ref}
        animate={isVisible ? 'visible' : 'hidden'}
        variants={containerVarients}
      >
        {!!title && <h2 className="text-xl">{title}</h2>}
        <motion.div
          className="overflow-hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={expandableVarients}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {children}
        </motion.div>
      </motion.div>
    </BackgroundGradient>
  )
}
