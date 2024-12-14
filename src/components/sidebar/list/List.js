import Item from "./Item";

export default function List() {
  return (
    <ul className="nav">
      <Item item="Home" id="hero"> <i className="fa-solid fa-house" /> </Item>
      <Item item="About me" id="about"> <i className="fa-solid fa-user" /> </Item>
      <Item item="Resume" id="resume"> <i class="fa-solid fa-table-list"></i> </Item>
      <Item item="Projects" id="projects"> <i className="fa-solid fa-diagram-project" /> </Item>
      <Item item="Certificates" id="certificates"> <i className="fa-solid fa-envelope" /> </Item>
      <Item item="Contact me" id="contact"> <i className="fa-solid fa-certificate" /> </Item>
    </ul>
  );
}
