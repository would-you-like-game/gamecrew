import { auth } from '@/apis/firebase'
import { userAtom } from '@/atoms/user'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  onAuthStateChanged(auth, (user) => {

    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        nickname: user.displayName ?? '',
        profileURL: user.photoURL ?? '',
      })
    } else {
      setUser(null)
    }

    setInitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}

export default AuthGuard