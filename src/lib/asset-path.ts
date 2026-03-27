/**
 * Prepends the NEXT_PUBLIC_BASE_PATH to asset paths.
 * This is needed because Next.js Image with unoptimized: true does NOT
 * automatically apply basePath to src in static exports.
 *
 * Set NEXT_PUBLIC_BASE_PATH=/lukerenner-co for GitHub Pages subpath hosting.
 * Leave it unset (empty string) when using a custom domain at root.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
