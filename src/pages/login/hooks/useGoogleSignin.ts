import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useCallback } from 'react'
import { collection, doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'
import { auth, store } from '@/apis/firebase'
import { COLLECTIONS } from '@/constants'

const useGoogleSignin = () => {
  const navigate = useNavigate()

  const signin = useCallback(async () => {
    const provider = new GoogleAuthProvider()

    try {
      const { user } = await signInWithPopup(auth, provider)

      const userSnapshot = await getDoc(
        doc(collection(store, COLLECTIONS.USER), user.uid),
      )

      if (!userSnapshot.exists()) {
        const newUser = {
          uid: user.uid,
          email: user.email,
          nickname: user.displayName,
          photoURL: user.photoURL,
        }

        await setDoc(
          doc(collection(store, COLLECTIONS.USER), user.uid),
          newUser,
        )
      }
      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/popup-closed-by-user') {
          return
        }
      }

      throw new Error('fail to signin')
    }
  }, [navigate])

  return { signin }
}

export default useGoogleSignin
