import { createGlobalStyle } from 'styled-components'

export const themes = {
  palette: {
    mine_shaft: '#242424',
    mercury: '#e3e3e3',
    black: '#000000',
    green: '#77f779',
    red: '#f52727',
    gray: '#5f5f5f',
  },
  fontFamily: {},
  size: {
    x_large: '64px',
    large: '48px',
    middle: '32px',
    small: '16px',
  },
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BIZUDPMincho;
    src: url(./font/BIZUDPMincho-Regular.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: BIZUDPMincho, sans-serif;
    text-rendering: optimizeLegibility;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    display: flex;
    background: ${({ theme }) =>
      `radial-gradient(${theme.gray},${theme.mine_shaft})`};
    white-space: pre-line; /* This command allow you to use escape character */
  }
`
