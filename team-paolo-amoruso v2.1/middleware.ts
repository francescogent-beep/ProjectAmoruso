import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: '/:path*',
};

export default function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Apply authoritative CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self' https:; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; connect-src 'self' https: wss:; font-src 'self' https:; frame-src 'self' https:; worker-src 'self' blob:;"
  );

  return response;
}
