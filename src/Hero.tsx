import TextWriter from '@/components/uiBeats/TextWriter.tsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import React from 'react'

export function Hero() {
  return (
    <div
      id="hero"
      className="flex min-h-[calc(100vh-64px)] flex-col justify-between bg-opacity-20 pt-[280px]"
    >
      <div>
        <TextWriter
          text="Hello World"
          className="mb-10 py-0 text-8xl font-bold text-[#7fe5ff] shadow-[0_35px_45px_-35px_rgba(127,229,255,0.9),inset_0_-55px_35px_-35px_rgba(0,0,0,0.9)]"
          delay={0.2}
        />
        <div className="mb-6 mt-10 min-h-32 max-w-[600px] bg-[#7fe5ff]">
          <TextWriter
            text="
        My name is Nicholas Stafford. I am a developer based in Cleveland,
        Ohio. Let me tell you a bit about myself. . .
      "
            className="p-3 text-2xl font-semibold text-black"
            delay={0.05}
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-10">
        <div className="flex flex-grow flex-col justify-center align-middle">
          <a href="#experience">
            <span className="text-3xl text-[#7fe5ff]">Learn More:</span>
            <br />
            <FaChevronDown className="text-[8em] text-[#7fe5ff] opacity-30"></FaChevronDown>{' '}
          </a>
        </div>
        <span className="align-center text-2xl text-[#7fe5ff]">- or -</span>
        <div className="flex flex-grow flex-col">
          <a href="#" className="flex flex-col items-end align-bottom">
            <FaChevronUp className="text-[8em] text-[#7fe5ff] opacity-30"></FaChevronUp>{' '}
            <br />
            <span className="text-3xl text-[#7fe5ff]">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  )
}
