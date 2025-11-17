import { Megaphone, Clock, AlertTriangle } from 'lucide-react'

export default function AnnouncementsFeed({ items = [] }) {
  if (!items.length) {
    return (
      <div className="border rounded-xl p-6 text-center text-gray-600">
        No announcements yet.
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {items.map((a) => (
        <div key={a.id} className={`rounded-xl border p-4 bg-white ${a.type === 'alert' ? 'border-red-300 bg-red-50' : ''}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <Megaphone className="h-5 w-5" />
              <p className="font-medium">{a.title}</p>
            </div>
            <div className="text-sm text-gray-500 inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> {a.time}
            </div>
          </div>
          <p className="text-gray-700 mt-2">{a.content}</p>
          {a.type === 'alert' && (
            <div className="mt-2 inline-flex items-center gap-1 text-red-700 text-sm"><AlertTriangle className="h-4 w-4" /> Emergency</div>
          )}
        </div>
      ))}
    </div>
  )
}
