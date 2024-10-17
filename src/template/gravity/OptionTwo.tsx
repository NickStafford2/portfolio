import React, { useEffect, useRef } from 'react'
import './OptionTwo.css'
import backgroundPath from '@public/logos/reactLogo.svg'
import { draw, radian } from './helpers'
import angularLogo from '@public/logos/angularLogo.svg'
import reactLogo from '@public/logos/reactLogo.svg'
import javascriptLogo from '@public/logos/javascriptLogo.svg'
import cPlusPlusLogo from '@public/logos/cPlusPlusLogo.svg'
import pythonLogo from '@public/logos/pythonLogo.svg'
import neovimLogo from '@public/logos/neovimLogo.svg'
import viteLogo from '@public/logos/viteLogo.svg'
import webpackLogo from '@public/logos/webpackLogo.svg'
import githubLogo from '@public/logos/githubLogo.svg'
import angularJsLogo from '@public/logos/angularJsLogo.svg'

const logos = [
  angularLogo,
  reactLogo,
  javascriptLogo,
  cPlusPlusLogo,
  pythonLogo,
  neovimLogo,
  viteLogo,
  webpackLogo,
  githubLogo,
  angularJsLogo,
]
export interface ItemState {
  logo: HTMLImageElement
  x: number
  dx: number
  y: number
  dy: number
  rotate: number
  dr: number
}
export const OptionTwo: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const fps = 30

  // use these to slow down or speed up the speed of the bouncing icons
  const movementScaleFactor = 100 / fps
  const rotationScaleFactor = fps / 300

  // Creating an imgRef to create an `Image` to draw the logo svg to
  const backgroundRef = useRef<HTMLImageElement | null>(null)
  // Angle in radians
  const stateRef = useRef<ItemState[]>()

  function initState(): ItemState[] {
    const states = []
    for (const logo of logos) {
      // console.log(typeof logo)
      const sign = Math.random() > 0.5 ? 1 : -1
      const logo2 = new Image()
      logo2.src = logo
      const s: ItemState = {
        logo: logo2,
        x: Math.random() * canvas.current!.width,
        dx: (Math.random() - 0.5) * movementScaleFactor,
        y: Math.random() * canvas.current!.height,
        dy: (Math.random() - 0.5) * movementScaleFactor,
        rotate: Math.random() * sign,
        dr: Math.random() * rotationScaleFactor,
      }
      states.push(s)
    }
    return states
  }
  const animate = () => {
    setTimeout(() => {
      // When the component is unmounted, we will lose the canvas.current ref, so exit early to clean up
      if (!canvas.current || !stateRef.current) {
        return
      }
      for (const s of stateRef.current) {
        // console.log(s)
        s.rotate = s.rotate + s.dr
        s.x = s.x + s.dx
        if (s.x > canvas.current.width) {
          s.dx = -1 * Math.abs(s.dx)
        } else if (s.x < 0) {
          s.dx = Math.abs(s.dx)
        }
        s.y = s.y + s.dy
        if (s.y > canvas.current.height) {
          s.dy = -1 * Math.abs(s.dy)
        } else if (s.y < 0) {
          s.dy = Math.abs(s.dy)
        }
      }
      // console.log(stateRef)
      draw({ canvas, backgroundRef, stateRef })

      requestAnimationFrame(animate)
    }, 1000 / fps)
  }

  useEffect(() => {
    // Load the images when the page mounts. Because we're using a ref,
    // they don't need to be in the dependency array or trigger a re-render
    // const background = new Image()
    // background.src = backgroundPath
    // background.style.width = '100'
    // background.style.height = '100'
    // background.onload = () => {
    //   backgroundRef.current = background
    // }
    // maybe load this once at start somehow?
    stateRef.current = initState()
    // Start the animation function
    requestAnimationFrame(animate)
  }, [])

  return (
    <div>
      <p>I don't know why I made this. I was having too much fun. </p>
      <canvas ref={canvas} width={960} height={640} />
    </div>
  )
}
