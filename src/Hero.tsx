import TextWriter from '@/components/uiBeats/TextWriter'
import { FaChevronDown } from 'react-icons/fa'

export function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-t from-cyan-50 to-gray-700 flex justify-center flex-col"
    >
      <TextWriter text="Hello World" className="text-8xl mb-6" delay={0.2} />
      <div className="max-w-[600px] ">
        <TextWriter
          text="
        My name is Nicholas Stafford. I am a web developer based in Cleveland,
        Ohio. Let me tell you a bit about myself. . .
      "
          className="text-2xl mb-6"
          delay={0.05}
        />
      </div>
      <div className="flex flex-row w-full py-10 justify-between pr-60">
        <div className="p-1">
          <a href="#education">
            <span className="text-5xl">Learn More:</span>
            <br />
            <FaChevronDown className="text-8xl"></FaChevronDown>{' '}
          </a>
        </div>
        <div className="p-1">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Contact me
            </span>
          </button>
          <p>Contact my business email at ngstafford1@gmail.com.</p>
        </div>
      </div>
    </div>
  )
}
