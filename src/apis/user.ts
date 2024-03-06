import { collection, getDocs, query, where } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants'

export const getNicknameUser = async (nickname: string) => {
  const recommendQuery = query(
    collection(store, COLLECTIONS.USER),
    where('nickname', '==', nickname),
  )

  const snapshot = await getDocs(recommendQuery)

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}
