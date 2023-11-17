import "./testmonials.css";
import SubHead from "../../components/subHead/SubHead";
import { testmonialsData, brands } from "../../constants/data";
const Testmonials = () => {
  return (
    <div id="test" className="section py-20">
      <div className="testmonialsHeading">
        <div className="w-full lg:w-[50%]">
          <SubHead content="What people are saying about us" />
        </div>
        <p className="subText w-full lg:w-[40%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="testmonialsContainer">
        {testmonialsData.map((item, index) => (
          <div key={index} className="box testmonialsBox">
            <img src={item.img} alt="qoutes" width={60} />
            <p className="subText text-center md:text-start">{item.content}</p>
            <div className="flex gap-4  flex-col md:flex-row  items-center">
              <img src={item.personImg} width={80} alt={item.name} />
              <div className="text-center md:text-start">
                <p className="text-white text-lg mb-1">{item.name}</p>
                <p className="subText text-sm">{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-60 flex  items-center  justify-evenly gap-8 flex-wrap">
        {brands.map((item, index) => (
          <img
            src={item}
            key={index}
            width={200}
            alt="image"
            className="cursor-pointer hover:scale-110 transition duration-300 mx-auto lg:m-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Testmonials;
