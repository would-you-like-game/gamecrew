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
  gap: 11px;
`

const containerStyle = css`
  width: 450px;
  /* 헤더 값을 새로 설정해야 하니 나중에 수정하자 */
  background-color: ${colors.black100};
  padding: 35px 55px;
`

export default Sidebar
