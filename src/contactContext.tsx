import { createContext } from 'react'

// Define the context's type
interface ContactContextType {
  contactOpen: boolean
  setContactOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// Set the default value to an object with the initial state and no-op for setContactOpen
export const ContactContext = createContext<ContactContextType>({
  contactOpen: false,
  setContactOpen: () => {}, // no-op function as default
})
