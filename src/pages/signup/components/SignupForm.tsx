import { auth, store } from '@/apis/firebase'
import { Button, Flex, Form } from '@/components'
import { COLLECTIONS } from '@/constants'
import useMovePage from '@/hooks/useMovePage'
import { BaseForm } from '@/models/form'
import { SignupFormValues } from '@/models/signup'
import { css } from '@emotion/react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

const SIGNUPFORM: BaseForm[] = [
  {
    id: 'email',
    placeholder: '이메일',
    validation: 'email',
    isPassword: false,
  },
  {
    id: 'emailAuth',
    placeholder: '인증번호',
    isPassword: false,
  },
  {
    id: 'nickname',
    placeholder: '닉네임',
    validation: 'nickname',
    isPassword: false,
  },
  {
    id: 'password',
    placeholder: '비밀번호',
    validation: 'password',
    isPassword: true,
  },
  {
    id: 'rePassword',
    placeholder: '비밀번호 확인',
    validation: 'rePassword',
    isPassword: true,
  },
]

const SignupForm = () => {
  const { onClickMovePage } = useMovePage()
  const { register, formState, handleSubmit, getValues } =
    useForm<SignupFormValues>({
      mode: 'onChange',
    })

  const onSubmit = async (formValues: SignupFormValues) => {
    const { nickname, email, password } = formValues
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, { displayName: nickname })

    const newUser = {
      uid: user.uid,
      email: user.email,
      nickname: nickname,
    }
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    onClickMovePage({ page: '/login' })
  }

  const FormButton = useCallback((formId: string) => {
    if (formId === 'email') {
      return <Button color="reverse">인증번호 전송</Button>
    } else if (formId === 'emailAuth') {
      return (
        <>
          <Button color="reverse">확인</Button>
          <Button color="reverse">재전송</Button>
        </>
      )
    } else return
  }, [])

  return (
    <Flex direction="column" css={formContainerStyle} gap={10}>
      {SIGNUPFORM.map((form) => (
        <Form
          key={form.id}
          form={form}
          formState={formState}
          register={register}
          getValues={getValues}
        >
          {FormButton(form.id)}
        </Form>
      ))}
      <Button typography="t5" onClick={handleSubmit(onSubmit)}>
        회원가입
      </Button>
    </Flex>
  )
}

const formContainerStyle = css`
  width: 650px;
`

export default SignupForm
