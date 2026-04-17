// Unsplash direct URL helpers.
// Curated photo IDs picked from unsplash.com — free to use per Unsplash License.
// Photo IDs must be replaced with real IDs before running seed.

const BASE = "https://images.unsplash.com/photo-";

export function unsplashUrl(photoId: string, width = 1024): string {
  return `${BASE}${photoId}?w=${width}&fm=webp&q=80&fit=crop`;
}

export function unsplashThumb(photoId: string): string {
  return unsplashUrl(photoId, 400);
}
