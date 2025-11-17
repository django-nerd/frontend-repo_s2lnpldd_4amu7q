import { useState } from 'react'
import { Plus, Trash2, Pencil } from 'lucide-react'

export default function Admin() {
  const [tab, setTab] = useState('opps')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Admin</h1>

      <div className="inline-flex rounded-md border overflow-hidden">
        {[
          { id: 'opps', label: 'Opportunities' },
          { id: 'anns', label: 'Announcements' },
          { id: 'clubs', label: 'Clubs' },
        ].map(t => (
          <button key={t.id} onClick={()=>setTab(t.id)} className={`px-4 py-2 text-sm ${tab===t.id? 'bg-blue-600 text-white':'bg-white hover:bg-gray-50'}`}>{t.label}</button>
        ))}
      </div>

      <div className="mt-6">
        {tab === 'opps' && <OppsForm />}
        {tab === 'anns' && <AnnForm />}
        {tab === 'clubs' && <ClubsForm />}
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-gray-700">{label}</span>
      <input {...props} className="px-3 py-2 rounded-md border" />
    </label>
  )
}

function OppsForm() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title:'', organization:'', deadline:'', location:'', tags:'', link:'', description:'' })

  const add = (e) => {
    e.preventDefault()
    setItems([{ id: crypto.randomUUID(), ...form, tags: form.tags.split(',').map(s=>s.trim()) }, ...items])
    setForm({ title:'', organization:'', deadline:'', location:'', tags:'', link:'', description:'' })
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-2 gap-3">
        <Field label="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <Field label="Organization" value={form.organization} onChange={e=>setForm({...form, organization:e.target.value})} />
        <Field label="Deadline" value={form.deadline} onChange={e=>setForm({...form, deadline:e.target.value})} />
        <Field label="Location" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
        <Field label="Tags (comma)" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} />
        <Field label="Link" value={form.link} onChange={e=>setForm({...form, link:e.target.value})} />
        <label className="sm:col-span-2 grid gap-1 text-sm">
          <span className="text-gray-700">Description</span>
          <textarea value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="px-3 py-2 rounded-md border min-h-[100px]" />
        </label>
        <button className="sm:col-span-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white"><Plus className="h-4 w-4" /> Add opportunity</button>
      </form>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(i => (
          <div key={i.id} className="border rounded-xl p-4">
            <p className="font-semibold">{i.title}</p>
            <p className="text-sm text-gray-600">{i.organization}</p>
            <div className="flex gap-2 mt-3">
              <button className="px-2 py-1 text-sm rounded border inline-flex items-center gap-1"><Pencil className="h-4 w-4"/> Edit</button>
              <button onClick={()=>setItems(items.filter(x=>x.id!==i.id))} className="px-2 py-1 text-sm rounded border inline-flex items-center gap-1 text-red-600"><Trash2 className="h-4 w-4"/> Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnnForm() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ title:'', content:'', campus:'', type:'info' })

  const add = (e) => {
    e.preventDefault()
    setItems([{ id: crypto.randomUUID(), time: 'now', ...form }, ...items])
    setForm({ title:'', content:'', campus:'', type:'info' })
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-2 gap-3">
        <Field label="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} />
        <Field label="Campus" value={form.campus} onChange={e=>setForm({...form, campus:e.target.value})} />
        <label className="sm:col-span-2 grid gap-1 text-sm">
          <span className="text-gray-700">Content</span>
          <textarea value={form.content} onChange={e=>setForm({...form, content:e.target.value})} className="px-3 py-2 rounded-md border min-h-[100px]" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="text-gray-700">Type</span>
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} className="px-3 py-2 rounded-md border">
            <option value="info">Info</option>
            <option value="alert">Alert</option>
          </select>
        </label>
        <button className="sm:col-span-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white"><Plus className="h-4 w-4" /> Post announcement</button>
      </form>

      <div className="mt-6 grid gap-3">
        {items.map(i => (
          <div key={i.id} className="border rounded-xl p-4">
            <p className="font-semibold">{i.title} • <span className="text-gray-600">{i.campus}</span></p>
            <p className="text-gray-700">{i.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ClubsForm() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name:'', description:'', contact:'', logo:'' })

  const add = (e) => {
    e.preventDefault()
    setItems([{ id: crypto.randomUUID(), ...form }, ...items])
    setForm({ name:'', description:'', contact:'', logo:'' })
  }

  return (
    <div>
      <form onSubmit={add} className="grid sm:grid-cols-2 gap-3">
        <Field label="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <Field label="Logo URL" value={form.logo} onChange={e=>setForm({...form, logo:e.target.value})} />
        <Field label="Contact Email" value={form.contact} onChange={e=>setForm({...form, contact:e.target.value})} />
        <label className="sm:col-span-2 grid gap-1 text-sm">
          <span className="text-gray-700">Description</span>
          <textarea value={form.description} onChange={e=>setForm({...form, description:e.target.value})} className="px-3 py-2 rounded-md border min-h-[100px]" />
        </label>
        <button className="sm:col-span-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white"><Plus className="h-4 w-4" /> Add club</button>
      </form>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(i => (
          <div key={i.id} className="border rounded-xl p-4">
            <p className="font-semibold">{i.name}</p>
            <p className="text-sm text-gray-600">{i.contact}</p>
            <div className="flex gap-2 mt-3">
              <button className="px-2 py-1 text-sm rounded border inline-flex items-center gap-1"><Pencil className="h-4 w-4"/> Edit</button>
              <button onClick={()=>setItems(items.filter(x=>x.id!==i.id))} className="px-2 py-1 text-sm rounded border inline-flex items-center gap-1 text-red-600"><Trash2 className="h-4 w-4"/> Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
