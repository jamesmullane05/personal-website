export const SITE_BASE_PATH =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? "";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://jamesmullane05.github.io/personal-website";

export function withBasePath(path: string) {
  return `${SITE_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
