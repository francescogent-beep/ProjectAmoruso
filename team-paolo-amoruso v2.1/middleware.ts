export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request) {
  // Returns a response that tells Vercel to continue to the next step (static file serving)
  // while injecting the authoritative Content-Security-Policy header.
  return new Response(null, {
    headers: {
      'x-middleware-next': '1',
      'Content-Security-Policy': "default-src 'self' https:; base-uri 'self'; object-src 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; connect-src 'self' https: wss:; font-src 'self' https:; frame-src 'self' https:; worker-src 'self' blob:;"
    },
  });
}