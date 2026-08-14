export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}

export function assetPath(path: string) {
  return sitePath(path);
}
