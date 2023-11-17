import "./billing.css";
import SubHead from "../../components/subHead/SubHead";
import { bill, google, apple } from "../../assets";
const Billing = () => {
  return (
    <div id="features" className="section billingSection">
      <div>
        <img src={bill} alt="billing image" />
      </div>
      <div className="w-full lg:w-[60%]">
        <SubHead content="Easily control your billing & invoicing." />
        <p className="subText">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-6 flex  gap-4 flex-wrap">
          <img src={google} alt="google" className="billing-image" />
          <img src={apple} alt="apple" className="billing-image" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
