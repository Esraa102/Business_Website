import "./cardDeal.css";
import SubHead from "../../components/subHead/SubHead";
import { card } from "../../assets";
const CardDeal = () => {
  return (
    <div id="solution" className="section cardSection">
      <div className="w-full lg:w-[60%]">
        <SubHead content="Find a better card deal in few easy steps." />
        <p className="subText">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="mainBtn bg-grandient">Get Started</button>
      </div>
      <div>
        <img src={card} alt="cardDeal image" />
      </div>
    </div>
  );
};

export default CardDeal;
