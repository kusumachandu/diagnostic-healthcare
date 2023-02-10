/* eslint-disable react/prop-types */
import React, { useContext, useState, useRef, useEffect } from 'react'
import { auth } from '../config/firebase-config'
import {
  // signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
// import { doc, getDoc } from 'firebase/firestore'

const AuthContext = React.createContext(null)

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const userInfo = useRef()

  // function login (username, password) {
  //   return signInWithEmailAndPassword(auth, username, password)
  // }

  function logout () {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unSubscribe
  }, [])

  const value = {
    currentUser,
    // login,
    logout,
    userInfo
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
