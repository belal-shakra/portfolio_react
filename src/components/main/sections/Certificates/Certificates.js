import Card from "../Project/Card";
import Planning from "../../../../assets/imgs/التخطيط.jpg";
import Laravel_1 from "../../../../assets/imgs/laravel-1-course.png";
import Java from "../../../../assets/imgs/java.jpg";
import JavaCer from "../../../../assets/imgs/java-cer.jpg";
import Web from "../../../../assets/imgs/web-development.png";
import WebCer from "../../../../assets/imgs/web-dev.jpg";
import CSCer from "../../../../assets/imgs/cs.jpg";

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="header">
          <h2 className="title">Certificates</h2>
        </div>
        <div className="container">
          <div className="cards">
            <div className="card-container">
              <Card
                title="تعلم التخطيط الفعال لتنظيم حياتك ومشاريعك"
                category="Planning |2023"
                link="https://www.udemy.com/certificate/UC-2cce049e-8e75-4c8d-8183-dedc8cef9509/"
              >
                <img src={Planning} alt="palnning" />
              </Card>

              <Card
                title="Laravel For Absolute Beginners 2024"
                category="Web Development | Laravel |2024"
                link="https://www.udemy.com/certificate/UC-07f26777-9200-4b6e-9364-c13fa3017886/"
              >
                <img src={Laravel_1} alt="palnning" />
              </Card>

              <Card
                title="Java - For beginners"
                category="Java | OOP |2024"
                link={JavaCer}
              >
                <img src={Java} alt="palnning" />
              </Card>

              <Card
                title="Web Development"
                category="Web Development | Bootstrap | PHP | MySQL"
                link={WebCer}
              >
                <img src={Web} alt="Web Development" />
              </Card>

              <Card
                title="Computer Science"
                category="Jordan University, Feb 2024"
                link={CSCer}
              >
                <img src="https://static.vecteezy.com/system/resources/previews/002/244/603/non_2x/realistic-graduation-cap-and-diploma-concept-free-vector.jpg" alt="CS" />
              </Card>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
