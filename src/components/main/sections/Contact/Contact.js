export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="header">
          <h2 className="title">Contact</h2>
        </div>
        <div className="container">
          <form action="" method="post">
            <div className="field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="field">
              <textarea
                name="message"
                placeholder="Your Message"
                defaultValue={""}
              />
            </div>
            <div className="field submit">
              <input type="submit" defaultValue="Send" required="" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
