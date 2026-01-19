import { notFound } from 'next/navigation';
import { getActiveBookmakers } from '@/data';
import { getSiteConfig } from '@/data/regions';
import { getTrustBadgesByRegion } from '@/data/trustSignals';
// ❌ RegionSwitcher тут більше не потрібен, він тепер у шапці

export default async function RegionHomePage({ 
  params 
}: { 
  params: Promise<{ region: string }> 
}) {
  const { region } = await params;

  const config = getSiteConfig(region);
  if (!config) return notFound();

  const bookmakers = getActiveBookmakers(region);
  const trustBadges = getTrustBadgesByRegion(region);

  return (
    <main className="max-w-4xl mx-auto p-8 font-sans">
      
      {/* Заголовок сторінки */}
      <div className="mb-8 text-center">
         <h1 className="text-4xl font-black text-gray-900 mb-2">{config.name} Betting Sites</h1>
         <p className="text-xl text-gray-500">{config.tagline}</p>
      </div>

      {/* Список букмекерів */}
      <section className="mb-12">
        {bookmakers.length > 0 ? (
          <div className="grid gap-4">
            {bookmakers.map((bookie) => (
              <div key={bookie.slug} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-xl text-blue-900">{bookie.name}</h3>
                  {/* Бейдж з рейтингом або tagline */}
                  <span className="text-xs font-bold bg-green-100 text-green-800 px-2 py-1 rounded">
                    Recommended
                  </span>
                </div>
                
                <div className="text-base font-medium text-gray-700 mb-2">
                   🎁 {bookie.welcomeOffers[0]?.title || 'No active offer'}
                </div>
                
                <div className="text-xs text-gray-400">
                  {bookie.content.tagline}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-center">No bookmakers found for this region.</p>
        )}
      </section>

      {/* Футер з довірою */}
      <footer className="mt-12 pt-8 border-t text-center">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
          Trusted & Regulated in {region.toUpperCase()}
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {trustBadges.map((badge) => (
            <div 
              key={badge.slug} 
              className="px-3 py-1 border rounded-full text-[10px] font-bold text-gray-500 bg-white"
            >
              🛡 {badge.name} 
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}