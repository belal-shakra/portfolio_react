import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Project(projects) {

  console.log(projects.projects);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="header">
          <h2 className="title">Projects</h2>
        </div>
        <div className="container">
          <div className="cards">
            <Frontend projects={projects.projects.FrontEnd} />
          </div>

          <div className="cards">
            <Backend projects={projects.projects.BackEnd} />
          </div>
        </div>
      </div>
    </section>
  );
}
