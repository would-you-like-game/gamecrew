import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Global } from '@emotion/react'
import GlobalStyle from '@styles/globalStyles.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Global styles={GlobalStyle} />
    <App />
  </>,
)
