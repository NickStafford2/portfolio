import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import HeaderLink from './HeaderLink.tsx'
import IceboxLogin from '@/icebox/IceboxLogin.tsx'
// import ThemeSwitcher from './ThemeSwitcher.tsx'
import ThemeSwitch from '@/ThemeSwitch.tsx'

export default function Header() {
  return (
    <div className="fixed z-30 flex h-[var(--header-height)] w-full items-stretch justify-between gap-3 border-b-[1px] border-b-border bg-gray-800 text-[var(--ns-primary)]">
      {/* <Button onClick={() => sendDataToParent()}>Sidebar</Button> */}
      <div>
        <HeaderLink href="#">
          <h1 className="text-2xl font-semibold">Nicholas Stafford</h1>
        </HeaderLink>
      </div>
      {/* <ThemeSwitcher></ThemeSwitcher> */}
      <div className="flex flex-grow flex-row items-center justify-center gap-0 align-middle">
        <HeaderLink href="#experience">Experience</HeaderLink>
        <HeaderLink href="#projects">Projects</HeaderLink>
        <HeaderLink href="#skills">Skills</HeaderLink>
        <HeaderLink href="#blog">Blog</HeaderLink>
        <HeaderLink href="#aboutme">About Me</HeaderLink>
      </div>
      <div className="">
        <Popover>
          <PopoverTrigger asChild>
            <HeaderLink>Icebox Login</HeaderLink>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <IceboxLogin></IceboxLogin>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
/*
 
          <motion.h1
            className="px-2 text-2xl font-semibold"
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.2,
              repeat: 0,
              // repeat: Infinity,
              // ease: stepEasing,
            }}
          >
            Nicholas Stafford
          </motion.h1>
 
 * */

