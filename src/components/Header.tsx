import { css } from '@emotion/react'
import { Flex, LinkedButton } from '.'
import { SearchInput } from '@/pages/main/components'
import { colors } from '@/styles/colorPalette'
import { Link } from 'react-router-dom'

interface HeaderProps {
  isSearch?: boolean
}

const Header = ({ isSearch = false }: HeaderProps) => {
  return (
    <Flex justify="space-between" align="center" css={headerStyle}>
      <Link to="/">
        <img
          src="/images/mainLogo.png"
          alt="mainLogo"
          height={100}
          css={mainLogoStyles}
        />
      </Link>
      {isSearch && <SearchInput />}
      <Flex css={buttonBoxStyles}>
        <LinkedButton to="/login" size="tiny" color="reverse">
          로그인
        </LinkedButton>
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
