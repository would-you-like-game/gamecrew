import { Circle, Flex, Header, ListRow, Sidebar } from '@/components'
import { CATEGORY } from '@/constant'
import getSortedColor from '@/utils/getSortedColor'

const MainPage = () => {
  return (
    <Flex direction="column">
      <Header isSearch={true} />
      <Flex>
        <Sidebar
          content={
            <>
              {CATEGORY.map(({ url, ko }, index) => {
                const backgroundColor = getSortedColor({
                  max: CATEGORY.length,
                  color: 'blue',
                })
                console.log(backgroundColor[index])
                return (
                  <ListRow
                    key={index}
                    left={
                      <Circle
                        size={35}
                        backgroundColor={backgroundColor[index]}
                      />
                    }
                    contents={<ListRow.Category to={url} text={ko} />}
                  />
                )
              })}
            </>
          }
        />
        <div>주요 컨텐츠</div>
      </Flex>
    </Flex>
  )
}

export default MainPage
