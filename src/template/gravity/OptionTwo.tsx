import React, { useEffect, useRef } from 'react'
import './OptionTwo.css'
import backgroundPath from '@public/logos/reactLogo.svg'
import { draw, radian } from './helpers'
import logoPath from '@public/logos/pythonLogo.svg'

export interface ItemState {
  x: number
  y: number
  rotate: number
}
export const OptionTwo: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null)
  // Creating an imgRef to create an `Image` to draw the logo svg to
  const backgroundRef = useRef<HTMLImageElement | null>(null)
  const logoRef = useRef<HTMLImageElement | null>(null)
  // Angle in radians
  const rotationRef = useRef(0)

  const state: ItemState[] = initState()
  function initState(): ItemState[] {
    const h = canvas.current!.height
    const w = canvas.current!.width
    const states = []
    for (let i = 0; i < 10; i++) {
      const sign = Math.random() > 0.5 ? 1 : -1
      const s: ItemState = {
        x: (Math.random() * h) / 2,
        y: (Math.random() * w) / 2,
        rotate: Math.random() * 0.2 * sign,
      }
      states.push(s)
    }
    return states
  }
  const animate = () => {
    // When the component is unmounted, we will lose the canvas.current ref, so exit early to clean up
    if (!canvas.current) {
      return
    }
    const rotation = rotationRef.current
    draw({ canvas, backgroundRef, logoRef, rotation, state })
    rotationRef.current = rotation + radian(0.2)

    requestAnimationFrame(animate)
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
    // Start the animation function
    requestAnimationFrame(animate)
  }, [])

  return (
    <div>
      <p>draw something</p>
      <canvas ref={canvas} width={960} height={640} />
    </div>
  )
}
