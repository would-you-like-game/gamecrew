import { getNicknameUser } from '@/apis/user'
import { Button, Flex, TextField } from '@/components'
import { SignupFormValues } from '@/models/signup'
import { css } from '@emotion/react'
import { useForm } from 'react-hook-form'

const SignupForm = ({
  onSubmit,
}: {
  onSubmit: (formValues: SignupFormValues) => void
}) => {
  const { register, formState, handleSubmit, getValues } =
    useForm<SignupFormValues>({
      mode: 'onChange',
    })

  const validateNickname = async () => {
    try {
      const users = await getNicknameUser(getValues().nickname)
      return users.length === 0 || '이미 사용중인 닉네임입니다.'
    } catch (error) {
      return '닉네임 확인 중 오류가 발생했습니다.'
    }
  }

  return (
    <Flex direction="column" css={formContainerStyle}>
      <TextField
        placeholder="닉네임"
        helpMessage={formState.errors['nickname']?.message as string}
        hasError={formState.errors['nickname'] != null}
        {...register('nickname', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP['nickname'],
          validate: validateNickname,
        })}
      />
      <TextField
        placeholder="이메일"
        helpMessage={formState.errors['email']?.message as string}
        hasError={formState.errors['email'] != null}
        {...register('email', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP['email'],
        })}
      >
        {/* <Button color="reverse">인증번호 전송</Button> */}
      </TextField>
      {/* <TextField placeholder="인증번호 입력" name="emailAuthNum">
        <Button color="reverse">확인</Button>
        <Button color="reverse">재전송</Button>
      </TextField> */}
      <TextField
        placeholder="비밀번호"
        type="password"
        helpMessage={formState.errors['password']?.message as string}
        hasError={formState.errors['password'] != null}
        {...register('password', {
          required: true,
          pattern: VALIDATION_MESSAGE_MAP['password'],
        })}
      />
      <TextField
        placeholder="비밀번호 확인"
        type="password"
        helpMessage={formState.errors['rePassword']?.message as string}
        hasError={formState.errors['rePassword'] != null}
        {...register('rePassword', {
          required: true,
          validate: {
            matchPassword: (value) => {
              return (
                getValues().password === value || '비밀번호가 일치하지 않습니다'
              )
            },
          },
        })}
      />
      <Button typography="t4" onClick={handleSubmit(onSubmit)}>
        회원가입
      </Button>
    </Flex>
  )
}

const VALIDATION_MESSAGE_MAP: {
  [key: string]: {
    value: RegExp
    message: string
  }
} = {
  nickname: {
    value: /^[가-힣a-zA-Z0-9]{2,10}$/,
    message: '닉네임은 한글, 영어, 숫자 중 2글자 이상 10글자 이하입니다',
  },
  email: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: '이메일 형식을 확인해주세요',
  },
  password: {
    value: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9\S]{8,20}$/,
    message: '비밀번호는 영어, 숫자가 섞여 8자 이상 20자 이하여야 합니다',
  },
}

const formContainerStyle = css`
  width: 650px;
  gap: 10px;
`

export default SignupForm
