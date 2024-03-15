export interface BaseForm {
  id: 'email' | 'emailAuth' | 'nickname' | 'password' | 'rePassword'
  placeholder: string
  isPassword: boolean
  validation?: 'email' | 'nickname' | 'password'
}
