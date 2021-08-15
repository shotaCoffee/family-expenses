import {auth, googleProvider} from '../../services/firebase'
import firebase from 'firebase';

// @ts-ignore
const ADDRESS_WHITE_LIST = process.env.REACT_APP_TARGET_USER_WHITE_LIST.split(' ')

export const signInWithGoogle = async (): Promise<firebase.auth.UserCredential> => {
  const result = await auth.signInWithPopup(googleProvider)
  const resultEmail = result.user?.email as string
  if (ADDRESS_WHITE_LIST.includes(resultEmail)) {
    return result
  } else {
    throw new Error("アクセスすることができません")
  }
}

export const logout = async (): Promise<void> => {
  return auth.signOut()
}
