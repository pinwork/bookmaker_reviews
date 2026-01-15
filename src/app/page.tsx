import { getDb } from '@/lib/mongodb'

export default async function Home() {
  const db = await getDb('producthunt')
  const collections = await db.listCollections().toArray()
  const collectionNames = collections.map(c => c.name).sort()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          ProductHunt Database Collections
        </h1>

        <p className="text-lg text-muted-foreground">
          Total collections: {collectionNames.length}
        </p>

        <div className="w-full rounded-lg border border-border bg-card p-6">
          <ul className="grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
            {collectionNames.map((name) => (
              <li
                key={name}
                className="rounded-md bg-muted px-3 py-2 text-sm font-mono hover:bg-accent transition-colors"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}
