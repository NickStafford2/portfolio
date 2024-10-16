import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label.tsx'
import { useState } from 'react'

export default function ThemeSwitcher() {
  const themes = ['light', 'dark']
  function changeTheme() {
    console.log(theme)
    let next
    const root = document.documentElement
    const current = theme
    if (theme === themes[0]) next = themes[1]
    else next = themes[0]
    if (root.classList.contains(current)) root.classList.remove(current)
    setTheme(next)
    root.classList.add(next)
  }
  const [theme, setTheme] = useState('dark')

  return (
    <div className="flex gap-2 flex-row flex-grow justify-center items-center align-middle">
      <Label>Theme: {theme}</Label>
      <Button onClick={() => changeTheme()}>{`Change Theme`}</Button>
    </div>
  )
}
