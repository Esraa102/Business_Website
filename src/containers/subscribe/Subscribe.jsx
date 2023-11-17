import "./subscribe.css";
import SubHead from "../../components/subHead/SubHead";
const Subscribe = () => {
  return (
    <div id="subscribe" className="section  py-40">
      <div className="subscribe box-shadow subscribeBox">
        <div>
          <SubHead content="Let’s try our service now!" />
          <p className="subText">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="mainBtn bg-grandient">Get Started</button>
      </div>
    </div>
  );
};

export default Subscribe;
