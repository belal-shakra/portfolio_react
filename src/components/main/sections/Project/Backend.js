import Card from "./Card";
import Title from "./Title";
import GP from "../../../../assets/imgs/gp-logo.png";
import Zenblog from "../../../../assets/imgs/zenblog.png";
import VocabVault from "../../../../assets/imgs/VocabVault-lg.png";
import Sensive from "../../../../assets/imgs/sensive.png";


export default function Backend() {
  return (
    <>
      <Title title="Back-End" />
      
      <div className="card-container">
        <Card
          title="Graduation Project and Internship System"
          category="Graduation Project"
          link="https://github.com/belal-shakra/Graduation-Project-and-Internship-System"
        >
          <img src={GP} alt="gp-project-logo" />
        </Card>

        <Card
          title="ZenBlog"
          category="Blog"
          link="https://github.com/belal-shakra/ZenBlog"
        >
          <img src={Zenblog} alt="zenblog" />
        </Card>

        <Card
          title="VocabVault"
          category="Dictionary"
          link="https://github.com/belal-shakra/VocabVault"
        >
          <img src={VocabVault} alt="vocabvault" />
        </Card>

        <Card
          title="Sensive"
          category="Blog"
          link="https://github.com/belal-shakra/Sensive"
        >
          <img src={Sensive} alt="sensive" />
        </Card>
      </div>
    </>
  );
}
