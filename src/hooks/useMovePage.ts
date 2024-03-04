import { useNavigate } from 'react-router-dom'

interface useMovePageProps {
  page: string
}
// 나중에 다른 paramiter 추가되면 그것도 받게 만들건데 그럴려면 핸들러 있어야 할 것 같아서 만들어 둔거
const useMovePage = () => {
  const navigate = useNavigate()

  const onClickMovePage = ({ page }: useMovePageProps) => navigate(page)
  return { onClickMovePage } as {
    onClickMovePage: ({ page }: useMovePageProps) => void
  }
}

export default useMovePage
