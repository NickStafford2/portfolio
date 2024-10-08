import React from 'react'
import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from '@tabler/icons-react'

export default function Header() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },

    {
      title: 'Products',
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Components',
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <img
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '#',
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
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  )
}
// import {
//     motion,
//     useMotionValue,
//     useMotionValueEvent,
//     useScroll,
//     useTransform,
// } from 'framer-motion'
//
// import { useRef, useState } from 'react'
// import './Header.css'
//
// function Header() {
//     const [yText, setYText] = useState('40px')
//     const [y, setY] = useState(10)
//
//     const inputRef = useRef(null)
//     const { scrollYProgress, scrollY } = useScroll()
//     // useScroll({
//     //   target: ref,
//     //   offset: ["end end", "start start"]
//     // });
//     const handleInputChangeY = () => {
//         setYText(y + 'em')
//         // console.log(yText);
//     }
//     // const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
//     // const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
//     useMotionValueEvent(scrollY, 'change', (latest) => {
//         // console.log("Page scroll: ", latest);
//         let size = Math.min(40, 600 - latest) / 2
//         setYText(size + 'px')
//     })
//     // useMotionValueEvent(x, "animationStart", () => {
//     //   console.log("animation started on x")
//     // })
//     //
//     // useMotionValueEvent(x, "change", (latest) => {
//     //   console.log("x changed to", latest)
//     // })
//     return (
//         <>
//             <motion.nav
//                 className="header"
//                 animate={{ paddingTop: yText, paddingBottom: yText }}
//                 // transition={{ ease: "easeInOut", duration: 0.3 }}
//                 style={
//                     {
//                         // translateX: translate,
//                         // rotateX: rotate, // rotate in X-axis
//                         // position: "absolute"
//                     }
//                 }
//             >
//                 <h3 className="header-title">Nicholas Stafford</h3>
//                 <div className="gradient-box">
//                     <a>RESUME</a>
//                 </div>
//             </motion.nav>
//         </>
//     )
// }
//
// export default Header
