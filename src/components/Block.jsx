import RichText from './RichText';

// Panel with a titled header bar. Body is either prose paragraphs,
// a feature list, or arbitrary children.
export default function Block({ title, tag, prose, features, alarm, red, children }) {
  return (
    <div className={alarm ? 'blk alarm' : 'blk'}>
      <div className="blk-h">
        <span>{title}</span>
        {tag && <span className="t">{tag}</span>}
      </div>
      <div className={`blk-b${prose ? ' prose' : ''}${red ? ' red' : ''}`}>
        {prose &&
          prose.map((parts, i) => (
            <p key={i}>
              <RichText parts={parts} />
            </p>
          ))}
        {features && (
          <ul className="feat">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
}
