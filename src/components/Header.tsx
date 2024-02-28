import { css } from '@emotion/react'
import { Button, Flex } from '.'
import { SearchInput } from '@/pages/main/components'
import { colors } from '@/styles/colorPalette'
import useMovePage from '@/hooks/useMovePage'

interface HeaderProps {
  isSearch?: boolean
}

const Header = ({ isSearch = false }: HeaderProps) => {
  const { onClickMovePage } = useMovePage()
  return (
    <Flex justify="space-between" align="center" css={headerStyle}>
      <img
        src="/images/mainLogo.png"
        alt="mainLogo"
        height={100}
        css={mainLogoStyles}
        onClick={() => onClickMovePage({ page: '/' })}
      />
      {isSearch && <SearchInput />}
      <Flex css={buttonBoxStyles}>
        <Button
          color="reverse"
          onClick={() => onClickMovePage({ page: '/login' })}
        >
          로그인
        </Button>
        <Button onClick={() => onClickMovePage({ page: '/signup' })}>
          회원가입
        </Button>
      </Flex>
    </Flex>
  )
}

const headerStyle = css`
  width: calc(100vw - 20px);
  max-width: 1280px;
  height: 60px;
  padding: 0 10px;
  background-color: ${colors.black100};
  box-shadow: 0 4px 6px -7px ${colors.black};
  gap: calc(10%);
`
const buttonBoxStyles = css`
  gap: 10px;
`
const mainLogoStyles = css`
  cursor: pointer;
`

export default Header
