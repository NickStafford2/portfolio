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
  const className = 'h-12 w-12 text-primary'
  const svgElement = React.isValidElement(svg)
    ? React.cloneElement(svg, { className })
    : svg
  return (
    <div className="flex w-[12em] min-w-[12em] max-w-[12em] flex-row gap-2">
      <div className="flex h-20 max-h-20 min-h-20 w-20 min-w-20 max-w-20 items-center justify-center rounded-full border-4 border-[var(--ns-primary)]">
        <div className="color-[var(--ns-primary)]">{svgElement}</div>
      </div>
      <div className="flex w-full flex-col pt-4">
        {/* <Progress className="color[var(--ns-primary)]" value={skill}></Progress> */}
        <h2 className="text-xl font-semibold text-[var(--ns-primary)]">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
