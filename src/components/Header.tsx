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
    <Flex align="center" css={headerStyle}>
      <Link to="/" css={mainLogoStyles}>
        <img src="/images/mainLogo.png" alt="mainLogo" height={200} />
      </Link>
      {isSearch && <SearchInput />}
      <Flex justify="center" css={userBoxStyles}>
        <LinkedButton to="/login" size="tiny" color="reverse">
          로그인
        </LinkedButton>
      </Flex>
    </Flex>
  )
}

const headerStyle = css`
  width: calc(100vw - 20px);
  width: 1920px;
  height: 100px;
  padding: 0 10px 0 0;
  background-color: ${colors.black100};
  box-shadow: 0 4px 6px -7px ${colors.black};
`
const mainLogoStyles = css`
  cursor: pointer;
  width: 450px;
  padding-left: 70px;
`
const userBoxStyles = css`
  margin-left: 30px;
  width: 300px;
`
export default Header
