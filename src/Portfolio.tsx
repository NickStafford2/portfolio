import { useState, StrictMode } from 'react'
import App from './App.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'
import WarpingOrbScene from './three/MyLoop/threeWithShaders.tsx'
import NsHeader from './components/ns/NsHeader.tsx'
import { ContactContext } from './contactContext.tsx'

// Create the context with the correct type

export function Portfolio() {
  const [contactOpen, setContactOpen] = useState<boolean>(false)
  return (
    <StrictMode>
      <ThemeProvider>
        {/* Provide the context value with the correct shape */}
        <ContactContext.Provider value={{ contactOpen, setContactOpen }}>
          {' '}
          <NsHeader />
          <App />
        </ContactContext.Provider>

        <WarpingOrbScene />
      </ThemeProvider>
    </StrictMode>
  )
}
