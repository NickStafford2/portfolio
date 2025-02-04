import { NsCard } from './components/ns/nsCard'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ContactContext } from './contactContext'

export default function ContactMe() {
  // const [contactOpen, setIsVisible] = useState<boolean>(true)
  const { contactOpen, setContactOpen } = useContext(ContactContext)
  return (
    <div className="h-[16em] max-w-[35em] flex-shrink-0 self-end pr-2 md:h-[22em]">
      {contactOpen}
      <NsCard
        className="h-full"
        childContainerClassName="flex flex-col overflow-hidden">
        <button
          className="w-full py-6 text-primary hover:text-accent"
          onClick={() => setContactOpen(!contactOpen)} // Toggle the state on button click
        >
          {/* Button Content */}
          <span className="text-center">{contactOpen ? '>>' : '<<'}</span>
        </button>
        <motion.div
          className="flex h-full flex-row justify-around overflow-hidden px-6"
          initial={{ width: '4em', maxWidth: '4em' }}
          animate={{
            width: contactOpen ? '35em' : '4em',
            maxWidth: contactOpen ? 'min(100vw - 1em,35em)' : '4em',
          }}>
          <div className="flex flex-col justify-around pb-6 text-primary">
            <div className="flex flex-row items-center gap-4">
              <a
                href="mailto:ngstafford1@gmail.com"
                className="hover:text-accent">
                <MdOutlineEmail className="h-12 w-12" />
              </a>
              {contactOpen && 'ngstafford1@gmail.com'}
            </div>
            <a
              href="https://github.com/NickStafford2"
              className="flex flex-row items-center gap-4 hover:text-accent">
              <FaGithub className="h-12 w-12" />
              {contactOpen && 'https://github.com/NickStafford2'}
            </a>
            <a
              href="https://www.linkedin.com/in/nicholas-stafford-3ba90018a/"
              className="flex flex-row items-center gap-4 hover:text-accent">
              <FaLinkedin className="h-12 w-12" />
              {contactOpen &&
                'https://www.linkedin.com/in/nicholas-stafford-3ba90018a/'}
            </a>
          </div>
        </motion.div>
      </NsCard>
    </div>
  )
}
