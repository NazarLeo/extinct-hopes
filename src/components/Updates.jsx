import { Link } from 'react-router-dom';
import YouTubeEmbed from './YouTubeEmbed';
import { earlierUpdates, latestUpdate } from '../data/updates';
import { LINKS } from '../config/links';
import { trackNav, trackSocial, trackUpdate, trackVideo } from '../lib/analytics';

// One row in the log under the featured update.
function Row({ u }) {
  const href = u.watchUrl ?? u.href;

  const inner = (
    <>
      <span className="upd-date">{u.dateLabel}</span>
      <span className="upd-kind">{u.kind}</span>
      <span className="upd-t">
        <b>{u.title}</b>
        {u.gameTitle && <span>{u.gameTitle}</span>}
      </span>
      <span className="upd-go">{u.youtube ? 'Watch ↗' : 'Open ↗'}</span>
    </>
  );

  return href ? (
    <a
      className="upd"
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => trackUpdate(u.id, u.kind)}
    >
      {inner}
    </a>
  ) : (
    <div className="upd">{inner}</div>
  );
}

// "latest updates" — the newest thing made, featured with its own player,
// with everything before it listed underneath. Renders nothing when the feed
// in data/updates.js is empty.
export default function Updates() {
  if (!latestUpdate) return null;

  const u = latestUpdate;

  return (
    <section className="sec" id="latest">
      <div className="sec-h">
        <h2>latest updates</h2>
        <a
          className="sec-link"
          href={LINKS.youtube}
          target="_blank"
          rel="noopener"
          onClick={() => trackSocial('youtube', 'home_updates')}
        >
          more on youtube ↗
        </a>
      </div>

      <div className="upd-new">
        {u.youtube ? (
          <YouTubeEmbed
            id={u.youtube}
            poster={u.poster}
            title={u.title}
            label={`Play: ${u.title}`}
            onPlay={() => trackVideo(u.youtube, 'home_updates')}
          />
        ) : (
          u.poster && (
            <div className="trailer">
              <img alt={u.title} src={u.poster} />
            </div>
          )
        )}

        <div className="blk upd-card">
          <div className="blk-h">
            <span>
              <b className="live">New</b> · {u.kind}
            </span>
            <span className="t">{u.dateLabel}</span>
          </div>
          <div className="blk-b">
            <h3 className="upd-h">{u.title}</h3>
            {u.text && <p className="upd-p">{u.text}</p>}
            <div className="upd-acts">
              {u.watchUrl && (
                <a
                  className="btn btn-red"
                  href={u.watchUrl}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackUpdate(u.id, u.kind)}
                >
                  ▶ Watch on YouTube
                </a>
              )}
              {u.href && !u.watchUrl && (
                <a
                  className="btn"
                  href={u.href}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackUpdate(u.id, u.kind)}
                >
                  {u.linkLabel ?? 'Open ↗'}
                </a>
              )}
              {u.gamePath && (
                <Link
                  className="btn"
                  to={u.gamePath}
                  onClick={() => trackNav(u.gamePath, 'home_updates')}
                >
                  {u.gameTitle} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {earlierUpdates.length > 0 && (
        <div className="upd-list stagger">
          {earlierUpdates.map((e) => (
            <Row key={e.id} u={e} />
          ))}
        </div>
      )}
    </section>
  );
}
