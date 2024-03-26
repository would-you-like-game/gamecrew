import { auth } from '@/apis/firebase'
import { Button, Flex, Form } from '@/components'
import useMovePage from '@/hooks/useMovePage'
import { css } from '@emotion/react'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FieldError, FieldValues, useForm } from 'react-hook-form'
import { BaseForm } from '@/models/form'
import { FirebaseError } from 'firebase/app'

const LOGINFORM: BaseForm[] = [
  {
    id: 'email',
    placeholder: '이메일',
    isPassword: false,
    validation: 'email',
  },
  {
    id: 'password',
    placeholder: '비밀번호',
    isPassword: true,
  },
]

const LoginForm = () => {
  const { onClickMovePage } = useMovePage()
  const { register, formState, handleSubmit, reset } = useForm<FieldValues>({
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (formValue: FieldValues) => {
    const { email, password } = formValue

    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log('error!!', e)
      if (e instanceof FirebaseError) {
        if (e.code === 'auth/invalid-credential') {
          reset()
          alert('이메일 또는 비밀번호를 확인해주세요 ')
        }
      } else alert('오류로 인해 다시한번 로그인 시도해주세요')
      return
    }
    //TODO: 공통 alert 처리

    await auth.currentUser?.reload()
    if (auth.currentUser?.emailVerified) onClickMovePage({ page: '/' })
    else {
      signOut(auth)
      alert('이메일 인증이 완료되지 않았습니다. 이메일을 확인해주세요')
    }
    //TODO: 공통 alert 처리
  }

  return (
    <Flex direction="column" css={formContainerStyle} gap={10}>
      {LOGINFORM.map((form) => (
        <Form
          key={form.id}
          form={form}
          error={formState.errors[form.id] as FieldError}
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
