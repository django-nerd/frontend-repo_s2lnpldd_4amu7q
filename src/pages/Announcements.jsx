import AnnouncementsFeed from '../components/AnnouncementsFeed'

const sample = [
  { id: 'a1', title: 'Exam Registration Opens', content: 'Trimester 2 exam registration opens next Monday via the student portal.', time: '2h ago', type: 'info' },
  { id: 'a2', title: 'Lost & Found - Laptop', content: 'A grey HP laptop found near the library. Identify at security office.', time: '5h ago', type: 'info' },
  { id: 'a3', title: 'Emergency Water Outage', content: 'Temporary outage in hostels A-D today 2-6 pm.', time: 'Today 9:00', type: 'alert' },
]

export default function Announcements() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Campus Announcements</h1>
      <AnnouncementsFeed items={sample} />
    </div>
  )
}
