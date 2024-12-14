import AboutImage from "../../../assets/imgs/me-2021.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="header">
          <h2 className="title">About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            numquam maxime tempora quaerat sunt omnis corporis quia, mollitia
            doloremque esse? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illum numquam maxime tempora quaerat sunt omnis corporis quia,
            mollitia doloremque esse?
          </p>
        </div>
        <div className="container">
          <div className="img">
            <img src={AboutImage} alt="belal-shakra" />
          </div>
          
          <div className="info">
            <div>
              <div>
                <h3 className="title">Full Stack Developer</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil blanditiis fuga rerum consequatur odio impedit iusto
                  laboriosam, deleniti ratione quod!
                </p>
              </div>
              <div className="dtls">
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Birthday:</b> <span>20 -Jul</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Age:</b> <span>24</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Website:</b> <span>www.example.com</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Degree:</b> <span>Bachelor</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Phone:</b> <span> +962 79 076 1493</span>
                </div>
                <div>
                  <i className="bi bi-caret-right-fill" />
                  <b>Email:</b> <span>belal.a.shakra@gmail.com</span>
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
