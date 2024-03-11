import { TextField } from '.'

const Form = ({
  form,
  register,
  formState,
}: {
  form: any //일단 any로 놓고 타입 정의하자
  register: any
  formState: any
}) => {
  return (
    <TextField
      placeholder={form.placeholder}
      type={form.isPassword ? 'password' : 'string'}
      helpMessage={formState.errors[form.id]?.message}
      hasError={formState.errors[form.id] != null}
      {...register(form.id, {
        required: form.required,
        pattern: form.validation ? VALIDATION_MESSAGE_MAP[form.validation] : '',
      })}
    />
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
