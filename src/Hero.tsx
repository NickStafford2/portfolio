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
      className="col-span-11 col-start-2 flex min-h-[calc(100vh-64px)] flex-row items-start justify-between gap-6 py-24">
      <div className="flex h-full w-full flex-grow-0 flex-col justify-between gap-5">
        <HeroSvgText />
        <div className="flex flex-grow flex-col justify-between gap-6 pt-16 lg:flex-row">
          <div className="flex flex-col justify-between">
            <div>
              <button
                onClick={() => {
                  setContactOpen(!contactOpen)
                }}
                className="mt-16 self-start text-4xl">
                <NsCard
                  className="p-[4px]"
                  childContainerClassName="p-2 text-nowrap bg-transparent text-6xl font-bold text-[var(--ns-background)]">
                  Contact Me
                </NsCard>
              </button>
            </div>

            <div className="invisible w-[15em] max-w-[30em] lg:visible xl:w-[12em] 2xl:w-[30em]">
              <div className="font-light text-[var(--ns-primary)]">
                <a
                  href="#aboutme"
                  className="text-text text-nowrap py-6 pr-6 text-3xl hover:text-accent">
                  See what else I do...
                </a>
              </div>
            </div>
          </div>
          <ContactMe />
        </div>
      </div>
    </div>
  )
}
