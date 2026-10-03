import { useEffect } from 'react';
import { headTags } from '../data/seo';

// The attribute that identifies a tag (<meta name>, <meta property>, <link rel>).
const keyOf = ({ tag, attrs }) => {
  const k = tag === 'link' ? 'rel' : attrs.name ? 'name' : 'property';
  return [k, attrs[k]];
};

function applyTag(descriptor) {
  const [k, v] = keyOf(descriptor);
  let el = document.head.querySelector(`${descriptor.tag}[${k}="${v}"]`);
  if (!el) {
    el = document.createElement(descriptor.tag);
    document.head.appendChild(el);
  }
  Object.entries(descriptor.attrs).forEach(([name, value]) => el.setAttribute(name, value));
}

/**
 * Keeps <title> and the social meta tags in sync with the active route.
 * The same tags are already in the HTML for every route (prerendered at
 * build time, see scripts/vite-plugin-site.js), so this only matters when
 * navigating between pages without a reload. `meta` comes from data/seo.js.
 */
export default function useMeta(meta) {
  useEffect(() => {
    document.title = meta.title;
    headTags(meta).forEach(applyTag);
    // Tags a previous route may have set that this one does not use.
    if (!meta.noindex) document.head.querySelector('meta[name="robots"]')?.remove();
    if (!meta.path) {
      document.head.querySelector('link[rel="canonical"]')?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
  }, [meta]);
}
