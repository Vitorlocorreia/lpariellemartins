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
    const photoBuf = await sharp('public/images/hero/hero-main.jpg')
      .resize(480, 560, { fit: 'cover', position: 'top' })
      .composite([{
        input: Buffer.from('<svg width="480" height="560"><rect x="0" y="0" width="480" height="560" rx="28" ry="28" fill="#fff"/></svg>'),
        blend: 'dest-in'
      }])
      .png()
      .toBuffer();

    const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1B2B5E"/>
          <stop offset="50%" stop-color="#111C40"/>
          <stop offset="100%" stop-color="#0B132B"/>
        </linearGradient>
        <radialGradient id="glow" cx="75%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#2563EB" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#2563EB" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect width="1200" height="630" fill="url(#glow)"/>

      <!-- Brand Logo -->
      <rect x="70" y="60" width="52" height="52" rx="14" fill="#2563EB"/>
      <path d="M84 98V74l19 22 19-22v24h-9V82l-10 12-10-12v16H84z" fill="#FFFFFF"/>
      <text x="136" y="94" font-family="sans-serif" font-size="24" font-weight="bold" fill="#FFFFFF" letter-spacing="1.5">ARIELLE MARTINS</text>
      <text x="136" y="110" font-family="sans-serif" font-size="12" font-weight="bold" fill="#60A5FA" letter-spacing="2">LONGEVIDADE &amp; SAÚDE</text>

      <!-- Badge -->
      <rect x="70" y="150" width="290" height="34" rx="17" fill="#2563EB" fill-opacity="0.25" stroke="#2563EB" stroke-opacity="0.5" stroke-width="1"/>
      <text x="90" y="172" font-family="sans-serif" font-size="13" font-weight="bold" fill="#60A5FA" letter-spacing="1.5">ESPECIALISTA EM GERONTOLOGIA</text>

      <!-- Headline -->
      <text x="70" y="240" font-family="serif" font-size="42" font-weight="normal" fill="#FFFFFF">Movimento para viver bem</text>
      <text x="70" y="295" font-family="serif" font-size="42" font-weight="bold" fill="#60A5FA">em todas as fases da vida.</text>

      <!-- Subtitle -->
      <text x="70" y="370" font-family="sans-serif" font-size="19" fill="#CBD5E1" font-weight="400">Treinamento especializado para adultos e idosos.</text>
      <text x="70" y="402" font-family="sans-serif" font-size="19" fill="#94A3B8" font-weight="400">Força, equilíbrio, funcionalidade e autonomia.</text>

      <!-- Feature Pills -->
      <g transform="translate(70, 445)">
        <rect x="0" y="0" width="180" height="36" rx="10" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1"/>
        <text x="18" y="23" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F8FAFC">✓ Presencial &amp; On-line</text>

        <rect x="195" y="0" width="190" height="36" rx="10" fill="#FFFFFF" fill-opacity="0.1" stroke="#FFFFFF" stroke-opacity="0.2" stroke-width="1"/>
        <text x="18" y="23" font-family="sans-serif" font-size="13" font-weight="bold" fill="#F8FAFC">✓ Prevenção de Quedas</text>
      </g>

      <!-- Domain Link -->
      <text x="70" y="555" font-family="sans-serif" font-size="16" font-weight="bold" fill="#60A5FA">www.ariellelongividade.com.br</text>
      <line x1="70" y1="570" x2="320" y2="570" stroke="#2563EB" stroke-width="2"/>

      <!-- Photo Border Frame -->
      <rect x="666" y="31" width="488" height="568" rx="32" fill="none" stroke="#60A5FA" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;

    await sharp(Buffer.from(ogSvg))
      .composite([
        {
          input: photoBuf,
          top: 35,
          left: 670
        }
      ])
      .jpeg({ quality: 92 })
      .toFile('public/og-image.jpg');

    await sharp('public/og-image.jpg')
      .webp({ quality: 92 })
      .toFile('public/og-image.webp');

    console.log('OG Image generated with real photo!');
  } catch (e) {
    console.error('OG error:', e);
  }

  // 4. Robots.txt
  const robotsTxt = `# Robots.txt for Arielle Martins Personal Trainer
User-agent: *
Allow: /

Sitemap: https://www.ariellelongividade.com.br/sitemap.xml
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
