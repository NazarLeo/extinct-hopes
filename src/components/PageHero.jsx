import { useRef } from 'react';
import useSectionMotion from '../hooks/useSectionMotion';
import Scene, { Eyebrow, Title } from './Scene';

// The first screen of an inner page: a scene that opens when the page does,
// carrying the eyebrow, the <h1> and whatever copy the page passes in.
// Elements in `children` that should rise in with the rest take the `pg-rv`
// class and a `--d` delay.
export default function PageHero({ scene, id, eyebrow, red, title, className, number, poster, children }) {
  const root = useRef(null);
  useSectionMotion(root);

  return (
    <div className="pgs" ref={root}>
      <Scene
        {...scene}
        className={`pg-hero${className ? ` ${className}` : ''}`}
        number={number}
        poster={poster}
        labelledBy={id}
      >
        <Eyebrow red={red}>{eyebrow}</Eyebrow>
        <Title as="h1" id={id} text={title} />
        {children}
      </Scene>
    </div>
  );
}
