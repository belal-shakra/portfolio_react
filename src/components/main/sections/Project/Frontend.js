import Card from "./Card";
import Airbnb from "../../../../assets/imgs/airbnb-logo.jpg";
import Zomato from "../../../../assets/imgs/zomato-logo.jpg";
import Feane from "../../../../assets/imgs/feane.png";
import Title from "./Title";

export default function Frontend() {
  return (
    <>
      <Title title="Front-End" />


      <div className="card-container">
        <Card
          title="Airbnb"
          category="Imitation | index page"
          link="https://belal-shakra.github.io/airbnb/"
        >
          <img src={Airbnb} alt="airbnb" />
        </Card>

        <Card
          title="Zomato"
          category="Imitation | index page"
          link="https://github.com/belal-shakra/zomato"
        >
          <img src={Zomato} alt="Zomato" />
        </Card>

        <Card
          title="Feane"
          category="Imitation | index page"
          link="https://belal-shakra.github.io/Feane/"
        >
          <img src={Feane} alt="Feane" />
        </Card>
      </div>
    </>
  );
}
