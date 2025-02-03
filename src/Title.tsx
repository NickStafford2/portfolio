import { cn } from '@/lib/utils'
import React from 'react'

export const Title1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn('text-7xl font-semibold text-primary', className)}
      {...props}
    >
      {children}
    </h1>
  )
})

export const Title2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-3xl font-semibold text-accent', className)}
      {...props}
    >
      {children}
    </h2>
  )
})

export const Title3 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-xl font-semibold text-primary', className)}
      {...props}
    >
      {children}
    </h3>
  )
})
