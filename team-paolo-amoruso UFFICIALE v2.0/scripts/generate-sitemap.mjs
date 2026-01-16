
import fs from 'fs';
import path from 'path';

const date = new Date().toISOString().split('T')[0];
const BASE_URL = 'https://teamamoruso.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

// Fixed: Use path.resolve('public') instead of path.join(process.cwd(), 'public') to avoid process type errors
const publicPath = path.resolve('public');
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

fs.writeFileSync(path.join(publicPath, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap successfully generated for ' + BASE_URL);
