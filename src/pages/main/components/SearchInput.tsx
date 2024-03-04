import { Input } from '@/components'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
const SearchInput = () => {
  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <Input placeholder="검색어를 입력해주세요" />
      <SearchIcon />
    </div>
  )
}

const SearchIcon = () => {
  return (
    <svg
      enableBackground="new 0 0 32 32"
      viewBox="0 0 32 32"
      fill={colors.black700}
      css={searchIconStyles}
    >
      <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" />
    </svg>
  )
}
const searchIconStyles = css`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 20px;
  height: 20px;
`
export default SearchInput
