import "./App.css";
import Navbar from "./components/Navbar";
import RequestBtn from "./components/RequestBtn";

import bankingIcon from "./images/icon-online.svg";
import budgetingIcon from "./images/icon-budgeting.svg";
import onBoardingIcon from "./images/icon-onboarding.svg";
import APIIcon from "./images/icon-api.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="generation-part">
        <div className="img-part"></div>
        <div className="text-part">
          <h2>Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestBtn />
        </div>
      </div>

      <div className="reasons-part">
        <div className="container">
          <h3>Why choose Easybank?</h3>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br></br> Control your finances like never before.
          </p>
        </div>
        <div className="reasons">
          <div className="container">
            <div className="reason">
              <img src={bankingIcon} alt="banking icon" />
              <h4>Online Bnaking</h4>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="reason">
              <img src={budgetingIcon} alt="budgeting icon" />
              <h4>Simple Budgeting</h4>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div className="reason">
              <img src={onBoardingIcon} alt="onboarding icon" />
              <h4>Fast Onboarding</h4>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="reason">
              <img src={APIIcon} alt="onboarding icon" />
              <h4>Open API</h4>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
