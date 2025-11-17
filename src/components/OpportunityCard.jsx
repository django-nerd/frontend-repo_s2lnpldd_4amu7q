import { Bookmark, Calendar, MapPin, Tag } from 'lucide-react'

export default function OpportunityCard({ item, onSave }) {
  return (
    <div className="group rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.organization}</p>
        </div>
        <button onClick={() => onSave?.(item)} className="p-2 rounded hover:bg-gray-100">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-gray-700 text-sm line-clamp-3">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags?.slice(0,4).map((t, i) => (
          <span key={i} className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
            <Tag className="h-3 w-3" /> {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
        <div className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {item.deadline}</div>
        <div className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {item.location}</div>
      </div>
      <div className="mt-4">
        <a href={item.link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">
          Apply / Learn more
        </a>
      </div>
    </div>
  )
}
