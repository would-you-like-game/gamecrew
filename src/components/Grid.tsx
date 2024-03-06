import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface GirdProps {
  column: CSSProperties['gridTemplateColumns']
  gap?: CSSProperties['gap']
}

const Grid = styled.div<GirdProps>(({ column, gap }) => ({
  display: 'grid',
  gridTemplateColumns: `${column}`,
  gap,
  placeItems: 'center',
}))

export default Grid
