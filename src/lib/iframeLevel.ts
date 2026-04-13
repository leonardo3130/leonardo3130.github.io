export const getIframeLevel = (): number => {
  const params = new URLSearchParams(window.location.search);
  const level = Number.parseInt(params.get("iframeLevel") ?? "0", 10);
  return Number.isFinite(level) ? Math.abs(level) : 0;
};

export const withIframeLevel = (path: string): string => {
  const level = getIframeLevel();
  const target = new URL(path, window.location.origin);
  target.searchParams.set("iframeLevel", String(level));
  return `${target.pathname}${target.search}`;
};
