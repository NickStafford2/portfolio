import { FloatingDock } from '@/components/ui/floating-dock'
import { Button } from '@/components/ui/button'
import { FaRegSnowflake } from 'react-icons/fa'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react'

const links = [
  {
    title: 'Home',
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#home',
  },

  {
    title: 'Products',
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#skills',
  },

  {
    title: 'Components',
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },

  {
    title: 'Beyond Code',
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#beyond-code',
  },

  {
    title: 'Twitter',
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
  {
    title: 'GitHub',
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: '#',
  },
]

export default function Header({
  sendDataToParent,
}: {
  sendDataToParent: () => void
}) {
  return (
    <div className="fixed flex items-center justify-center w-full bg-gray-800 z-30 gap-3">
      <Button onClick={() => sendDataToParent()}>Sidebar</Button>
      <h1 className="text-2xl">Nicholas Stafford</h1>
      <FloatingDock items={links} />
      <Button>
        <FaRegSnowflake className="w-7 h-6" />
        <span className="pr-4">Resume</span>
      </Button>
      <Button>
        <span className="pr-4">Icebox Login</span>
        <FaRegSnowflake className="w-7 h-6" />
      </Button>
    </div>
  )
}
