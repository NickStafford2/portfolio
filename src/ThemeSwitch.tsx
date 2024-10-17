import { useContext, useEffect, useState } from 'react'
import { Switch } from './components/ui/switch'
// todo: remove
// import { FaReact as SunIcon } from 'react-icons/fa'
import { useLocalStorage } from 'usehooks-ts'
import { themes, Theme, ThemeContextType } from './context/theme.ts'
import React from 'react'
import { ThemeContext } from './context/ThemeProvider.tsx'

function ThemeSwitch() {
  const [themeLS, setThemeLS] = useLocalStorage('theme', 'light')
  // const [theme, setTheme] = useContext(ThemeContext)
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType

  useEffect(() => {
    // todo: use theme type in contextProvider
    themes.forEach((t: Theme) => {
      document.body.classList.remove(t)
    })
    document.body.classList.add(themeLS)
  }, [themeLS])

  const [enabled, setEnabled] = useState(themeLS == 'light')

  const handleThemeChange = (enabled: boolean) => {
    const newTheme: Theme = enabled ? 'light' : 'dark'
    setTheme(newTheme)
    setThemeLS(newTheme)
    setEnabled(enabled)
  }

  return (
    <div className="flex flex-col justify-center align-middle">
      <h2 className="pb-2 text-2xl font-semibold text-[--ns-primary]">
        Toggle Fun Mode:
      </h2>

      <Switch checked={enabled} onCheckedChange={handleThemeChange}>
        {/* <span className="sr-only">Use setting</span> */}
        {/* <span */}
        {/*   className={classNames( */}
        {/*     enabled ? 'translate-x-5' : 'translate-x-0', */}
        {/*     'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out' */}
        {/*   )} */}
        {/* > */}

        {/* <span */}
        {/*   className={classNames( */}
        {/*     enabled */}
        {/*       ? 'opacity-0 duration-100 ease-out' */}
        {/*       : 'opacity-100 duration-200 ease-in', */}
        {/*     'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity' */}
        {/*   )} */}
        {/*   aria-hidden="true" */}
        {/* > */}
        {/*   <SunIcon className="h-3 w-3 text-gray-400" /> */}
        {/* </span> */}
        {/* <span */}
        {/*   className={classNames( */}
        {/*     enabled */}
        {/*       ? 'opacity-100 duration-200 ease-in' */}
        {/*       : 'opacity-0 duration-100 ease-out', */}
        {/*     'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity' */}
        {/*   )} */}
        {/*   aria-hidden="true" */}
        {/* > */}
        {/*   <SunIcon className="h-3 w-3 text-yellow-600" /> */}
        {/* </span> */}

        {/* </span> */}
      </Switch>
      <p className="text-center font-semibold text-[--ns-primary]">{theme}</p>
      <p className="text-center font-semibold text-[--ns-primary]">
        {theme === 'light' ? 'boring' : 'fun'}
      </p>
    </div>
  )
}

export default ThemeSwitch
