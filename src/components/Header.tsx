import { css } from '@emotion/react'
import { Circle, Flex, LinkedButton } from '.'
import { SearchInput } from '@/pages/main/components'
import { colors } from '@/styles/colorPalette'
import { Link } from 'react-router-dom'
import useUser from '@/hooks/auth/useUser'
import { useCallback } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/apis/firebase'

interface HeaderProps {
  isSearch?: boolean
}

const Header = ({ isSearch = false }: HeaderProps) => {
  const user = useUser()

  const logout = useCallback(() => {
    signOut(auth)
  }, [])

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Flex onClick={logout}>
          <Circle size={25} />
        </Flex>
      )
    } else {
      return (
        <LinkedButton to="/login" size="tiny" color="reverse">
          로그인
        </LinkedButton>
      )
    }
  }, [user])

  return (
    <Flex align="center" css={headerStyle}>
      <Link to="/" css={mainLogoStyles}>
        <img src="/images/mainLogo.png" alt="mainLogo" height={200} />
      </Link>
      {isSearch && <SearchInput />}
      <Flex justify="center" css={userBoxStyles}>
        {renderButton()}
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
