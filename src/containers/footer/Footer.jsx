import "./footer.css";
import {
  facebook,
  instagram,
  linkedin,
  logo,
  twitter,
} from "../../assets/index";
import { usefulLinks, community } from "../../constants/data";
const Footer = () => {
  return (
    <div className="bg-footerBg pt-20 pb-0">
      <div className="section footerContainer">
        <div>
          <img src={logo} alt="logo" className="mb-4" />
          <p className="subText">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <h4 className="footerSubHead">Usefull Links</h4>
          {usefulLinks.map((item, index) => (
            <a href="#" key={index} className="subText footerLink">
              {item}
            </a>
          ))}
        </div>
        <div>
          <h4 className="footerSubHead">Community</h4>
          {community.map((item, index) => (
            <a href="#" key={index} className="subText footerLink">
              {item}
            </a>
          ))}
        </div>
        <div>
          <h4 className="footerSubHead">Partner</h4>
          <a href="#" className="subText footerLink">
            Our Partner
          </a>
          <a href="#" className="subText footerLink">
            Become A Partner
          </a>
        </div>
      </div>
      <div className="foot">
        <div className="subText  flex gap-4">
          Copyright &copy; 2023 All Rights Reserved.
        </div>
        <div className="flex gap-8 flex-wrap justify-center mx-auto md:m-0">
          <img src={instagram} alt="instagram" className="cursor-pointer" />
          <img src={facebook} alt="facebook" className="cursor-pointer" />
          <img src={twitter} alt="twitter" className="cursor-pointer" />
          <img src={linkedin} alt="linkedin" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
