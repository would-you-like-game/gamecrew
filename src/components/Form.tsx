import { getNicknameUser } from '@/apis/user'
import { TextField } from '.'
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form'
import { BaseForm } from '@/models/form'

const Form = ({
  form,
  register,
  error,
  getValues,
  children,
}: {
  form: BaseForm
  register: UseFormRegister<FieldValues>
  error: FieldError
  getValues?: () => FieldValues
  children?: React.ReactNode
}) => {
  const validateNickname = async (value: string) => {
    try {
      const users = await getNicknameUser(value)
      return users.length === 0 || '이미 사용중인 닉네임입니다.'
    } catch (error) {
      return '닉네임 확인 중 오류가 발생했습니다.'
    }
  }

  const matchPassword = (value: string) => {
    return getValues?.().password === value || '비밀번호가 일치하지 않습니다'
  }

  return (
    <TextField
      placeholder={form.placeholder}
      type={form.isPassword ? 'password' : 'string'}
      helpMessage={error?.message}
      hasError={error != null}
      {...register(form.id, {
        required: true,
        pattern: form.validation
          ? VALIDATION_MESSAGE_MAP[form.validation]
          : undefined,
        validate:
          form.id === 'nickname'
            ? validateNickname
            : form.id === 'rePassword'
              ? matchPassword
              : undefined,
      })}
    >
      {children}
    </TextField>
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

export default Form
