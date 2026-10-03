import { useEffect, useState } from 'react';

const TIMEOUT_MS = 3000;

/**
 * Members currently online in the Discord server, from the public widget.
 * Returns null until (and unless) a count is available: a failed request, a
 * timeout, a disabled widget or a count of zero all just leave it null so the
 * caller can render nothing and the page stays exactly as it was.
 * Needs Server Settings → Widget enabled in Discord.
 */
export default function useDiscordOnline(serverId) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (!serverId) return undefined;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

    fetch(`https://discord.com/api/guilds/${serverId}/widget.json`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const n = Number(data?.presence_count);
        if (Number.isFinite(n) && n > 0) setCount(n);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [serverId]);

  return count;
}
