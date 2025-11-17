import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    await login(email, password)
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <form onSubmit={handle} className="w-full max-w-sm border rounded-xl p-6 bg-white">
        <h1 className="text-xl font-semibold mb-4">Welcome back</h1>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full mb-3 px-3 py-2 rounded-md border" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full mb-3 px-3 py-2 rounded-md border" />
        <button disabled={loading} className="w-full py-2 rounded-md bg-blue-600 text-white">{loading? 'Signing in...' : 'Sign in'}</button>
      </form>
    </div>
  )
}

export function Register() {
  const { register } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', school: '', year: '', interests: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    await register(form)
    setLoading(false)
    navigate('/onboarding')
  }

  return (
    <div className="min-h-[70vh] grid place-items-center px-4">
      <form onSubmit={handle} className="w-full max-w-md border rounded-xl p-6 bg-white grid gap-3">
        <h1 className="text-xl font-semibold">Create your account</h1>
        <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder="Full name" className="px-3 py-2 rounded-md border" />
        <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder="Email" className="px-3 py-2 rounded-md border" />
        <input value={form.password} onChange={e=>setForm({...form, password: e.target.value})} placeholder="Password" type="password" className="px-3 py-2 rounded-md border" />
        <input value={form.school} onChange={e=>setForm({...form, school: e.target.value})} placeholder="School / University" className="px-3 py-2 rounded-md border" />
        <div className="grid grid-cols-2 gap-3">
          <input value={form.year} onChange={e=>setForm({...form, year: e.target.value})} placeholder="Year" className="px-3 py-2 rounded-md border" />
          <input value={form.interests} onChange={e=>setForm({...form, interests: e.target.value})} placeholder="Interests (comma-separated)" className="px-3 py-2 rounded-md border" />
        </div>
        <button disabled={loading} className="w-full py-2 rounded-md bg-blue-600 text-white mt-2">{loading? 'Creating...' : 'Create account'}</button>
      </form>
    </div>
  )
}
