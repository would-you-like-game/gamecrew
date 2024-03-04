import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from './pages/test'

const MainPage = lazy(() => import('@pages/main'))
const DetailPage = lazy(() => import('@pages/detail'))
const LogainPage = lazy(() => import('@pages/login'))
const SignupPage = lazy(() => import('@pages/signup'))
const PostPage = lazy(() => import('@pages/post'))
const ChattingPage = lazy(() => import('@pages/chatting'))
const MyPage = lazy(() => import('@pages/my'))
const ReviewPage = lazy(() => import('@pages/review'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>잠시 기다리렴</div>}>
        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/category/:category" Component={MainPage} />
          <Route path="/login" Component={LogainPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/detail/:id" Component={DetailPage} />
          <Route path="/post" Component={PostPage} />
          <Route path="/chatting" Component={ChattingPage} />
          <Route path="/my" Component={MyPage} />
          <Route path="/review" Component={ReviewPage} />
          <Route path="/test" Component={TestPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default App
