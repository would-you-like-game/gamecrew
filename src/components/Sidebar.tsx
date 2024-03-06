import { css } from '@emotion/react'
import { Flex, Line, LinkedButton, Spacing } from '.'
import { colors } from '@/styles/colorPalette'

const Sidebar = ({ content }: { content: React.ReactNode }) => {
  return (
    <Flex direction="column" css={containerStyle}>
      <LinkedButton to="/post" size="large" full={true}>
        게시물 작성
      </LinkedButton>
      <Spacing size={52} />
      <Line />
      <Spacing size={52} />
      <Flex direction="column" css={contentStyles}>
        {content}
      </Flex>
    </Flex>
  )
}

const contentStyles = css`
  padding-left: 20px;
  gap: 20px;
`

const containerStyle = css`
  width: 450px;
  height: calc(100vh - 100px);
  background-color: ${colors.black100};
  padding: 35px 55px;
`

export default Sidebar
