import AboutImage from "../../../assets/imgs/me-2021.jpg";

export default function About({about}) {

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="header">
          <h2 className="title">About</h2>
          <p>{about.description}</p>
        </div>
        <div className="container">
          <div className="img">
            <img src={AboutImage} alt="belal-shakra" />
          </div>
          
          <div className="info">
            <div>
              <div>
                <h3 className="title">{about.postion}</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil blanditiis fuga rerum consequatur odio impedit iusto
                  laboriosam, deleniti ratione quod!
                </p>
              </div>
              <div className="dtls">
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Birthday:</b> <span>{about.birthday}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Age:</b> <span>{about.age}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Website:</b> <span>{about.website}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Degree:</b> <span>{about.degree}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Phone:</b> <span>{about.phone}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Email:</b> <span>{about.email}</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>City:</b> <span> Amman, Jordan</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Freelance:</b> <span>Available</span>
                </div>
              </div>
              <div className="txt">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  laborum minima, quae debitis quam eaque error consectetur,
                  aliquid eligendi deleniti voluptates dolore ipsa neque labore
                  magnam perspiciatis, sint cupiditate repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
