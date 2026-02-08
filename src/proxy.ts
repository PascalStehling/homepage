import createMiddleware from 'next-intl/middleware';

export const proxy = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(en|de)/:path*',
    '/((?!api|_next|_vercel|.*\\..*|favicon\\.ico|robots\\.txt|sitemap\\.xml|opengraph-image).*)'
  ]
};
