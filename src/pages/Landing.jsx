import Hero from '../components/Hero'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: 'Opportunities Portal',
            desc: 'Scholarships, internships, hackathons and more — all verified for Kenyan students.'
          },{
            title: 'Campus Announcements',
            desc: 'Stay on top of official updates, events, deadlines and emergency alerts.'
          },{
            title: 'Clubs Directory',
            desc: 'Discover student clubs, find contacts, and get involved on campus.'
          }].map((f, i) => (
            <div key={i} className="rounded-2xl border bg-gradient-to-br from-white to-gray-50 p-6">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
