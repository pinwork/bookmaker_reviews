import { getPartnerLogoPath } from '@/utils/images';

interface ExternalLink {
  id: string;
  name: string;
  url: string;
}

interface ExternalLinksGridProps {
  links: ExternalLink[];
}

export function ExternalLinksGrid({ links }: ExternalLinksGridProps) {
  if (links.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        Featured Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {links.map((link) => {
          const logoPath = getPartnerLogoPath(link.id);

          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-slate-100 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
            >
              {logoPath ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoPath}
                  alt={link.name}
                  className="max-h-12 max-w-full object-contain"
                />
              ) : (
                <span className="text-sm font-medium text-gray-700 text-center">
                  {link.name}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
