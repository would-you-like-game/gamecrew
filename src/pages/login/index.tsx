import { Flex, HeaderlessLayout, TextSpacing } from '@/components'
import { GoogleButton, LoginForm } from './components'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <HeaderlessLayout text="로그인">
      <Flex direction="column" justify="center" align="center" gap={40}>
        <GoogleButton />
        <TextSpacing position="center">이메일로 로그인</TextSpacing>
        <LoginForm />
        <TextSpacing position="bottom">
          <Link to={'/signup'}>계정이 없으신가요? 간편가입하기</Link>
        </TextSpacing>
      </Flex>
    </HeaderlessLayout>
  )
}

export default LoginPage
