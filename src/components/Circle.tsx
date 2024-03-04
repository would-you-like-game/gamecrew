import { Colors, colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface CircleProps {
  size: number
  backgroundColor?: Colors
}

const Circle = styled.div<CircleProps>(
  { borderRadius: '100%' },
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
          background-position: calc(100% + 5px) center;
        `,
)

export default Circle
