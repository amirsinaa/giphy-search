import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      secondary: string
      lightGray: string
      primary: string
      accent: string
      black: string
      gray: string
    }
  }
}
