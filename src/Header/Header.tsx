import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import HeaderLink from './HeaderLink.tsx'
import IceboxLogin from '@/icebox/IceboxLogin.tsx'
import ThemeSwitcher from './ThemeSwitcher.tsx'

export default function Header() {
  return (
    <div className="fixed flex items-stretch justify-between w-full bg-gray-800 z-30 gap-3 h-[var(--header-height)] text-[var(--ns-primary)] border-b-border border-b-[1px]">
      {/* <Button onClick={() => sendDataToParent()}>Sidebar</Button> */}
      <div>
        <HeaderLink href="#">
          <h1 className="text-2xl font-semibold">Nicholas Stafford</h1>
        </HeaderLink>
      </div>
      <ThemeSwitcher></ThemeSwitcher>
      <div className="flex flex-row flex-grow justify-center items-center gap-0 align-middle">
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
