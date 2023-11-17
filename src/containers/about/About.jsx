import "./about.css";
import SubHead from "../../components/subHead/SubHead";
import { aboutData } from "../../constants/data";
const About = () => {
  return (
    <div id="about" className="section aboutSection">
      <div className="w-full lg:w-1/2">
        <SubHead content="You do the business, we’ll handle the money." />
        <p className="subText">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="mainBtn bg-grandient">Get Started</button>
      </div>
      <div>
        {aboutData.map((item, index) => (
          <div key={index} className="box card">
            <div className="card-icon">
              <img src={item.icon} width={20} alt="image" />
            </div>
            <div>
              <p className="card-title">{item.title}</p>
              <p className="subText">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
