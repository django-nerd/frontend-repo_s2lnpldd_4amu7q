import ClubsDirectory from '../components/ClubsDirectory'

const sample = [
  { id: 'c1', name: 'GDSC', description: 'Google Developer Student Clubs — learn, build and grow together.', contact: 'lead@gdsc.example', logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=600&auto=format&fit=crop' },
  { id: 'c2', name: 'Enactus', description: 'Students tackling community challenges through social entrepreneurship.', contact: 'info@enactus.example', logo: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop' },
  { id: 'c3', name: 'AI Kenya - Campus', description: 'Community of learners exploring machine learning and AI.', contact: 'aikenya@example', logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop' },
]

export default function Clubs() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Clubs & Communities</h1>
      <ClubsDirectory clubs={sample} />
    </div>
  )
}
