import {
  violetDarkA,
  violet,
  mauve,
  mauveA,
} from '@radix-ui/colors';

export const theme = {
  colors: {
    ...mauve,
    ...mauveA,
    ...violet,
    ...violetDarkA,

    primary: violetDarkA.violetA6,
    secondary: violet.violet8,
    lightGray: mauveA.mauveA3,
    accent: violet.violet12,
    black: mauveA.mauveA12,
    white: mauve.mauve1,
    gray: mauveA.mauveA8,
  }
}