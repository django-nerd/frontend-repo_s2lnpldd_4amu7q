import { useEffect, useMemo, useState } from 'react'
import OpportunityCard from '../components/OpportunityCard'
import { Search, SlidersHorizontal } from 'lucide-react'

const sample = [
  { id: '1', title: 'Equity Leaders Program Scholarship', organization: 'Equity Group Foundation', description: 'Full scholarship for outstanding KCSE graduates with leadership potential.', deadline: '2025-12-30', location: 'Kenya', tags: ['Scholarship','Leadership','Finance'], link: '#' },
  { id: '2', title: 'Safaricom Internship', organization: 'Safaricom PLC', description: 'Explore rotations in engineering, data, product, and customer experience.', deadline: '2025-01-31', location: 'Nairobi', tags: ['Internship','Tech','Telecom'], link: '#' },
  { id: '3', title: 'African AI Hackathon', organization: 'AI Kenya', description: 'Compete with teams across Africa to solve real-world problems using AI.', deadline: '2025-02-20', location: 'Remote', tags: ['Hackathon','AI','ML'], link: '#' },
]

export default function Opportunities() {
  const [q, setQ] = useState('')
  const [type, setType] = useState('All')
  const [items, setItems] = useState(sample)

  useEffect(() => {
    setItems(sample)
  }, [])

  const filtered = useMemo(() => {
    return items.filter(i => (
      (type === 'All' || i.tags.includes(type)) &&
      (q === '' || i.title.toLowerCase().includes(q.toLowerCase()) || i.organization.toLowerCase().includes(q.toLowerCase()))
    ))
  }, [items, q, type])

  const types = ['All','Scholarship','Internship','Hackathon','Bootcamp','Conference','Job','Fellowship']

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between mb-6">
        <h1 className="text-2xl font-bold">Opportunities</h1>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by title or organization" className="w-full sm:w-80 pl-9 pr-3 py-2 rounded-md border" />
          </div>
          <div>
            <select value={type} onChange={(e)=> setType(e.target.value)} className="px-3 py-2 rounded-md border">
              {types.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border"><SlidersHorizontal className="h-4 w-4" /> Filters</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(item => (
          <OpportunityCard key={item.id} item={item} onSave={() => {}} />
        ))}
      </div>
    </div>
  )
}
