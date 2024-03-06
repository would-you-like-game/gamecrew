import { Circle, Flex, Header, ListRow, Sidebar } from '@/components'
import { CATEGORY, CategoryValues } from '@/constant'
import getSortedColor from '@/utils/getSortedColor'
import { PostList } from './components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const backgroundColor = getSortedColor({
  max: CATEGORY.length,
  color: 'blue',
})

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryValues>('total')
  return (
    <Flex direction="column">
      <Header isSearch={true} />
      <Flex>
        <Sidebar
          content={
            <>
              {CATEGORY.map(({ url, ko }, index) => (
                <Link to={url}>
                  <ListRow
                    key={index}
                    left={
                      <Circle
                        size={35}
                        backgroundColor={backgroundColor[index]}
                      />
                    }
                    contents={<ListRow.Category text={ko} />}
                  />
                </Link>
              ))}
            </>
          }
        />
        <PostList />
      </Flex>
    </Flex>
  )
}

export default MainPage
