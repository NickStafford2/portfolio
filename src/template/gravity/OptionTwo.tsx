import React, { useEffect, useRef } from 'react'
import { draw, radian } from './helpers'
import backgroundPath from '/logos/reactLogo.svg'
import angularLogo from '/logos/angularLogo.svg'
import reactLogo from '/logos/reactLogo.svg'
import javascriptLogo from '/logos/javascriptLogo.svg'
import cPlusPlusLogo from '/logos/cPlusPlusLogo.svg'
import pythonLogo from '/logos/pythonLogo.svg'
import neovimLogo from '/logos/neovimLogo.svg'
import viteLogo from '/logos/viteLogo.svg'
import webpackLogo from '/logos/webpackLogo.svg'
import githubLogo from '/logos/githubLogo.svg'
import angularJsLogo from '/logos/angularJsLogo.svg'

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
  const logoSize = 60
  const canvas = useRef<HTMLCanvasElement | null>(null)
  const fps = 30
  const dt = 1000 / fps

  // use these to slow down or speed up the speed of the bouncing icons
  const movementScaleFactor = 20 / fps
  const rotationScaleFactor = fps / 300

  const ddy = (9.8 / 1000 / 2) * dt * movementScaleFactor

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
        dx: (Math.random() - 0.5) * movementScaleFactor * 9,
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

        /*
        for (const o of stateRef.current) {
          if (o !== s) {
            if (
              Math.abs(s.x - o.x) < logoSize / 2 &&
              Math.abs(s.y - o.y) < logoSize / 2
            ) {
              // they are colliding, but make sure they are moving toward each other.
              console.log(`collision ${s}, ${o}`)
              // function dotProduct(a, b) {
              //   const result = a.reduce((acc, cur, index) => {
              //     acc += cur * b[index]
              //     return acc
              //   }, 0)
              //   return result
              // }
              // const a = [s.dx, s.dy]
              // const b = [o.dx, o.dy]
              // const c = dotProduct(a, b)
              // console.log(c)
              if (s.dx * o.dx > 0) {
                console.log('reversing x')
                s.dx *= -1
                o.dx *= -1
              }

              if (s.dy * o.dy > 0) {
                console.log('reversing y')
                s.dy *= -1
                o.dy *= -1
              }
            }
          }
        }
*/
        // since the edges hit the border before the center, turn them around when their edge hits the canvas edge
        // use 1/3 instead of 1/2 because the overlap looks nicer
        s.x = s.x + s.dx
        if (s.x > canvas.current.width - logoSize / 3) {
          s.dx = -1 * Math.abs(s.dx)
        } else if (s.x < logoSize / 3) {
          s.dx = Math.abs(s.dx)
        }

        s.dy += ddy // gravity
        s.y = s.y + s.dy
        if (s.y > canvas.current.height - logoSize / 3) {
          s.dy = -1 * Math.abs(s.dy) - ddy
        } else if (s.y < logoSize / 3) {
          s.dy = Math.abs(s.dy)
        }
      }
      // console.log(stateRef)
      draw({ canvas, backgroundRef, stateRef, logoSize })

      requestAnimationFrame(animate)
    }, 1000 / fps)
  }

  useEffect(() => {
    // maybe load this once at start somehow?
    stateRef.current = initState()
    // Start the animation function
    requestAnimationFrame(animate)
  }, [])

  return (
    <div className="py-8">
      <p className="pb-4 text-2xl font-semibold">
        I made this simple animation to describe the tools I use. (It's a
        metaphore!)
      </p>
      <canvas
        ref={canvas}
        width={960}
        height={640}
        className="bg-gradient-to-t from-gray-700 to-cyan-800"
      />
    </div>
  )
}
