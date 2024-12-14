import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Project() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="header">
          <h2 className="title">Projects</h2>
        </div>
        <div className="container">
          <div className="cards">
            <Frontend />
          </div>

          <div className="cards">
            <Backend />
          </div>
        </div>
      </div>
    </section>
  );
}
