export function getVideoEmbed(type: 'youtube' | 'vimeo' | 'local', value?: string) {
  if (!value || type === 'local') return null;

  try {
    if (type === 'youtube') {
      const rawId = /^[a-zA-Z0-9_-]{6,}$/.test(value) ? value : null;
      const url = rawId ? null : new URL(value);
      const id = rawId || url?.searchParams.get('v') || url?.pathname.split('/').filter(Boolean).pop();
      return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0` : null;
    }

    const rawId = /^\d+$/.test(value) ? value : null;
    const url = rawId ? null : new URL(value);
    const id = rawId || url?.pathname.split('/').filter(Boolean).pop();
    return id ? `https://player.vimeo.com/video/${id}` : null;
  } catch {
    return null;
  }
}
