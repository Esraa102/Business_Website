import "./App.css";
import Header from "./containers/header/Header";
import Hero from "./containers/hero/Hero";
import States from "./containers/states/States";
import About from "./containers/about/About";
import Billing from "./containers/billing/Billing";
import CardDeal from "./containers/cardDeal/CardDeal";
import Testmonials from "./containers/testmonials/Testmonials";
import Subscribe from "./containers/subscribe/Subscribe";
import Footer from "./containers/footer/Footer";

function App() {
  return (
    <div className="bg-bgColor overflow-hidden relative z-0 ">
      <Header />
      <Hero />
      <div className=" absolute first top-[150px] -z-[1]"></div>
      <States />
      <About />
      <div className="second pink__gradient absolute top-[30%] -z-[1]"></div>
      <Billing />
      <CardDeal />
      <div className="third blue__gradient absolute top-[60%] -right-[5%] -z-[1]"></div>
      <Testmonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
