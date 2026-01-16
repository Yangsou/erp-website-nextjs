// import createMiddleware from 'next-intl/middleware'

import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

// export default createMiddleware(routing)

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
// }

import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  // Step 1: Use the incoming request (example)
  // const defaultLocale = request.headers.get('x-your-custom-locale')  'en'

  // Step 2: Create and call the next-intl middleware (example)
  const handleI18nRouting = createMiddleware({
    locales: routing.locales,
    defaultLocale: routing.defaultLocale,
  })
  const response = handleI18nRouting(request)

  // Step 3: Alter the response (example)
  response.headers.set('x-aidi-locale', routing.defaultLocale)

  return response
}

export const config = {
  // Match only internationalized pathnames

  // matcher: '/((?!trpc|_next|_vercel|.*\\..*).*)',

  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
