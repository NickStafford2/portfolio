import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label.tsx'
import { useEffect, useLayoutEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark')
  const root = document.documentElement
  useLayoutEffect(() => {
    applyTheme(themes[0])
  })
  const themes = ['light', 'dark']

  const changeTheme = () => {
    console.log(theme)
    let next
    removeCurrentTheme()
    if (theme === themes[0]) next = themes[1]
    else next = themes[0]
    applyTheme(next)
  }

  function removeCurrentTheme() {
    const current = theme
    console.log(`before remove: ${root.classList}`)
    if (root.classList.contains(current)) root.classList.remove(current)
    console.log(`after remove: ${root.classList}`)
  }

  function applyTheme(next: string) {
    const root = document.documentElement
    setTheme(next)
    root.classList.add(next)
  }

  // useEffect(() => {
  //   changeTheme()
  // }, [theme])

  return (
    <div className="flex gap-2 flex-row flex-grow justify-center items-center align-middle">
      <Label>Theme: {theme}</Label>
      <Button onClick={() => changeTheme()}>{`Change Theme`}</Button>
    </div>
  )
}
