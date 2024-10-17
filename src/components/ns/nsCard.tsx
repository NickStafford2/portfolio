import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useOutsideClick } from '@/hooks/use-outside-click.tsx'
import { ChevronDown } from 'lucide-react'
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

export function NsCard({
  children,
  img,
  expandSection,
  className,
  childContainerClassName,
  title,
  description,
  animate,
}: {
  children?: React.ReactNode
  img?: any
  expandSection?: boolean
  className?: string
  childContainerClassName?: string
  title?: string
  description?: string
  animate?: boolean
}) {
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
  // useOutsideClick(ref, () => setIsVisible(false))

  return (
    <motion.div
      // onClick={() => setIsVisible(!isVisible)}
      className={cn('group relative w-full p-[4px]', className)}
      ref={ref}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVarients}
    >
      <motion.div
        variants={animate ? borderVariants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />
      <motion.div
        variants={animate ? borderVariants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-3xl will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />

      <div
        className={cn(
          'relative z-10 h-full w-full rounded-[22px] bg-background',
          childContainerClassName
        )}
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
        {/* <Accordion type="single" collapsible className="w-full"> */}
        {/*   <AccordionItem value="item-1"> */}
        {/*     <AccordionTrigger> */}
        {/*       {!!title && <h2 className="text-2xl">{title}</h2>} */}
        {/*       {!!description && ( */}
        {/*         <h2 className="text-large text-gray-400 }">{description}</h2> */}
        {/*       )} */}
        {/*     </AccordionTrigger> */}
        {/*     <AccordionContent>{children}</AccordionContent> */}
        {/*   </AccordionItem> */}
        {/* </Accordion> */}
        <motion.div
          className="overflow-hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={expandableVarients}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {!!expandSection && <div className="h-36"></div>}
        </motion.div>
      </div>
    </motion.div>
  )
}
