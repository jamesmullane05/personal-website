export const SITE_URL = "https://jamesmullane05.github.io";

export function withBasePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}
