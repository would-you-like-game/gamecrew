import { colors } from '@/styles/colorPalette'
import { typographyMap } from '@/styles/typography'
import styled from '@emotion/styled'

interface InputProps {
  isSearch?: boolean
}
const Input = styled.input<InputProps>`
  /* padding: 0 16px;
  font-size: 15px;
  height: 30px;
  font-weight: 500;
  border: 1px solid ${colors.gray100};
  border-radius: 60px;
  width: 100%;
  min-width: 400px;
  box-sizing: border-box; */

  ${typographyMap.t5}
  padding: 10px 20px;
  border: 1px solid ${colors.black400};
  border-radius: 15px;
  flex: 1;

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
