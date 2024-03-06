import { css } from '@emotion/react'
import { Flex, Spacing, Text } from '.'
import { Link } from 'react-router-dom'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  onClick?: () => void
  as?: 'div' | 'li'
}

const ListRow = ({ left, contents, as = 'li' }: ListRowProps) => {
  return (
    <Flex as={as} css={listRowContainerStyles}>
      <Flex>{left}</Flex>
      <Flex css={listRowContentsStyles}>{contents}</Flex>
    </Flex>
  )
}

const listRowContainerStyles = css`
  padding: 10px 0;
  cursor: pointer;
`

const listRowContentsStyles = css`
  flex: 1;
`

const ListRowCategorys = ({ text }: { text: string }) => {
  return (
    <Flex align="center">
      <Spacing size={12} direction="horizontal" />
      <Text typography="t3">{text}</Text>
    </Flex>
  )
}

ListRow.Category = ListRowCategorys

export default ListRow
