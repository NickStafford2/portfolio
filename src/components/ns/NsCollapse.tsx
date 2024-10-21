import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const expandableVarients = {
  hidden: { height: 0, cursor: 'pointer' },
  visible: { height: 'auto', cursor: 'default' },
}

const containerVarients = {
  hidden: { cursor: 'pointer' },
  visible: { cursor: 'default' },
}

const borderVariants = {
  initial: {
    backgroundPosition: '0 50%',
  },
  animate: {
    backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
  },
}
const NsCollapse = ({
  children,
  className,
  title,
  description,
}: {
  children?: React.ReactNode
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
  )
}

export default NsCollapse
