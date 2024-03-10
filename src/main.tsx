import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Global } from '@emotion/react'
import GlobalStyle from '@styles/globalStyles.ts'
import { RecoilRoot } from 'recoil'
import AuthGuard from './components/auth/AuthGuard.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <AuthGuard>
      <Global styles={GlobalStyle} />
      <App />
    </AuthGuard>
  </RecoilRoot>,
)
