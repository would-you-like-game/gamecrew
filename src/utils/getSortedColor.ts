import { Colors } from '@/styles/colorPalette'

interface getSortedColorProps {
  max: number
  color: 'blue'
}
const getSortedColor = ({ max, color }: getSortedColorProps) => {
  const colorArray = []
  for (let i = 0; i < max; i++) {
    if (i === 0) colorArray.push(`${color}50`)
    else colorArray.push(`${color}${i * 100}`)
  }
  return colorArray as Partial<Colors>[]
}

export default getSortedColor
