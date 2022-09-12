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
      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
        object-fit: cover;
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
        background-color: ${theme.colors.lightGray};
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='326' height='39.1' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23E05A7A' stroke-width='1.1' stroke-opacity='0.3'%3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
        color: ${theme.colors.black};
        display: flex;
        flex-direction: column;
      }
    `}
  />
)