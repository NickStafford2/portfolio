import React from 'react'
import { Progress } from '../ui/progress'

export default function NsSkill({
  title,
  svg,
  skill,
  description,
}: {
  title: string
  svg: React.ReactNode
  skill: number
  description?: string
}) {
  return (
    <div className="flex flex-row gap-2">
      <div className="border-[var(--ns-primary)] border-4 rounded-full h-20 min-h-20 max-h-20 w-20 min-w-20 max-w-20 flex items-center justify-center">
        <div className="color-[var(--ns-primary)]">{svg}</div>
      </div>
      <div className="flex flex-col w-full pt-4">
        <Progress className="color[var(--ns-primary)]" value={skill}></Progress>
        <h2 className="text-xl text-[var(--ns-primary)]">{title}</h2>
        {/* <p>{description}</p> */}
      </div>
    </div>
  )
}
