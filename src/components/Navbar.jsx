import { useAuth } from '../context/AuthContext'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Bell, User, LogOut, Bookmark, LayoutDashboard, School, Megaphone, BriefcaseBusiness } from 'lucide-react'
import { useState } from 'react'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-600 to-emerald-500" />
              <span className="font-bold text-lg">CampusConnect KE</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <NavItem to="/opportunities">Opportunities</NavItem>
            <NavItem to="/announcements">Announcements</NavItem>
            <NavItem to="/clubs">Clubs</NavItem>
            {user && user.role === 'admin' && (
              <NavItem to="/admin">Admin</NavItem>
            )}
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <NavLink to="/saved" className="p-2 rounded hover:bg-gray-100">
                  <Bookmark className="h-5 w-5" />
                </NavLink>
                <NavLink to="/notifications" className="p-2 rounded hover:bg-gray-100">
                  <Bell className="h-5 w-5" />
                </NavLink>
                <NavLink to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium hidden sm:flex ${location.pathname.startsWith('/admin') ? 'bg-emerald-600 text-white' : 'bg-blue-600 text-white'}`}>
                  <LayoutDashboard className="h-4 w-4 mr-2" /> Dashboard
                </NavLink>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 grid place-items-center text-white">
                  <User className="h-4 w-4" />
                </div>
                <button onClick={logout} className="px-3 py-2 rounded-md text-sm bg-gray-100 hover:bg-gray-200">
                  <LogOut className="h-4 w-4 inline mr-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Login</Link>
                <Link to="/register" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">Create account</Link>
              </div>
            )}
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              <Link onClick={() => setOpen(false)} to="/opportunities" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <BriefcaseBusiness className="h-4 w-4" /> Opportunities
              </Link>
              <Link onClick={() => setOpen(false)} to="/announcements" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <Megaphone className="h-4 w-4" /> Announcements
              </Link>
              <Link onClick={() => setOpen(false)} to="/clubs" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                <School className="h-4 w-4" /> Clubs
              </Link>
              {user && user.role === 'admin' && (
                <Link onClick={() => setOpen(false)} to="/admin" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
                  <LayoutDashboard className="h-4 w-4" /> Admin
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
