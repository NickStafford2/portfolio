import TextWriter from '@/components/uiBeats/TextWriter'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { EvervaultCard } from './components/ui/evervault-card'

export function Hero() {
  return (
    <div
      id="hero"
      className="min-h-screen bg-opacity-20 flex justify-center flex-col"
    >
      <EvervaultCard text="hover" />
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
      <div className="flex flex-row w-full py-10 justify-between  items-center bg-opacity-30 bg-gray-600 ">
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
