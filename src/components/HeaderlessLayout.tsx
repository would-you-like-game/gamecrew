import React from 'react'
import { Flex, Spacing, Text } from '.'
import { css } from '@emotion/react'

const HeaderlessLayout = ({
  children,
  text,
}: {
  children: React.ReactNode
  text?: string
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      css={ContainerStyle}
    >
      <img src="/images/mainLogo.png" alt="mainLogo" width={550} height={135} />
      <Spacing size={25} />

      <Text typography="t1" bold={true}>
        {text}
      </Text>
      <Spacing size={35} />
      {children}
    </Flex>
  )
}

const ContainerStyle = css`
  width: 100%;
  height: 100vh;
  img {
    object-fit: cover;
  }
`
export default HeaderlessLayout
