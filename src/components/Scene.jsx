import { Fragment } from 'react';

// Pieces of a full-screen scene, shared by the home sections and the page
// headers. Styles and motion: styles/sections.css, hooks/useSectionMotion.js.

// Backgrounds live in public/sections: `<name>-1600|2560.webp` for wide
// screens and `<name>-m.webp`, a portrait crop, for phones. 'fog' is the
// site's forest photo, used where a page has no artwork of its own.
export function Bg({ name }) {
  const src = (suffix) => `/sections/${name}-${suffix}.webp`;
  return (
    <div className="pg-bg" aria-hidden="true">
      <div className="pg-bgp">
        {name === 'fog' ? (
          <img alt="" decoding="async" src="/img/forest.jpg" />
        ) : (
          <picture>
            <source media="(max-width: 720px)" srcSet={src('m')} />
            <img
              alt=""
              loading="lazy"
              decoding="async"
              sizes="100vw"
              srcSet={`${src(1600)} 1600w, ${src(2560)} 2560w`}
              src={src(2560)}
            />
          </picture>
        )}
      </div>
    </div>
  );
}

// The wrapper takes the parallax, the image the reveal.
export function Character({ id, ar, mw, dir = 'hero', widths = [700, 1400], logo }) {
  const src = (w) => `/${dir}/${id}-${w}.webp`;
  const [small, large] = widths;
  return (
    <div
      className={logo ? 'pg-char pg-logo' : 'pg-char'}
      aria-hidden="true"
      style={{ '--ar': ar, '--mw': mw }}
    >
      <img
        alt=""
        loading="lazy"
        decoding="async"
        sizes="(max-width: 720px) 100vw, 50vw"
        srcSet={`${src(small)} ${small}w, ${src(large)} ${large}w`}
        src={src(large)}
      />
    </div>
  );
}

// The title rises word by word out of a clipped line.
export function Title({ as: Tag = 'h2', id, text }) {
  return (
    <Tag className="pg-title" id={id}>
      {text.split(' ').map((word, i) => (
        <Fragment key={i}>
          <span className="w">
            <span style={{ '--i': i }}>{word}</span>
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}

export function Eyebrow({ red, children }) {
  return (
    <span className={red ? 'eyebrow red pg-rv' : 'eyebrow pg-rv'} style={{ '--d': '.4s' }}>
      {children}
    </span>
  );
}

// One scene. `side` is left | right | center; `poster` is an optional framed
// image (fan game covers); `children` is the copy.
export default function Scene({
  className = '',
  side = 'left',
  bg,
  number,
  char,
  poster,
  labelledBy,
  children,
}) {
  const cls = ['pg', `pg-${side}`, bg === 'fog' && 'pg-fog', className].filter(Boolean).join(' ');
  return (
    <section className={cls} aria-labelledby={labelledBy}>
      <Bg name={bg} />
      <div className="pg-shade" aria-hidden="true" />
      {number && (
        <span className="pg-num" aria-hidden="true">
          {number}
        </span>
      )}
      {char && <Character {...char} />}
      {poster}
      <div className="pg-copy">{children}</div>
    </section>
  );
}
