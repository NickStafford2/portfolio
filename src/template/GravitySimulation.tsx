import React, { useEffect, useRef, useState } from 'react'

interface SquareProps {
  x: number
  y: number
  width: number
  height: number
  color: string
}

const Square: React.FC<SquareProps> = ({ x, y, width, height, color }) => {
  return (
    <svg width={width} height={height}>
      <rect x={x} y={y} width={width} height={height} fill={color} />
    </svg>
  )
}

const GravitySimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [squares, setSquares] = useState<SquareProps[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    const gravity = 0.5
    const bounceFactor = 0.8

    const createSquares = () => {
      const squares: SquareProps[] = []
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * (canvas.width - 50)
        const y = Math.random() * (canvas.height - 50)
        const width = 50
        const height = 50
        const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        squares.push({ x, y, width, height, color })
      }
      setSquares(squares)
    }

    const updateSquares = () => {
      const newSquares = squares.map((square) => {
        const newY = square.y + gravity
        if (newY + square.height >= canvas.height) {
          const newSpeed = -square.y * bounceFactor
          return { ...square, y: canvas.height - square.height, dy: newSpeed }
        } else {
          return { ...square, y: newY }
        }
      })
      setSquares(newSquares)
    }


let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2; // Horizontal speed
let dy = -2; // Vertical speed
const ballRadius = 10;
function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  // Update ball position
  x += dx;
  y += dy;

  // Bounce off the edges
  if (x + ballRadius > canvas.width || x - ballRadius < 0) {
    dx = -dx;
  }
  if (y + ballRadius > canvas.height || y - ballRadius < 0) {
    dy = -dy;
  }
    // const drawSquares = () => {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   squares.forEach((square) => {
    //     ctx.drawImage(document.createElement('svg'), square.x, square.y, square.width, square.height);
    //   });
    // };

    const animate = () => {
      updateSquares()
      // drawSquares();
      requestAnimationFrame(animate)
    }

    createSquares()
    animate()
  }, [])

  return <canvas ref={canvasRef} width={600} height={400} />
}

export default GravitySimulation
