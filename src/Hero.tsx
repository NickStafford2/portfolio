import TextWriter from '@/components/uiBeats/TextWriter.tsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import React from 'react'

export function Hero() {
  return (
    <div
      id="hero"
      className="min-h-[calc(100vh-64px)] bg-opacity-20 flex  justify-between flex-col pt-[280px]"
    >
      <div>
        <TextWriter
          text="Hello World"
          className="font-bold text-[#7fe5ff]  py-0 text-8xl mb-10 shadow-[0_35px_45px_-35px_rgba(127,229,255,0.9),inset_0_-55px_35px_-35px_rgba(0,0,0,0.9)]"
          delay={0.2}
        />
        <div className="max-w-[600px] bg-[#7fe5ff] mb-6 min-h-32 mt-10">
          <TextWriter
            text="
        My name is Nicholas Stafford. I am a web developer based in Cleveland,
        Ohio. Let me tell you a bit about myself. . .
      "
            className="text-2xl   font-semibold  text-black p-3 "
            delay={0.05}
          />
        </div>
      </div>
      <div className="flex flex-row  py-10 justify-between items-center ">
        <div className="flex flex-col flex-grow justify-center align-middle ">
          <a href="#experience">
            <span className="text-[#7fe5ff] text-3xl">Learn More:</span>
            <br />
            <FaChevronDown className="text-[#7fe5ff] text-[8em] opacity-30"></FaChevronDown>{' '}
          </a>
        </div>
        <span className="text-2xl align-center text-[#7fe5ff] ">- or -</span>
        <div className="flex flex-col flex-grow ">
          <a href="#" className="flex flex-col items-end align-bottom">
            <FaChevronUp className="text-[#7fe5ff] text-[8em] opacity-30"></FaChevronUp>{' '}
            <br />
            <span className="text-[#7fe5ff] text-3xl">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  )
}
