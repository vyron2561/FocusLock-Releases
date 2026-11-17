export type GithubAsset = {
  name: string;
  size: number;
  browser_download_url: string;
  digest?: string | null;
  content_type?: string;
};

export type GithubRelease = {
  id: number;
  name: string | null;
  tag_name: string;
  body: string | null;
  html_url: string;
  draft: boolean;
  prerelease: boolean;
  published_at: string | null;
  assets: GithubAsset[];
};

export type FocusLockRelease = {
  id: number;
  name: string;
  tagName: string;
  version: string;
  versionCode: number | null;
  publishedAt: string | null;
  notes: string;
  pageUrl: string;
  apk: {
    name: string;
    url: string;
    sizeBytes: number;
    sha256: string | null;
  };
};

const OWNER = "vyron2561";
const REPOSITORY = "FocusLock-Releases";
const RELEASES_URL = `https://api.github.com/repos/${OWNER}/${REPOSITORY}/releases?per_page=30`;

function toFocusLockRelease(release: GithubRelease): FocusLockRelease | null {
  const apk = release.assets.find((asset) => asset.name.toLowerCase().endsWith(".apk"));
  if (!apk) return null;

  const versionCodeMatch = release.body?.match(/version\s*code\s*[:=]\s*(\d+)/i);
  const digest = apk.digest?.startsWith("sha256:")
    ? apk.digest.slice("sha256:".length)
    : null;

  return {
    id: release.id,
    name: release.name?.trim() || release.tag_name,
    tagName: release.tag_name,
    version: release.tag_name.replace(/^v/i, ""),
    versionCode: versionCodeMatch ? Number(versionCodeMatch[1]) : null,
    publishedAt: release.published_at,
    notes: release.body || "لا توجد ملاحظات لهذا التحديث.",
    pageUrl: release.html_url,
    apk: {
      name: apk.name,
      url: apk.browser_download_url,
      sizeBytes: apk.size,
      sha256: digest
    }
  };
}

export async function getFocusLockReleases(): Promise<FocusLockRelease[]> {
  try {
    const response = await fetch(RELEASES_URL, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      cache: "no-store"
    });

    if (!response.ok) return [];
    const releases = (await response.json()) as GithubRelease[];

    return releases
      .filter((release) => !release.draft && !release.prerelease && Boolean(release.published_at))
      .map(toFocusLockRelease)
      .filter((release): release is FocusLockRelease => release !== null);
  } catch {
    return [];
  }
}

export async function getLatestFocusLockRelease(): Promise<FocusLockRelease | null> {
  const releases = await getFocusLockReleases();
  return releases[0] ?? null;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatReleaseDate(value: string | null): string {
  if (!value) return "غير محدد";
  return new Intl.DateTimeFormat("ar", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(value));
}
