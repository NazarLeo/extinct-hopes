import { Fragment } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a paragraph described as an array of parts.
 * A part is either a plain string, `{ b: '...' }` for emphasis, or
 * `{ link: '/path', text: '...' }` for an internal link.
 */
export default function RichText({ parts }) {
  return (
    <>
      {parts.map((part, i) => {
        if (typeof part === 'string') return <Fragment key={i}>{part}</Fragment>;
        if (part.b) return <b key={i}>{part.b}</b>;
        if (part.link)
          return (
            <Link key={i} to={part.link}>
              {part.text}
            </Link>
          );
        return null;
      })}
    </>
  );
}
