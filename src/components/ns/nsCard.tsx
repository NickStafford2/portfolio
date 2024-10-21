import { cn } from '@/lib/utils'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import NsCollapse from './NsCollapse'

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
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      // onClick={() => setIsVisible(!isVisible)}
      className={cn('group relative min-h-4 w-full p-[4px]', className)}
    >
      <div
        className={cn(
          'absolute inset-0 z-[1] min-h-4 rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />
      <div
        className={cn(
          'absolute inset-0 z-[1] min-h-4 rounded-3xl will-change-transform',
          'bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]'
        )}
      />

      <div
        className={cn(
          'relative z-10 h-full min-h-4 w-full rounded-[22px] bg-background',
          childContainerClassName
        )}
        style={{
          backgroundImage: `url('${img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {children}
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
        {/* <motion.div */}
        {/*   className="overflow-hidden" */}
        {/*   animate={isVisible ? 'visible' : 'hidden'} */}
        {/*   variants={expandableVarients} */}
        {/*   transition={{ duration: 0.3, ease: 'easeInOut' }} */}
        {/* > */}
        {/*   {!!expandSection && <div className="h-36"></div>} */}
        {/* </motion.div> */}
      </div>
    </div>
  )
}
