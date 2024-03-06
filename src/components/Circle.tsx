import { Colors, colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface CircleProps {
  size: number
  backgroundColor?: Colors
  border?: boolean
}

const Circle = styled.div<CircleProps>(
  { borderRadius: '100%' },
  ({ border }) =>
    border
      ? css`
          border: 1px solid ${colors.gray400};
        `
      : null,
  ({ size }) => css`
    display: block;
    width: ${size}px;
    height: ${size}px;
  `,
  ({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${colors[backgroundColor]};
        `
      : css`
          background-image: url('/images/favicon.png');
          background-size: cover;
          background-position: calc(100% + 6px) center;
        `,
)

export default Circle
