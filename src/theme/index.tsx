import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes, GlobalStyle } from './themes'

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
