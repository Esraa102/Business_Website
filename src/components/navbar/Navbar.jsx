import "./navbar.css";

// eslint-disable-next-line react/prop-types
const Navbar = ({ classNav }) => {
  return (
    <div>
      <ul className={classNav}>
        <li>
          {" "}
          <a href="#home" className="link">
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#about" className="link">
            About Us
          </a>
        </li>
        <li>
          {" "}
          <a href="#features" className="link">
            Features
          </a>
        </li>
        <li>
          {" "}
          <a href="#solution" className="link">
            Solution
          </a>
        </li>
        <li>
          {" "}
          <a href="#test" className="link">
            Testmonials
          </a>
        </li>
        <li>
          {" "}
          <a href="#subscribe" className="link">
            Subscribe
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
