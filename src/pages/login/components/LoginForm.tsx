import { Button, TextField } from '@/components'
import { css } from '@emotion/react'

const LoginForm = () => {
  return (
    <div css={formContainerStyle}>
      <TextField placeholder="이메일" />
      <TextField placeholder="비밀번호" />
      <Button typography="t5" full={true}>
        회원가입
      </Button>
    </div>
  )
}

const formContainerStyle = css`
  width: 650px;
  gap: 10px;
`

export default LoginForm
