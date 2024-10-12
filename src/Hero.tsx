import TextWriter from '@/components/uiBeats/TextWriter.tsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { AuroraBackground } from '@/components/ui/aurora-background.tsx'
import { motion } from 'framer-motion'
import React from 'react'

export function Hero() {
  return (
    <div
      id="hero"
      className="min-h-[calc(100vh-64px)] bg-opacity-20 flex  justify-between flex-col pt-[280px]"
    >
      {/* <AuroraBackground> */}
      {/*   <motion.div */}
      {/*     initial={{ opacity: 0.0, y: 40 }} */}
      {/*     whileInView={{ opacity: 1, y: 0 }} */}
      {/*     transition={{ */}
      {/*       delay: 0.3, */}
      {/*       duration: 0.8, */}
      {/*       ease: 'easeInOut', */}
      {/*     }} */}
      {/*     className="relative flex flex-col gap-4 items-center justify-center px-4" */}
      {/*   > */}
      {/*     <div className="text-3xl md:text-7xl font-bold dark:text-white text-center"> */}
      {/*       Background lights are cool you know. */}
      {/*     </div> */}
      {/*     <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4"> */}
      {/*       And this, is chemical burn. */}
      {/*     </div> */}
      {/*     <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"> */}
      {/*       Debug now */}
      {/*     </button> */}
      {/*   </motion.div> */}
      {/* </AuroraBackground>{' '} */}
      <TextWriter text="Hello World" className="text-8xl mb-6" delay={0.2} />
      <div className="max-w-[600px] pb-24">
        <TextWriter
          text="
        My name is Nicholas Stafford. I am a web developer based in Cleveland,
        Ohio. Let me tell you a bit about myself. . .
      "
          className="text-2xl mb-6"
          delay={0.05}
        />
      </div>
      <div className="flex flex-row w-full py-10 justify-between items-center ">
        <div className="flex flex-col flex-grow justify-center align-middle ">
          <a href="#education">
            <span className="text-5xl">Learn More:</span>
            <br />
            <FaChevronDown className="text-[10em] opacity-30"></FaChevronDown>{' '}
          </a>
        </div>
        <span className="text-4xl align-center">- or -</span>
        <div className="flex flex-col flex-grow ">
          <a href="#" className="flex flex-col items-end align-bottom">
            <FaChevronUp className="text-[10em] opacity-30"></FaChevronUp>{' '}
            <br />
            <span className="text-5xl">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  )
}
