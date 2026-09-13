import type { MetadataRoute } from 'next';

const site = 'https://callpilot.xsol.ai';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/pricing'],
        disallow: ['/app/', '/login', '/signup', '/forgot-password', '/checkout', '/onboarding'],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
