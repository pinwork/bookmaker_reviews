import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import { isValidRegion, getBookmakerBySlug } from '@/data';

interface RouteParams {
  params: Promise<{ region: string; slug: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { region, slug } = await params;

  // Validate region
  if (!isValidRegion(region)) {
    return new NextResponse('Region not found', { status: 404 });
  }

  // Get bookmaker data
  const bookmaker = getBookmakerBySlug(slug, region);

  // Bookmaker not found or not enabled in this region
  if (!bookmaker) {
    return new NextResponse('Bookmaker not found', { status: 404 });
  }

  // No affiliate link configured
  if (!bookmaker.affiliateLink) {
    return new NextResponse('Affiliate link not configured', { status: 404 });
  }

  // 307 Temporary Redirect to affiliate link
  redirect(bookmaker.affiliateLink);
}
