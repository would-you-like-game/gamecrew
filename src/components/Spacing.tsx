import { Colors, colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
interface SpacingProps {
  backgroundColor?: Colors
  size: number
  direction?: 'vertical' | 'horizontal'
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = 'vertical' }) =>
    direction === 'vertical'
      ? `height: ${size}px; width: 100%;`
      : `height: 100%; width: ${size}px;`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${colors[backgroundColor]};`}
`

export default Spacing
