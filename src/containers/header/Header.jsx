import "./header.css";
import { close, logo, menu } from "../../assets/index";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed w-full  top-0 left-0 backdrop-blur-md z-[8]">
      <div className="section py-4  flex items-center justify-between gap-8 ">
        <img src={logo} alt="logo" width={150} />
        <Navbar classNav="large-nav" />
        <div className="block lg:hidden">
          {show ? (
            <div>
              <img
                src={close}
                alt="close"
                width={30}
                className="cursor-pointer absolute z-10 top-8 right-8"
                onClick={() => setShow(false)}
              />
              <Navbar classNav="mobile-nav" />
            </div>
          ) : (
            <img
              src={menu}
              alt="menue"
              width={35}
              className="cursor-pointer"
              onClick={() => setShow(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
