import Sub from "./Sub";

export default function Section({title, classes, children}) {
  return (
    <>
      <div className={"block " + classes}>
        <h3 className="title">{title}</h3>
        <div className="sub-block">
          <Sub title="Overview">
            {children}
          </Sub>
        </div>
      </div>
    </>
  );
}
