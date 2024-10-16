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
      className={cn(' relative p-[4px] group w-full', className)}
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
          'absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform',
          ' bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
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
          'absolute inset-0 rounded-3xl z-[1] will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />

      <div
        className={cn(
          'relative z-10 h-full w-full rounded-[22px]  dark:bg-zinc-900',
          childContainerClassName
        )}
        style={{
          backgroundImage: `url('/public/${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Collapsible open={isVisible} onOpenChange={setIsVisible}>
          <CollapsibleTrigger
            className={cn(
              'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-full  p-4 rounded-t-[22px] bg-blue-700/15 border-b-border border-b-[1px] [&[data-state=closed]]:border-b-[0px]',
              className
            )}
          >
            {!!title && <h2 className="text-2xl">{title}</h2>}
            {!!description && (
              <h2 className="text-large text-gray-400 }">{description}</h2>
            )}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down p-4">
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
