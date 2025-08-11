/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://lazadessert.cafe',
  generateRobotsTxt: false, // We're using Next.js built-in robots.ts
  generateIndexSitemap: false, // We're using Next.js built-in sitemap.ts
  exclude: ['/checkout/*'], // Exclude dynamic checkout pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://lazadessert.cafe/sitemap.xml',
    ],
  },
}
