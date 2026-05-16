import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { servicesData } from '../src/data/servicesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = (process.env.SITE_URL || 'https://shubhambuilders.in').replace(/\/+$/, '');

const staticPaths = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/contact',
  '/privacy',
  '/terms'
];

const detailPaths = servicesData.map(s => `/service/${s.id}`);

const urls = [...staticPaths, ...detailPaths];
const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap generated: ${outPath}`);
