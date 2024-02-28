import { css } from '@emotion/react'
import { colors } from './colorPalette'

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.blue600};
    color: ${colors.white};
  `,
  reverse: css`
    background-color: ${colors.white};
    color: ${colors.blue600};
    border: 1px solid ${colors.blue600};
  `,
  success: css`
    background-color: ${colors.green500};
    color: ${colors.white};
  `,
  error: css`
    background-color: ${colors.red500};
    color: ${colors.white};
  `,
}

export const buttonWeakMap = {
  primary: css`
    background-color: ${colors.blue600};
    color: ${colors.white};
    border: 1px solid ${colors.blue600};
  `,
  reverse: css`
    background-color: ${colors.white};
    color: ${colors.blue600};
    border: 1px solid ${colors.blue600};
  `,
  success: css`
    background-color: ${colors.white500};
    color: ${colors.green500};
    border: 1px solid ${colors.green500};
  `,
  error: css`
    background-color: ${colors.white500};
    color: ${colors.red500};
    border: 1px solid ${colors.red500};
  `,
}

export const buttonSizeMap = {
  tiny: css`
    font-size: 14px;
    padding: 8px 18px;
  `,
}

export type ButtonColor = keyof typeof buttonColorMap
export type ButtonSize = keyof typeof buttonSizeMap
