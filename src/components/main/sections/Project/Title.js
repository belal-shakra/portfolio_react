export default function Title({title}) {
  return (
    <div className="tab-title">
      <h3 className="title">
        {title} <i className="bi bi-caret-up-fill" />
      </h3>
    </div>
  );
}
