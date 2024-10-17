import { useEffect, useState } from 'react'
import { Switch } from './components/ui/switch'
import { FaReact as SunIcon } from 'react-icons/fa'
import { useLocalStorage } from 'usehooks-ts'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const [enabled, setEnabled] = useState(theme == 'light')

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'light' : 'dark')
    setEnabled(enabled)
  }

  return (
    <div className="flex flex-col align-middle">
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
    </div>
  )
}

export default ThemeSwitch
