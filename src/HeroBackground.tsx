import { ThemeContextType } from '@/context/theme'
import { ThemeContext } from '@/context/ThemeProvider'
import { cn } from '@/lib/utils'
import { HTMLProps, useContext } from 'react'

export default function HeroBackground() {
  const { theme } = useContext(ThemeContext) as ThemeContextType
  if (theme == 'dark') {
    return (
      <div className="hero-video">
        <video
          className="absolute bottom-0 min-h-full min-w-[calc(100vh*16/9)] overflow-x-hidden"
          autoPlay
          loop
          muted
          style={{
            // transform: 'rotateX(180deg)',
            zIndex: -998,
            boxShadow: '0px 0px 105px 45px rgba(46,213,255,0.9)',
          }}
        >
          <source src="hero-binary-code.mov" type="video/mp4" />
        </video>
      </div>
    )
  }
  return (
    <div className="hero-gradient absolute left-0 top-0 z-[-996] h-full w-full"></div>
  )
}
