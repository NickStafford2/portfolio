import React from 'react'

export default function HeaderLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      className="h-full w-28 text-[var(--ns-prrimary)] border-[var(--ns-primary)] border-r-[1px] first:border-l-[1px] font-semibold flex flex-row justify-center items-center hover:bg-[var(--ns-primary)] hover:text-black transition-[background-color] hover:duration-0 duration-700"
    >
      <span className="">{children}</span>
    </a>
  )
}
