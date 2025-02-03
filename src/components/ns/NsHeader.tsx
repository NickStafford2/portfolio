import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'
import HeaderLink from '@/Header/HeaderLink.tsx'
import IceboxLogin from '@/icebox/IceboxLogin.tsx'
// import ThemeSwitcher from './ThemeSwitcher.tsx'
// import ThemeSwitch from '@/ThemeSwitch.tsx'

const borderVariants = {
  initial: {
    backgroundPosition: '0 50%',
  },
  animate: {
    backgroundPosition: ['0 50%', '100% 50%', '0 50%'],
  },
}
export default function NsHeader() {
  return (
    <>
      <div className="fixed z-20 h-[calc(2px+var(--header-height))] w-full">
        <motion.div
          variants={borderVariants}
          className={cn(
            'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100',
            'bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--ns-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--ns-accent),#141316)]'
          )}
          initial="initial"
          animate="animate"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        ></motion.div>
        <motion.div
          variants={borderVariants}
          className="absolute h-full w-full bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--ns-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--ns-primary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--ns-accent),#141316)]"
          initial="initial"
          animate="animate"
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        ></motion.div>
      </div>

      <div className="fixed z-30 flex h-[var(--header-height)] w-full items-stretch justify-between gap-[2px] bg-transparent text-[var(--ns-primary)]">
        {/* <Button onClick={() => sendDataToParent()}>Sidebar</Button> */}
        <div className="flex-shrink-0">
          <HeaderLink className="bg-background" href="#">
            <h1 className="hidden px-4 text-2xl font-semibold sm:flex">
              Nicholas Stafford
            </h1>
            <h1 className="flex sm:hidden">Contact</h1>
          </HeaderLink>
        </div>
        {/* <ThemeSwitcher></ThemeSwitcher> */}
        <div className="hidden h-full w-full bg-background sm:flex"></div>
        <div className="flex flex-grow flex-row items-center justify-stretch gap-[2px] align-middle">
          <HeaderLink className="" href="#aboutme">
            About Me
          </HeaderLink>
          <HeaderLink className="bg-background" href="#skills">
            Skills
          </HeaderLink>
          <HeaderLink className="bg-background" href="#projects">
            Projects
          </HeaderLink>
          <HeaderLink className="bg-background" href="#thoughts">
            Thoughts
          </HeaderLink>
        </div>
        <div className="hidden h-full w-full bg-background sm:flex"></div>
        <div className="hidden lg:flex">
          <Popover>
            <PopoverTrigger asChild>
              <HeaderLink className="bg-background text-accent">
                Icebox Login
              </HeaderLink>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <IceboxLogin></IceboxLogin>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  )
}
