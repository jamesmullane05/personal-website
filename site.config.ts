export const SITE_BASE_PATH = "/personal-website";
export const SITE_URL = `https://jamesmullane05.github.io${SITE_BASE_PATH}`;

export function withBasePath(path: string) {
  return `${SITE_BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
