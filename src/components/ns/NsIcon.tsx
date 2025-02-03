import React from 'react'

export default function NsIcon({
  svg,
  name,
}: {
  svg: React.ReactNode
  name?: string
}) {
  const className = 'h-12 w-12 text-primary'
  const svgElement = React.isValidElement(svg)
    ? React.cloneElement(svg, { className })
    : svg
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-20 max-h-20 min-h-20 w-20 min-w-20 max-w-20 items-center justify-center rounded-full border-4 border-[var(--ns-primary)]">
        <div className="color-[var(--ns-primary)]">{svgElement}</div>
      </div>
      {name ? <span className="text-nowrap">{name}</span> : ''}
    </div>
  )
}
