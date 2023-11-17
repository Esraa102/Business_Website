import { discount, robot } from "../../assets";
import "./hero.css";

const Hero = () => {
  return (
    <div id="home" className="homeSection   ">
      <div className="p-4 md:p-8 lg:p-16">
        <div className="bg-discount-gradient discount">
          <img src={discount} alt="discount" />
          <p className="text-textColor uppercase">
            <span className="text-white"> 20%</span> DISCOUNT FOR
            <span className="text-white"> 1 MONTH </span>ACCOUNT
          </p>
        </div>
        <h1 className="heading">
          The Next <span className="text-grandient">Generation</span> Payment
          Method.
        </h1>
        <p className="subText">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className=" relative  z-0  ">
        <div className="blue__gradient ball"></div>
        <img src={robot} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
