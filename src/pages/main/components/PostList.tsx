import Grid from '@/components/Grid'
import { PostItem } from '.'
import { css } from '@emotion/react'

const PostList = () => {
  return (
    <Grid column="repeat(4, 1fr)" css={gridStyles}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </Grid>
  )
}

const gridStyles = css`
  padding: 50px 70px;
  flex: 1;
`

export default PostList
