const SOURCE = 'extinct_hopes_site';

// Tags a Google Play link with the `referrer` parameter, so the Play Console
// can attribute store visits and installs to this site (Store listing
// acquisition → UTM-tagged traffic). `campaign` is the placement on the site,
// `content` the game. Only for links people click: structured data keeps the
// clean store URL.
export function playUrl(url, campaign, content) {
  const referrer = new URLSearchParams({
    utm_source: SOURCE,
    utm_medium: 'website',
    utm_campaign: campaign,
    ...(content && { utm_content: content }),
  }).toString();
  return `${url}${url.includes('?') ? '&' : '?'}referrer=${encodeURIComponent(referrer)}`;
}
