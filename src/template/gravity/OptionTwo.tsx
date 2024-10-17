import React, { useEffect, useRef } from 'react'
import './OptionTwo.css'
import backgroundPath from '@public/logos/reactLogo.svg'
import { draw, radian } from './helpers'
import logoPath from '@public/logos/pythonLogo.svg'

export interface ItemState {
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
  const logoRef = useRef<HTMLImageElement | null>(null)
  // Angle in radians
  const rotationRef = useRef(0)
  const stateRef = useRef<ItemState[]>()

  function initState(): ItemState[] {
    const states = []
    for (let i = 0; i < 10; i++) {
      const sign = Math.random() > 0.5 ? 1 : -1
      const s: ItemState = {
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
      const rotation = rotationRef.current
      // console.log(stateRef)
      draw({ canvas, backgroundRef, logoRef, rotation, stateRef })
      rotationRef.current = rotation + radian(0.2)

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
    const logo = new Image()
    logo.src = logoPath
    logo.onload = () => {
      logoRef.current = logo
    }
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
