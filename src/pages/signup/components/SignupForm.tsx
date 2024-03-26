import { auth, store } from '@/apis/firebase'
import { Button, Flex, Form } from '@/components'
import { COLLECTIONS } from '@/constants'
import useMovePage from '@/hooks/useMovePage'
import { BaseForm } from '@/models/form'
import { css } from '@emotion/react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { FieldError, FieldValues, useForm } from 'react-hook-form'

const SIGNUPFORM: BaseForm[] = [
  {
    id: 'email',
    placeholder: '이메일',
    validation: 'email',
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
    isPassword: true,
  },
]

const SignupForm = () => {
  const { onClickMovePage } = useMovePage()
  const { register, formState, handleSubmit, getValues } = useForm<FieldValues>(
    {
      mode: 'onChange',
    },
  )

  const onSubmit = async (formValues: FieldValues) => {
    const { nickname, email, password } = formValues
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, { displayName: nickname })

    const newUser = {
      uid: user.uid,
      email: user.email,
      nickname: nickname,
    }
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    await sendEmailVerification(user)
    alert('인증 이메일이 발송되었습니다. 이메일을 확인해주세요')
    //TODO: 공용alert으로 변경

    onClickMovePage({ page: '/login' })
  }

  return (
    <Flex direction="column" css={formContainerStyle} gap={10}>
      {SIGNUPFORM.map((form) => (
        <Form
          key={form.id}
          form={form}
          error={formState.errors[form.id] as FieldError}
          register={register}
          getValues={getValues}
        ></Form>
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
