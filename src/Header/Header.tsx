// import { FloatingDock } from '@/components/ui/floating-dock'
// import { Button } from '@/components/ui/button'
// import { FaRegSnowflake } from 'react-icons/fa'
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from '@tabler/icons-react'

import HeaderLink from './HeaderLink.tsx'

// const links = [
//   {
//     title: 'Home',
//     icon: (
//       <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#home',
//   },
//
//   {
//     title: 'Experience',
//     icon: (
//       <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#experience',
//   },
//
//   {
//     title: 'Projects',
//     icon: (
//       <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#projects',
//   },
//
//   {
//     title: 'Beyond Code',
//     icon: (
//       <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#beyond-code',
//   },
//
//   {
//     title: 'Twitter',
//     icon: (
//       <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#',
//   },
//   {
//     title: 'GitHub',
//     icon: (
//       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#',
//   },
//   {
//     title: 'resume',
//     icon: (
//       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#',
//   },
//   {
//     title: 'Icebox Login',
//     icon: (
//       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
//     ),
//     href: '#',
//   },
// ]

export default function Header() {
  return (
    <div className="fixed flex items-center justify-between w-full bg-gray-800 z-30 gap-3 h-[var(--header-height)] text-[var(--ns-primary)] border-b-border border-b-[1px]">
      {/* <Button onClick={() => sendDataToParent()}>Sidebar</Button> */}
      <h1 className="pl-4 text-2xl">
        <a href="#home" className="font-semibold">
          Nicholas Stafford
        </a>
      </h1>
      <div className="flex flex-row h-full flex-grow justify-center items-center gap-0 align-middle">
        <HeaderLink href="#experience">Experience</HeaderLink>
        <HeaderLink href="#projects">Projects</HeaderLink>
        <HeaderLink href="#skills">Skills</HeaderLink>
        <HeaderLink href="#blog">Blog</HeaderLink>
        <HeaderLink href="#aboutme">About Me</HeaderLink>
      </div>
      {/* <FloatingDock items={links} /> */}
      <a className="pr-4">Icebox Login</a>
    </div>
  )
}
