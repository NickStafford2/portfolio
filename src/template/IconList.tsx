export type Icon = {
  name: string
  svg: string
}

export function IconList({ icons }: { icons: Icon[] }) {
  return (
    <div className="flex flex-row">
      {icons.map((icon) => (
        <p>{icon.name}</p>
      ))}
    </div>
  )
}
