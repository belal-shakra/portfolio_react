export default function Sub({title, children}) {
  return (
    <>
      <span className="circle" />
      <span className="sub-block-title">{title}</span>
      <div className="content">
        {children}
      </div>
    </>
  );
}
