import { Circle, Flex, Text } from '@/components'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const PostItem = () => {
  return (
    <Link to="/">
      <Flex direction="column" justify="space-between" css={containerStyles}>
        <Flex align="center" justify="space-between">
          <Text bold={true} typography="t4">
            깜찍뽁짝뀨잉
          </Text>
          <Text color="black600">D-10</Text>
        </Flex>
        <img
          src="/images/default.png"
          alt="post image"
          width={215}
          height={230}
          style={{
            backgroundColor: `${colors.black200}`,
            borderRadius: '10px',
            flex: 1,
            margin: '20px 0 15px',
            objectFit: 'cover',
          }}
        />
        <Flex justify="space-between" css={userInfoStyles}>
          <Flex direction="column">
            <Text>사용자이름</Text>
            <Text color="red500">25°C</Text>
          </Flex>
          <Circle size={50} border css={circleStyles} />
        </Flex>
      </Flex>
    </Link>
  )
}
const containerStyles = css`
  margin: 20px;
  border-radius: 10px;
  padding: 18px;
  border: 1px solid ${colors.black300};
  width: 260px;
  height: 380px;
`
const userInfoStyles = css`
  border-top: 1px solid ${colors.black300};
  padding-top: 20px;
  position: relative;
`
const circleStyles = css`
  position: absolute;
  right: 0;
  top: 12px;
`

export default PostItem
