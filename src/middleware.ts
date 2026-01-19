import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { regionRegistry, DEFAULT_REGION } from '@/data/regions';

const REGIONS = Object.keys(regionRegistry);
const COOKIE_NAME = 'preferred_region';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Якщо регіон вже є в URL — записуємо куку і пропускаємо
  const pathnameHasRegion = REGIONS.some(
    (region) => pathname.startsWith(`/${region}`) || pathname === `/${region}`
  );

  if (pathnameHasRegion) {
    const region = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, region, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  // 2. Логіка для головної сторінки (/)
  if (pathname === '/') {
    // А. Спочатку перевіряємо КУКІ
    const cookieRegion = request.cookies.get(COOKIE_NAME)?.value;
    if (cookieRegion && REGIONS.includes(cookieRegion)) {
      return NextResponse.redirect(new URL(`/${cookieRegion}`, request.url));
    }

    // Б. Перевіряємо GEO IP (тільки через заголовки)
    // request.geo видалено, використовуємо тільки x-vercel-ip-country
    let country = request.headers.get('x-vercel-ip-country');
    
    // Переводимо в нижній регістр (ie, gb)
    country = country?.toLowerCase() || null;

    // Якщо ми знайшли країну користувача в нашому списку регіонів — перенаправляємо туди
    if (country && REGIONS.includes(country)) {
      return NextResponse.redirect(new URL(`/${country}`, request.url));
    }

    // В. Якщо нічого не спрацювало — дефолт (GB)
    return NextResponse.redirect(new URL(`/${DEFAULT_REGION}`, request.url));
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};