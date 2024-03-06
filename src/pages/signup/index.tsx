import { HeaderlessLayout } from '@/components'
import { SignupForm } from './components'
import useMovePage from '@/hooks/useMovePage'
import { SignupFormValues } from '@/models/signup'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, store } from '@/apis/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'
import { COLLECTIONS } from '@/constants'

const SignupPage = () => {
  const { onClickMovePage } = useMovePage()

  const handleSubmit = async (formValues: SignupFormValues) => {
    const { nickname, email, password } = formValues
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, { displayName: nickname })

    const newUser = {
      uid: user.uid,
      email: user.email,
      nickname: nickname,
    }
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    onClickMovePage({ page: '/login' })
  }

  return (
    <HeaderlessLayout>
      <SignupForm onSubmit={handleSubmit} />
    </HeaderlessLayout>
  )
}

export default SignupPage
