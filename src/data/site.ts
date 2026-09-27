/** Root-relative path, prefixed with the GitHub Pages base. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+|\/+$/g, '');
  return normalized ? `${base}${normalized}/` : base;
}

export const site = {
  name: 'DevKit',
  version: '0.33.2',
  build: 73,
  requirement: 'macOS 14 or later',
  // Placeholder until a signed build is hosted.
  downloadHref: '#',
  description:
    'DevKit lives at the edge of your screen. Brush the edge, use a tool for a few seconds, and go back to work.',
};

export const nav = [
  { label: 'Releases', href: url('/releases') },
  { label: 'FAQ', href: url('/faq') },
  { label: 'Support us', href: url('/support') },
  { label: 'Contact', href: url('/contact') },
];

// Placeholders: swap in real addresses before launch.
export const contact = {
  email: 'hello@example.com',
  github: { label: 'github.com/your-org/devkit', href: '#' },
  social: { label: '@devkit', href: '#' },
};
