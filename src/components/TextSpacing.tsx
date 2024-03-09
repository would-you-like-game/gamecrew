import { Colors, colors } from '@/styles/colorPalette'
import { Flex, Spacing, Text } from '.'
import { css } from '@emotion/react'

interface TextSpacingProps {
  size?: number
  backgroundColor?: Colors
  children: React.ReactNode
  position?: 'top' | 'center' | 'bottom'
}

const TextSpacing = ({
  size = 1,
  backgroundColor = 'black300',
  children,
  position = 'center',
}: TextSpacingProps) => {
  return (
    <Flex direction="column" align="center" css={containerStyle}>
      <Spacing size={size} backgroundColor={backgroundColor} />
      <span css={containerTextStyle(position)}>
        <Text typography="t7">{children}</Text>
      </span>
    </Flex>
  )
}

const containerStyle = css`
  width: 100%;
`

const containerTextStyle = (position: 'top' | 'center' | 'bottom') => css`
  padding: 0 50px;
  position: relative;
  background-color: ${colors.white};

  ${position === 'top'
    ? 'transform: translateY(-200%);'
    : position === 'center'
      ? 'transform: translateY(-50%);'
      : 'transform: translateY(100%);'}
`

export default TextSpacing
