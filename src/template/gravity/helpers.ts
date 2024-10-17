import { ItemState } from './OptionTwo'

export const radian = (n: number) => n * (Math.PI / 180)

interface DrawProps {
  canvas: React.MutableRefObject<HTMLCanvasElement | null>
  logoRef: React.MutableRefObject<HTMLImageElement | null>
  backgroundRef: React.MutableRefObject<HTMLImageElement | null>
  rotation: number
  state: ItemState[]
}
export const draw = (props: DrawProps) => {
  const { canvas, logoRef, rotation } = props
  const ctx = canvas?.current?.getContext('2d')
  const logo = logoRef.current
  if (!ctx || !logo) {
    return
  }
  const canvasWidth = canvas.current!.width
  const canvasHeight = canvas.current!.height
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // Code adapted from https://stackoverflow.com/a/3793474

  const x = props.state[0].x
  const y = props.state[0].y
  ctx.translate(x, y)
  ctx.rotate(rotation)
  // const { width, height } = logo
  const width = 60
  const height = width
  ctx.drawImage(logo, -width / 2, -height / 2, width, height)
  ctx.rotate(-rotation)
  ctx.translate(-x, -y)
}
