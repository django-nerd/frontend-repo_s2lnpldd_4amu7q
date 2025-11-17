import { Routes, Route, Navigate } from 'react-router-dom'
import Shell from './layouts/Shell'
import Landing from './pages/Landing'
import Opportunities from './pages/Opportunities'
import Announcements from './pages/Announcements'
import Clubs from './pages/Clubs'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'
import { Login, Register } from './pages/Auth'
import { AuthProvider, useAuth } from './context/AuthContext'

function Protected({ children, role }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/login" replace />
  if (role && user.role !== role) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <Shell>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          <Route path="/admin" element={<Protected role="admin"><Admin /></Protected>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Shell>
    </AuthProvider>
  )
}
