import Link from "next/link"

export default function ProjectThree() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/projects" className="inline-block mb-6 hover:underline">
        ← Terug naar Projects
      </Link>

      <h1 className="text-3xl font-bold mb-4">Project 02 – Titel</h1>
      <p className="mb-6 text-gray-600">Korte beschrijving.</p>

      <div className="space-y-6">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          Afbeelding 1
        </div>
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          Afbeelding 2
        </div>
      </div>
    </main>
  )
}