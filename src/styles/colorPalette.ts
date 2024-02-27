import { css } from '@emotion/react'

export const colorPalette = css`
  :root {
    --black: #000;
    --white: #fff;

    --white-50: 'rgba(255, 255, 255, 0.04)';
  }
`
export const colors = {
  red: 'var(--red)',
  blue: 'var(--blue)',
  green: 'var(--green)',
  white: 'var(--white)',
  black: 'var(--black)',
  gray: 'var(--gray)',
  darkgray: 'var(--darkgray)',
}

export type Colors = keyof typeof colors
