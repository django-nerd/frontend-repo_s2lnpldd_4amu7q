export default function ClubsDirectory({ clubs = [] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {clubs.map((c) => (
        <div key={c.id} className="rounded-xl border bg-white p-4 flex gap-3 items-center">
          <img src={c.logo} alt={c.name} className="h-12 w-12 rounded object-cover" />
          <div>
            <p className="font-semibold">{c.name}</p>
            <p className="text-sm text-gray-600 line-clamp-2">{c.description}</p>
            {c.contact && (
              <a href={`mailto:${c.contact}`} className="text-xs text-blue-600 hover:underline">{c.contact}</a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
