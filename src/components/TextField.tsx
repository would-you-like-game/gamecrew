import React, {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from 'react'
import { Flex, Input, Spacing, Text } from '.'
import { css } from '@emotion/react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  helpMessage?: string
  children?: React.ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ hasError, helpMessage, children, onFocus, onBlur, ...props }, ref) => {
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
        <Flex gap={10}>
          <Input
            ref={ref}
            aria-invalid={hasError}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {children}
        </Flex>
        {helpMessage ? (
          <Text
            typography="t7"
            color={labelColor}
            display="inline-block"
            style={{ margin: '6px 0 0 6px', fontSize: 12 }}
          >
            {helpMessage}
          </Text>
        ) : (
          <Spacing size={24} />
        )}
      </div>
    )
  },
)

const textFieldContainerStyle = css`
  width: 100%;
`

export default TextField
