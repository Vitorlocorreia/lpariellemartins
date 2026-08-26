import fs from 'fs';
import sharp from 'sharp';

async function main() {
  // 1. Favicon SVG
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="128" fill="#2563EB"/>
  <path d="M128 384V128l128 144 128-144v256h-56V216l-72 80-72-80v168H128z" fill="#FFFFFF"/>
</svg>`;
  fs.writeFileSync('public/favicon.svg', faviconSvg);

  // 2. Favicon PNGs
  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile('public/favicon-32x32.png');

  await sharp(Buffer.from(faviconSvg))
    .resize(16, 16)
    .png()
    .toFile('public/favicon-16x16.png');

  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // 3. OG Image (1200x630)
  try {
    const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2B5E"/>
          <stop offset="60%" stop-color="#111C40"/>
          <stop offset="100%" stop-color="#0B132B"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1000" cy="150" r="300" fill="#2563EB" opacity="0.25"/>
      <rect x="80" y="80" width="64" height="64" rx="16" fill="#2563EB"/>
      <path d="M96 128V96l32 36 32-36v64h-14v-42l-18 20-18-20v42H96z" fill="#FFFFFF"/>
      <text x="160" y="122" font-family="sans-serif" font-size="28" font-weight="bold" fill="#FFFFFF" letter-spacing="1">ARIELLE MARTINS</text>
      <text x="80" y="240" font-family="sans-serif" font-size="20" font-weight="bold" fill="#60A5FA" letter-spacing="3">ESPECIALISTA EM GERONTOLOGIA</text>
      <text x="80" y="320" font-family="serif" font-size="52" font-weight="bold" fill="#FFFFFF">Movimento para viver bem</text>
      <text x="80" y="390" font-family="serif" font-size="52" font-weight="bold" fill="#60A5FA">em todas as fases da vida.</text>
      <text x="80" y="470" font-family="sans-serif" font-size="24" fill="#CBD5E1">Treinamento especializado para adultos e idosos.</text>
      <text x="80" y="510" font-family="sans-serif" font-size="24" fill="#CBD5E1">Força, equilíbrio, funcionalidade e autonomia.</text>
      <rect x="80" y="550" width="300" height="4" rx="2" fill="#2563EB"/>
    </svg>`;

    await sharp(Buffer.from(ogSvg))
      .jpeg({ quality: 90 })
      .toFile('public/og-image.jpg');

    await sharp(Buffer.from(ogSvg))
      .webp({ quality: 90 })
      .toFile('public/og-image.webp');
  } catch (e) {
    console.error('OG error:', e);
  }

  // 4. Robots.txt
  const robotsTxt = `# Robots.txt for Arielle Martins Personal Trainer
User-agent: *
Allow: /

Sitemap: https://ariellemartins.com.br/sitemap.xml
`;
  fs.writeFileSync('public/robots.txt', robotsTxt);

  // 5. Sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ariellemartins.com.br/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
  fs.writeFileSync('public/sitemap.xml', sitemapXml);

  // 6. llms.txt (Standard for AI / Large Language Models discovery)
  const llmsTxt = `# Arielle Martins — Personal Trainer & Especialista em Gerontologia

> Movimento para viver bem em todas as fases da vida.

## Sobre Arielle Martins
Profissional de Educação Física e pós-graduanda em Gerontologia, com atuação voltada ao exercício físico para adultos e idosos.
O trabalho parte de uma ideia simples: não basta acrescentar anos à vida. É preciso preservar a capacidade de vivê-los bem.

## Modalidades de Atendimento
- **Consulta Inicial:** Ponto de partida individualizado para compreender histórico, rotina e objetivos de cada pessoa.
- **Acompanhamento Presencial:** Treinamento próximo e personalizado, com foco em força funcional, equilíbrio, mobilidade e segurança para o cotidiano.
- **Acompanhamento On-line:** Planejamento estruturado para quem deseja treinar com orientação profissional à distância.

## Método
1. Conhecer
2. Planejar
3. Treinar
4. Acompanhar

## Contato & Agendamento
- Website Oficial: https://ariellemartins.com.br
- Instagram: @ariellemartins.pt
- E-mail: contato@ariellemartins.com.br
`;
  fs.writeFileSync('public/llms.txt', llmsTxt);

  // 7. Manifest.json
  const manifestJson = JSON.stringify({
    name: "Arielle Martins Personal Trainer",
    short_name: "Arielle Martins",
    description: "Treinamento especializado para adultos e idosos. Força, equilíbrio e qualidade de vida.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#2563EB",
    icons: [
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }, null, 2);
  fs.writeFileSync('public/manifest.json', manifestJson);

  console.log('Generated all SEO, Favicons, Open Graph, Robots, Sitemap, llms.txt and Manifest successfully!');
}

main();
