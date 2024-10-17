import { ItemState } from './OptionTwo'

export const radian = (n: number) => n * (Math.PI / 180)

interface DrawProps {
  canvas: React.MutableRefObject<HTMLCanvasElement | null>
  backgroundRef: React.MutableRefObject<HTMLImageElement | null>
  stateRef: React.MutableRefObject<ItemState[] | undefined>
}
export const draw = (props: DrawProps) => {
  const { canvas, stateRef } = props
  const ctx = canvas?.current?.getContext('2d')
  const state = stateRef.current
  if (!ctx || !state) {
    console.error('oh no')
    return
  }
  const canvasWidth = canvas.current!.width
  const canvasHeight = canvas.current!.height
  // ctx.save()
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  // Code adapted from https://stackoverflow.com/a/3793474
  for (const s of state) {
    if (!s.logo) {
      return
    }
    ctx.save()
    // const x = canvasWidth / 2
    // const x = s.x
    // const y = s.y
    ctx.translate(s.x, s.y)
    // ctx.translate(s.x + canvasWidth / 2, s.y + canvasHeight / 2)
    // ctx.translate(x, y)
    ctx.rotate(s.rotate)
    // const { width, height } = logo
    const width = 60
    const height = width
    // ctx.drawImage(logo, -width / 2, -height / 2, width, height)
    ctx.drawImage(s.logo, (width / 2) * -1, (height / 2) * -1, width, height)
    // ctx.translate(-x, -y)
    ctx.restore()
  }
  // ctx.restore()
}
