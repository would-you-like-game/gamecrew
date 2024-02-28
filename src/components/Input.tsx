import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'

const Input = styled.input`
  padding: 0 16px;
  font-size: 15px;
  height: 30px;
  font-weight: 500;
  border: 1px solid ${colors.gray100};
  border-radius: 60px;
  width: 100%;
  min-width: 400px;
  box-sizing: border-box;

  ::placeholder {
    color: ${colors.black400};
  }
  &:focus {
    outline: none;
    border-color: ${colors.blue100};
  }
  &[aria-invalid='true'] {
    border-color: ${colors.red100};
  }
`
export default Input
