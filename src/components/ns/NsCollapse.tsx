import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const NsCollapse = ({
  children,
  className,
  img,
  title,
  description,
  startVisible = false,
}: {
  children?: React.ReactNode
  img?: any
  className?: string
  title?: string
  description?: string
  startVisible?: boolean
}) => {
  const [isVisible, setIsVisible] = useState(startVisible)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isVisible])
  // useOutsideClick(ref, () => setIsVisible(false))
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Collapsible open={isVisible} onOpenChange={setIsVisible}>
        <CollapsibleTrigger
          className={cn(
            'flex w-full flex-1 flex-row items-start justify-between rounded-t-[22px] border-b-[1px] border-b-border p-4 py-4 text-left font-medium transition-all [&[data-state=closed]]:border-b-[0px] [&[data-state=open]>svg]:rotate-180',
            className
          )}
        >
          <div className="flex flex-grow flex-col gap-2">
            {!!title && <h2 className="text-3xl text-accent">{title}</h2>}
            {!!description && (
              <h3 className="text-lg text-primary">{description}</h3>
            )}
          </div>
          <ChevronDown className="h-8 w-8 shrink-0 pl-3 transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="text-md overflow-hidden p-4 transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default NsCollapse
