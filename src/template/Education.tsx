import React, { useEffect, useRef, useState } from 'react'
import { useOutsideClick } from '@/hooks/use-outside-click.tsx'
import { NsCard } from '@/components/ns/nsCard'

export function Education() {
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
    <div className="pt-30">
      <h1 className="text-3xl pb-4">Education</h1>
      <NsCard
        className="mb-4"
        title="
            M.S of Computer Science (in progress) - Kent State University"
      >
        <p>
          In progress. I am a graduate student at Kent State. Currently studying
          Cryptography and AI.
        </p>
        Current Courses:
        <ul className="list-desc">
          <li>Artificial Intelligence</li>
          <li>Secure Programming</li>
          <li>Cryptography</li>
          <li>Graph Algorithms</li>
          <li>iOS Programming</li>
        </ul>
      </NsCard>
      <NsCard title="B.S Computer Science. GPA: 3.958 - Kent State University">
        <p>You have no idea how much that A- in Latin class still urks me.</p>
      </NsCard>
    </div>
  )
}
