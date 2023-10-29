import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
  apiKey: process.env.VITE_API_KEY || 'string',
  authDomain: process.env.VITE_AUTH_DOMAIN || 'string',
  databaseURL: process.env.VITE_DATABASE_URL || 'string',
  projectId: process.env.VITE_PROJECT_ID || 'string',
  storageBucket: process.env.VITE_STORAGE_BUCKET || 'string',
  messagingSenderId: process.env.VITE_MESSAGING_SENDER_ID || 'string',
  appId: process.env.VITE_APP_ID || 'string'
})

export const authConfig = getAuth(app)
export const db = getFirestore(app)
