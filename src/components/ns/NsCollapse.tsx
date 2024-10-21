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
}: {
  children?: React.ReactNode
  img?: any
  className?: string
  title?: string
  description?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)

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
            'flex w-full flex-1 flex-row items-start justify-between rounded-t-[22px] border-b-[1px] border-b-border bg-blue-700/15 p-4 py-4 text-left font-medium transition-all hover:underline [&[data-state=closed]]:border-b-[0px] [&[data-state=open]>svg]:rotate-180',
            className
          )}
        >
          <div className="flex flex-grow flex-col">
            {!!title && <h2 className="text-2xl">{title}</h2>}
            {!!description && <h2 className="text-large }">{description}</h2>}
          </div>
          <ChevronDown className="h-8 w-8 shrink-0 pl-3 transition-transform duration-200" />
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden p-4 text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default NsCollapse
