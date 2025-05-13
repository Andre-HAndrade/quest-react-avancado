import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
}

const darkTheme = {
  background: '#222222',
  text: '#ffffff',
}

export const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}