import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
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

const borderVariants = {
  initial: {
    backgroundPosition: '0 50%',
  },
  animate: {
    backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
  },
}

export function NsCard({
  children,
  className,
  childContainerClassName,
  title,
  description,
  animate,
}: {
  children?: React.ReactNode
  className?: string
  childContainerClassName?: string
  title?: string
  description?: string
  animate?: boolean
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
    <div
      onClick={() => setIsVisible(!isVisible)}
      className={cn(' relative p-[4px] group w-full', className)}
    >
      <motion.div
        variants={animate ? borderVariants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform',
          ' bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />
      <motion.div
        variants={animate ? borderVariants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 rounded-3xl z-[1] will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />

      <div
        className={cn(
          'relative z-10 h-full w-full rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900',
          childContainerClassName
        )}
      >
        <motion.div
          ref={ref}
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVarients}
        >
          <div className="pb-6">
            {!!title && <h2 className="text-2xl">{title}</h2>}
            {!!description && (
              <h2 className="text-large text-gray-400}">{description}</h2>
            )}
          </div>
          <motion.div
            className="overflow-hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={expandableVarients}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
