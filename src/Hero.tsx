import { useContext } from 'react'
import ContactMe from './ContactMe'
// import './HeroBackgroundStars.css'
import HeroSvgText from './HeroSvgText'
import { NsCard } from './components/ns/nsCard'
import { ContactContext } from './contactContext'

export function Hero() {
  const { contactOpen, setContactOpen } = useContext(ContactContext)
  return (
    <div
      id="hero"
      className="col-span-11 col-start-2 flex max-h-[calc(100vh-64px)] min-h-[calc(100vh-64px)] flex-col justify-around gap-6">
      <div className="min-h-[8rem]">
        <HeroSvgText />
      </div>
      <div className="overflow-none flex flex-col justify-between gap-6 lg:flex-row">
        <div className="flex flex-col justify-between">
          <button
            onClick={() => {
              setContactOpen(!contactOpen)
            }}
            className="mt-16 flex-shrink self-start text-4xl">
            <NsCard
              className="p-[4px]"
              childContainerClassName="p-2 text-nowrap bg-transparent text-3xl lg:text-6xl font-bold text-[var(--ns-background)]">
              Contact Me
            </NsCard>
          </button>

          <a
            href="#aboutme"
            className="text-text hidden w-[15em] max-w-[30em] text-nowrap py-6 pr-6 text-3xl font-light text-[var(--ns-primary)] hover:text-accent lg:block xl:w-[12em] 2xl:w-[30em]">
            Learn more...
          </a>
        </div>
        <ContactMe />
      </div>
    </div>
  )
}
