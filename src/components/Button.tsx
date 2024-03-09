import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakMap,
} from '@/styles/button'
import { typographyMap, Typography } from '@/styles/typography'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
  typography?: Typography
  bold?: boolean
}
const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '10px',
    bold: true,
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'tiny' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
  ({ bold }) =>
    bold
      ? css`
          font-weight: bold;
        `
      : css`
          font-weight: normal;
        `,
  ({ typography = 't5' }) => typographyMap[typography],
)

export default Button
