import { Global } from "@emotion/react"
import { theme } from './theme';

export const GlobalStyles = () => (
  <Global
    styles={`
      //CSS Reset
      //Credit: https://www.joshwcomeau.com
      *, *::before, *::after {
        box-sizing: border-box;
      }
      * {
        margin: 0;
        line-height: calc(1em + 0.725rem)
      }
      html, body {
        height: 100%;
      }
      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }
      input, button, textarea, select {
        font: inherit;
      }
      p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
      }
      #root {
        isolation: isolate;
      }

      //General global styles
      html, body {
        font-size: 18px;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.lightGray}
        color: ${theme.colors.black}
      }
    `}
  />
)