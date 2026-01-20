import Link from "next/link";
import { RegionSwitcher } from "@/components/RegionSwitcher";

interface SiteHeaderProps {
  region: string;
}

export function SiteHeader({ region }: SiteHeaderProps) {
  // Налаштування пунктів меню
  const navItems = [
    { name: "Bookmakers", href: `/${region}/reviews` },
    { name: "Bonuses", href: `/${region}/bonuses` },
    { name: "Daily Boosts", href: `/${region}/daily-boosts` },
    { name: "Guides", href: `/${region}/guides` },
    { name: "Bettor Resources", href: `/${region}/bettor-resources` },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/90">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* 1. ЛОГОТИП (З посиланням на головну) */}
        <Link href={`/${region}`} className="hover:opacity-80 transition-opacity flex-shrink-0">
          <img 
            src="/images/branding/logo-full.svg" 
            alt="FreeBetGeek" 
            className="h-10 w-auto" // Висота 40px, ширина підлаштується автоматично
          />
        </Link>

        {/* 2. МЕНЮ (Приховане на мобільних, видиме на ПК) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-bold text-slate-600 hover:text-blue-900 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 3. ПЕРЕМИКАЧ РЕГІОНІВ */}
        <div className="flex items-center">
            <RegionSwitcher currentRegion={region} />
        </div>
        
      </div>
    </nav>
  );
}