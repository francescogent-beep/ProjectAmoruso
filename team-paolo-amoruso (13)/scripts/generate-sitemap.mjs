import fs from 'fs';
import path from 'path';

const date = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://www.teamamoruso.com';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/coaching', priority: '0.9', changefreq: 'monthly' },
  { path: '/processo', priority: '0.8', changefreq: 'monthly' },
  { path: '/programmi', priority: '0.8', changefreq: 'monthly' },
  { path: '/risultati', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/chi-sono', priority: '0.7', changefreq: 'monthly' },
];

const blogSlugs = [
  'biomeccanica-ipertrofia-reale',
  'nutrizione-flessibile-vs-dieta-verticale',
  'gestione-stress-guadagni-muscolari',
  'cardio-e-bodybuilding-amico-o-nemico',
  'la-verita-sugli-integratori',
  'mindset-pro-disciplina-atleta-ifbb'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
  ${blogSlugs.map(slug => `
  <url>
    <loc>${BASE_URL}/blog/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

const publicPath = path.resolve('public');
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap successfully generated with ' + (staticRoutes.length + blogSlugs.length) + ' URLs for ' + BASE_URL);