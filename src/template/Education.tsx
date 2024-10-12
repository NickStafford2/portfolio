import { BackgroundGradient } from '@/components/ui/background-gradient.tsx'
import React, { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click.tsx'
import { NsCard } from '@/components/ns/nsCard'

const varients = {
  hidden: { height: 0, cursor: 'pointer' },
  visible: { height: 'auto', cursor: 'default' },
}

const containerVarients = {
  hidden: { cursor: 'pointer' },
  visible: { cursor: 'default' },
}

export function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

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
    <div className="min-h-screen pt-30">
      <h1 className="text-3xl pb-4">Education</h1>
      <NsCard title="test">
        <p>testing</p>
      </NsCard>
      <BackgroundGradient
        onClick={() => setIsVisible(!isVisible)}
        className="h-full w-full rounded-[22px] p-4 sm:p-4 bg-white dark:bg-zinc-900"
      >
        <motion.div
          ref={ref}
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVarients}
        >
          <h2 className="text-xl">
            M.S of Computer Science (in progress) - Kent State University
          </h2>
          <motion.div
            className="overflow-hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={varients}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>
              In progress. I am a graduate student at Kent State. Currently
              studying Cryptography and AI.
            </p>
            Current Courses:
            <ul className="list-desc">
              <li>Artificial Intelligence</li>
              <li>Secure Programming</li>
              <li>Cryptography</li>
              <li>Graph Algorithms</li>
              <li>iOS Programming</li>
            </ul>
          </motion.div>
        </motion.div>
      </BackgroundGradient>
      <BackgroundGradient className="h-full rounded-[22px]  p-4 sm:p-4 bg-white dark:bg-zinc-900">
        <h2 className="text-xl ">
          B.S Computer Science. GPA: 3.958 - Kent State University
        </h2>
        <p>You have no idea how much that A- in Latin class still urks me.</p>
      </BackgroundGradient>
    </div>
  )
}
