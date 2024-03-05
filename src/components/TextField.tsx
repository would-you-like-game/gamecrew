import React, {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import { Input, Text } from '.'
import { css } from '@emotion/react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  helpMessage?: React.ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ hasError, helpMessage, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false)
    const labelColor = hasError ? 'red500' : focused ? 'blue500' : undefined

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(true)
      onFocus?.(e)
    }

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
      setFocused(false)
      onBlur?.(e)
    }
    return (
      <div css={textFieldContainerStyle}>
        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {helpMessage && (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6, fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        )}
      </div>
    )
  },
)

const textFieldContainerStyle = css`
  flex: 1;
`

export default TextField
