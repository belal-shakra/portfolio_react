import Icon from "./Icon";

export default function IconList() {
  return (
    <div className="social-media">
      <Icon url="https://www.facebook.com/belal.shakra">
        <i className="fa-brands fa-facebook" />
      </Icon>

      <Icon url="https://www.linkedin.com/in/belal-shakra/">
        <i className="fa-brands fa-linkedin" />
      </Icon>

      <Icon url="https://github.com/belal-shakra">
        <i className="fa-brands fa-github" />
      </Icon>
    </div>
  );
}
