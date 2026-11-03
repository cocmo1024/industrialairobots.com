import type { APIRoute } from 'astro';
import { robots, fullName, robotUrl } from '../lib/db';
import { TOOLS } from '../lib/tools';
import { SITE } from '../site';

export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Every robot specification is copied from the manufacturer and cited with a link and retrieval date. Missing values are left blank, never estimated.',
    '',
    '## Data',
    `- [Robot dataset (JSON, CC BY 4.0)](${SITE.url}/data/robots.json)`,
    `- [Methodology](${SITE.url}/methodology/)`,
    '',
    '## Robots',
    ...robots.map((r) => `- [${fullName(r)}](${SITE.url}${robotUrl(r)})`),
    '',
    '## Tools',
    ...TOOLS.map((t) => `- [${t.name}](${SITE.url}/tools/${t.slug}/): ${t.blurb}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
