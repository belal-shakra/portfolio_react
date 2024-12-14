import HeroImage from "../../../assets/imgs/hero.png";


export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="menu-icon" onclick="aside_display()">
        <i className="fa-solid fa-bars" />
      </div>
      <img src={HeroImage} alt="" />
    </section>
  );
}
