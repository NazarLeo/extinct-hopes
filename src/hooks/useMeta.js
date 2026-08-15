import { useEffect } from 'react';

function setTag(selector, attr, value) {
  if (!value) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, name] = selector.match(/\[(?:name|property)="([^"]+)"\]/) || [];
    el.setAttribute(selector.includes('property') ? 'property' : 'name', name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Keeps <title> and the social meta tags in sync with the active route.
 * The site is client-rendered, so this runs on navigation rather than
 * being baked into the HTML.
 */
export default function useMeta({ title, description, ogTitle, ogDescription, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;
    setTag('meta[name="description"]', 'content', description);
    setTag('meta[property="og:title"]', 'content', ogTitle || title);
    setTag('meta[property="og:description"]', 'content', ogDescription || description);
    setTag('meta[property="og:image"]', 'content', ogImage);
  }, [title, description, ogTitle, ogDescription, ogImage]);
}
