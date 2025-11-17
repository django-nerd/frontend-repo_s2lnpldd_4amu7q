import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const raw = localStorage.getItem('cc_user')
    if (raw) setUser(JSON.parse(raw))
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    // Placeholder: integrate with backend auth later
    const fake = { id: 'u1', name: 'Student', email, role: 'student' }
    setUser(fake)
    localStorage.setItem('cc_user', JSON.stringify(fake))
    return fake
  }

  const register = async (payload) => {
    const fake = { id: 'u1', name: payload.name, email: payload.email, role: 'student' }
    setUser(fake)
    localStorage.setItem('cc_user', JSON.stringify(fake))
    return fake
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cc_user')
  }

  const value = useMemo(() => ({ user, loading, login, logout, register }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
