import { Global } from "@emotion/react"

export const GlobalStyles = () => (
  <Global
    styles={`
      @keyframes SpinnerRotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
  />
)