import * as React from 'react'

import { cn } from '@/lib/utils'

export interface HeaderLinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement> {}

const HeaderLink = React.forwardRef<HTMLAnchorElement, HeaderLinkProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        className={cn(
          'flex h-full min-w-28 flex-grow flex-row items-center justify-center bg-background font-semibold text-[var(--ns-primary)] transition-[background-color] duration-700 hover:bg-[var(--ns-primary)] hover:text-black hover:duration-0',
          className
        )}
        ref={ref}
        {...props}>
        <span className="">{children}</span>
      </a>
    )
  }
)
export default HeaderLink
