import { MetadataRoute } from 'next'
 
const navItems = [
  { href: '/' },
  { href: '/grooming' },
  { href: '/clinic' },
  { href: '/products' },
  { href: '/about' },
  { href: '/contact' },
];
 
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://petsneed.in'

  const routes = navItems.map((item) => ({
    url: `${siteUrl}${item.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as 'weekly',
    priority: item.href === '/' ? 1 : 0.9,
  }));

  return routes;
}
