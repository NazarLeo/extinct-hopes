export default function Window({ path, children }) {
  return (
    <div className="win">
      <div className="win-bar">
        <span className="win-path">{path}</span>
        <span className="dots">
          <i className="f" />
          <i className="f" />
          <i className="r" />
        </span>
      </div>
      <div className="win-body">{children}</div>
    </div>
  );
}
