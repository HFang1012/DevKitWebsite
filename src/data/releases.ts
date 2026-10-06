// Every DevKit release, read from this repository's GitHub Releases when the
// site builds. DevKit's release workflow publishes each one (with its .dmg and
// the notes from DevKit's CHANGELOG.md), and publishing a release redeploys
// the site -- so nothing here is edited by hand.
//
// Newest first; the first entry is shown as Latest.

export type ChangeCategory = 'Added' | 'Changed' | 'Deprecated' | 'Removed' | 'Fixed' | 'Security';

export interface Change {
  title: string;
  body: string;
}

export interface Release {
  version: string;
  build: number;
  date: string;
  downloadHref: string;
  changes: Partial<Record<ChangeCategory, Change[]>>;
}

export const releasesRepo = 'HFang1012/DevKitWebsite';
/** Where downloads live, and the fallback link when the list is unavailable. */
export const releasesPage = `https://github.com/${releasesRepo}/releases`;

const categories: ChangeCategory[] = ['Added', 'Changed', 'Deprecated', 'Removed', 'Fixed', 'Security'];

interface GitHubRelease {
  tag_name: string;
  html_url: string;
  body: string | null;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
  assets: { name: string; browser_download_url: string }[];
}

/** Changelog text is Markdown; the cards show plain text. */
function plain(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|[\s(])[*_]([^*_]+)[*_](?=[\s).,;:!?]|$)/g, '$1$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/** "- **Title.** Body" becomes a titled change; an entry without a bold lead is all title. */
function toChange(entry: string): Change {
  const match = entry.match(/^\*\*(.+?)\*\*\s*(.*)$/s);
  return match ? { title: plain(match[1]), body: plain(match[2]) } : { title: plain(entry), body: '' };
}

/**
 * Splits notes written in DevKit's changelog style: "### Category" headings,
 * "- " entries whose wrapped lines are indented, and a "---" before the
 * install instructions, which are not part of the changes. "### Internal"
 * (developer-only changes) is not a category here, so it is left out.
 */
function parseChanges(body: string): Release['changes'] {
  const changes: Release['changes'] = {};
  let category: ChangeCategory | null = null;
  let entry: string | null = null;

  const flush = () => {
    if (category && entry) (changes[category] ??= []).push(toChange(entry.trim()));
    entry = null;
  };

  for (const line of body.split(/\r?\n/)) {
    if (/^---\s*$/.test(line)) break;
    const heading = line.match(/^###\s+(.+?)\s*$/);
    if (heading) {
      flush();
      category = categories.find((name) => name === heading[1]) ?? null;
    } else if (line.startsWith('- ')) {
      flush();
      entry = line.slice(2);
    } else if (entry !== null && /^\s+\S/.test(line)) {
      entry += ` ${line.trim()}`;
    } else if (line.trim() !== '') {
      flush();
    }
  }
  flush();
  return changes;
}

/** The workflow's hidden first line: <!-- devkit-release version=… build=… date=… -->. */
function metadata(body: string): Record<string, string> {
  const comment = body.match(/<!--\s*devkit-release\s+([^>]*?)\s*-->/);
  if (!comment) return {};
  return Object.fromEntries(comment[1].split(/\s+/).map((pair) => pair.split('=') as [string, string]));
}

function compareVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i += 1) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function toRelease(release: GitHubRelease): Release {
  const body = release.body ?? '';
  const meta = metadata(body);
  const dmg = release.assets.find((asset) => asset.name.endsWith('.dmg'));
  return {
    version: meta.version ?? release.tag_name.replace(/^v/, ''),
    build: Number(meta.build ?? 0),
    // A backfilled release is published long after it shipped; the changelog date wins.
    date: meta.date ?? (release.published_at ?? '').slice(0, 10),
    downloadHref: dmg?.browser_download_url ?? release.html_url,
    changes: parseChanges(body),
  };
}

async function loadReleases(): Promise<Release[]> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'devkit-website',
  };
  // The deploy workflow passes its token, which lifts the anonymous rate limit.
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const response = await fetch(`https://api.github.com/repos/${releasesRepo}/releases?per_page=100`, {
      headers,
    });
    if (!response.ok) throw new Error(`GitHub answered ${response.status} ${response.statusText}`);
    const all = (await response.json()) as GitHubRelease[];
    return all
      .filter((release) => !release.draft && !release.prerelease)
      .map(toRelease)
      .sort((a, b) => compareVersions(b.version, a.version));
  } catch (error) {
    // In CI a failed fetch fails the build, so the live site keeps its last
    // good deploy instead of losing its download links. Locally, carry on.
    if (process.env.CI) throw error;
    console.warn(`[releases] Could not load releases: ${error}`);
    return [];
  }
}

export const releases: Release[] = await loadReleases();
export const latestRelease: Release | undefined = releases[0];
