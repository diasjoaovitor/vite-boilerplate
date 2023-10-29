import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { authConfig, db } from './config'

export async function login(email: string, password: string) {
  await signInWithEmailAndPassword(authConfig, email, password)
}

export async function register(email: string, password: string) {
  const res = await createUserWithEmailAndPassword(authConfig, email, password)
  await addDoc(collection(db, 'users'), { user: res.user.uid })
}

export async function logout() {
  await authConfig.signOut()
}
