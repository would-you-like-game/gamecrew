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
export default VALIDATION_MESSAGE_MAP
