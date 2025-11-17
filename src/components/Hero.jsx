import { Link } from 'react-router-dom'
import { ArrowRight, Star, ShieldCheck, BellRing } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm mb-4">
              <ShieldCheck className="h-4 w-4" /> Verified opportunities for Kenyan campuses
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Discover, apply, and thrive on campus
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A single home for scholarships, internships, club life and official campus updates. Built for students across Kenya.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/register" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/opportunities" className="px-5 py-3 rounded-md bg-gray-100 hover:bg-gray-200 font-medium">Browse opportunities</Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /> Curated content</div>
              <div className="flex items-center gap-2"><BellRing className="h-4 w-4 text-blue-600" /> Smart alerts</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200/40 to-emerald-200/40 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl shadow-xl p-6 border">
              <div className="grid sm:grid-cols-2 gap-4">
                {['Scholarships','Internships','Hackathons','Bootcamps','Conferences','Part-time Jobs'].map((t, i) => (
                  <div key={i} className="p-4 rounded-xl border bg-gradient-to-br from-white to-gray-50">
                    <p className="font-semibold">{t}</p>
                    <p className="text-sm text-gray-600 mt-1">Fresh and relevant picks weekly</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
