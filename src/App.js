import "./App.css";
import Navbar from "./components/Navbar";
import RequestBtn from "./components/RequestBtn";

import introMobile from "./images/bg-intro-mobile.svg";
import mobilesMobile from "./images/image-mockups.png";
import introDesktop from "./images/bg-intro-desktop.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="generation-part">
        <div className="img-wrapper">
          <img
            src={introMobile}
            alt="intro background"
            className="mobiles-bg mobile"
          />
          {/* <img
            src={introDesktop}
            alt="intro background"
            className="mobiles-bg desktop"
          /> */}
          <img src={mobilesMobile} alt="" className="mobiles" />
        </div>
        <div className="text-wrapper">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
