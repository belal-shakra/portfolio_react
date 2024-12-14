export default function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="container">
        <div className="header">
          <h2 className="title">Resume</h2>
        </div>
        <div className="container">
          <div className="block overview">
            <h3 className="title">Summary</h3>
            <div className="sub-block">
              <span className="circle" />
              <span className="sub-block-title">overview</span>
              <div className="content">
                <p className="meta">
                  I'm Belal Shakra. I'm 24 years old. <br />
                  Now I'm a web development intern at Orange Coding Academy.
                </p>
                <ul>
                  <li>Amman, Jordan</li>
                  <li>+962 79076 1493</li>
                  <li>belal.a.shakra@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="block edu">
            <h3 className="title">Education</h3>
            <div className="sub-block">
              <span className="circle" />
              <span className="sub-block-title">
                Bachelor's of Computer Science
              </span>
              <div className="content">
                <p className="meta">
                  <span className="date">Sep 2019 - Feb 2024</span>
                </p>
                <p className="location">The University of Jordan, Amman</p>
                <p className="details">
                  I studied computer science at the King Abdullah II School of
                  Information Technology. <br />
                  My GPA is 2.73 out of 4 (Good).
                </p>
              </div>
            </div>
          </div>
          <div className="block pro">
            <h3 className="title">Professional Experience</h3>
            <div className="sub-block">
              <span className="circle" />
              <span className="sub-block-title">
                Full-Stack Web Development Internship
              </span>
              <div className="content">
                <p className="meta">
                  <span className="date">Sep 2024 - </span>
                </p>
                <p className="location">Orange Coding Academy, Amman</p>
                <p className="details">
                  The internship is about full-stack web development. <br />
                  The internship technologies are :
                </p>
                <ul>
                  <li>Front End: HTML, CSS, JavaScript, React.</li>
                  <li>Back End: PHP, Laravel.</li>
                  <li>Database: MySQL.</li>
                </ul>
                Also, the internship includes some topics about web security.
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
