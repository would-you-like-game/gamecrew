import { auth } from '@/apis/firebase'
import { Button, Flex, TextField } from '@/components'
import useMovePage from '@/hooks/useMovePage'
import { LoginFormValue } from '@models/login'
import VALIDATION_MESSAGE_MAP from '@utils/validation'
import { css } from '@emotion/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const { onClickMovePage } = useMovePage()
  const { register, formState, handleSubmit } = useForm<LoginFormValue>({
    mode: 'onSubmit',
  })

  const onSubmit = async (formValue: LoginFormValue) => {
    const { email, password } = formValue

    try {
      await signInWithEmailAndPassword(auth, email, password)
      onClickMovePage({ page: '/' })
    } catch (e) {
      console.log(e, '공통alert으로 에러처리')
    }
  }

  console.log('formState', typeof formState.errors)

  console.log(formState.errors)
  return (
    <Flex direction="column" css={formContainerStyle} gap={10}>
      <TextField
        placeholder="이메일"
        helpMessage={formState.errors['email']?.message as string}
        hasError={formState.errors['email'] != null}
        {...register('email', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP['email'],
        })}
      />
      <TextField
        placeholder="비밀번호"
        type="password"
        {...register('password', { required: true })}
      />
      <Button typography="t5" full={true} onClick={handleSubmit(onSubmit)}>
        회원가입
      </Button>
    </Flex>
  )
}

const formContainerStyle = css`
  width: 650px;
`

export default LoginForm
