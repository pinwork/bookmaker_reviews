import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default async function RegionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Меню зверху (Лого + Навігація + Прапорці) */}
      <SiteHeader region={region} />

      {/* Контент сторінки */}
      <div className="flex-1">
        {children}
      </div>

      {/* Футер */}
      <SiteFooter region={region} />
    </div>
  );
}