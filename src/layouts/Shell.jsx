import Navbar from '../components/Navbar'

export default function Shell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <Navbar />
      <main>{children}</main>
      <footer className="mt-16 border-t py-10 text-center text-sm text-gray-600">
        Built for Kenyan campuses • © CampusConnect KE
      </footer>
    </div>
  )
}
