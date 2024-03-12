import { auth } from '@/apis/firebase'
import { Button, Flex, Form } from '@/components'
import useMovePage from '@/hooks/useMovePage'
import { LoginFormValue } from '@models/login'
import { css } from '@emotion/react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { BaseForm } from '@/models/form'

const LOGINFORM: BaseForm[] = [
  {
    id: 'email',
    placeholder: '이메일',
    required: true,
    isPassword: false,
    validation: 'email',
  },
  {
    id: 'password',
    placeholder: '비밀번호',
    required: true,
    isPassword: true,
  },
]

const LoginForm = () => {
  const { onClickMovePage } = useMovePage()
  const { register, formState, handleSubmit } = useForm<LoginFormValue>({
    mode: 'onChange',
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

  return (
    <Flex direction="column" css={formContainerStyle} gap={10}>
      {LOGINFORM.map((form) => (
        <Form
          key={form.id}
          form={form}
          formState={formState}
          register={register}
        />
      ))}

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
