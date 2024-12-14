export default function Card({title, category, link, children}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-img">
          {children}
        </div>

        <div className="card-text">
          <h4>{title}</h4>
          <span className="category">{category}</span>
        </div>

        <div className="card-btn">
          <a target="_blank" hRef={link}>
            Show <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
}
