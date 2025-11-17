import { useAuth } from '../context/AuthContext'
import OpportunityCard from '../components/OpportunityCard'
import AnnouncementsFeed from '../components/AnnouncementsFeed'

const opps = [
  { id: '1', title: 'Equity Leaders Program Scholarship', organization: 'Equity Group Foundation', description: 'Full scholarship for outstanding KCSE graduates with leadership potential.', deadline: '2025-12-30', location: 'Kenya', tags: ['Scholarship','Leadership','Finance'], link: '#' },
  { id: '2', title: 'Safaricom Internship', organization: 'Safaricom PLC', description: 'Explore rotations in engineering, data, product, and customer experience.', deadline: '2025-01-31', location: 'Nairobi', tags: ['Internship','Tech','Telecom'], link: '#' },
]

const anns = [
  { id: 'a1', title: 'Fee Payment Deadline', content: 'Complete fees before 10th Jan to avoid penalties.', time: '1d ago', type: 'info' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold">Hi {user?.name || 'Student'} 👋</h1>
      <p className="text-gray-600">Here’s what’s new for you</p>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 grid gap-4">
          <h2 className="text-lg font-semibold">Recommended opportunities</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {opps.map(o => <OpportunityCard key={o.id} item={o} />)}
          </div>
        </div>
        <div className="lg:col-span-1">
          <h2 className="text-lg font-semibold mb-2">Announcements</h2>
          <AnnouncementsFeed items={anns} />
        </div>
      </div>
    </div>
  )
}
