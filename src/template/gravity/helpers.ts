import { ItemState } from './OptionTwo'

export const radian = (n: number) => n * (Math.PI / 180)

interface DrawProps {
  canvas: React.MutableRefObject<HTMLCanvasElement | null>
  backgroundRef: React.MutableRefObject<HTMLImageElement | null>
  stateRef: React.MutableRefObject<ItemState[] | undefined>
  logoSize: number
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
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  for (const s of state) {
    if (!s.logo) {
      return
    }
    ctx.save()
    ctx.translate(s.x, s.y)
    ctx.rotate(s.rotate)
    const width = props.logoSize
    const height = width
    ctx.drawImage(s.logo, (width / 2) * -1, (height / 2) * -1, width, height)
    ctx.restore()
  }
}
