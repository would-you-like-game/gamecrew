import { Button, Flex, TextField } from '@/components'
import { css } from '@emotion/react'

const SignupForm = () => {
  return (
    <Flex direction="column" css={formContainerStyle}>
      <Flex css={InputBoxStyle}>
        <TextField placeholder="닉네임" name="nickname" />
        <Button color="reverse">중복확인</Button>
      </Flex>
      <Flex css={InputBoxStyle}>
        <TextField placeholder="이메일" name="email" />
        <Button color="reverse">인증번호 전송</Button>
      </Flex>
      {/* <Flex css={InputBoxStyle}>
          <Input placeholder="인증번호 입력" name="emailAuthNum" />
          <Button color="reverse">확인</Button>
          <Button color="reverse">재전송</Button>
        </Flex> */}
      <TextField placeholder="비밀번호" name="password" type="password" />
      <TextField
        placeholder="비밀번호 확인"
        name="repassword"
        type="password"
      />
      <Button typography="t4">로그인</Button>
    </Flex>
  )
}
const formContainerStyle = css`
  width: 650px;
  gap: 30px;
`

const InputBoxStyle = css`
  gap: 10px;
  width: 100%;
`
export default SignupForm
