import React, { createContext, ReactNode, useState } from 'react'
import { Theme, ThemeContextType } from './theme.ts'

export const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>('light')
  return (
    <ThemeContext.Provider value={{ theme: themeMode, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
/*
interface ThemeContextProps extends React.HTMLProps<e{}

function ThemeProvider({ children, ...props }: ThemeContextProps) {
  return (
    <>
      <ThemeContext.Provider>{children}</ThemeContext.Provider> 
    </>
  )
}
export { ThemeContext as ThemeContext, ThemeProvider }
*/
