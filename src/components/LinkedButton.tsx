import { Link } from 'react-router-dom'
import { Button } from '.'
import { ButtonColor, ButtonSize } from '@/styles/button'
import { PropsWithChildren } from 'react'

interface LinkedButtonProps {
  to: string
  size: ButtonSize
  full?: boolean
  color?: ButtonColor
}

const LinkedButton = ({
  to,
  children,
  full,
  size,
  color,
}: PropsWithChildren<LinkedButtonProps>) => {
  return (
    <Link to={to}>
      <Button size={size} full={full} color={color}>
        {children}
      </Button>
    </Link>
  )
}

export default LinkedButton
