export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  return `${basePath}${path}`;
}

export function page(path = "/") {
  // The Chinese homepage lives at the origin root, including links to its sections.
  if (path === "/" || path.startsWith("/#")) return path;
  return `${basePath}${path}`;
}
