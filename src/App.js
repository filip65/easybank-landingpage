import "./App.css";
import Navbar from "./components/Navbar";
import RequestBtn from "./components/RequestBtn";
import Footer from "./components/Footer";
import ScrollAnimation from "react-animate-on-scroll";

import Bounce from "react-reveal/Zoom";
import Fade from "react-reveal/Zoom";

// reasons images
import bankingIcon from "./images/icon-online.svg";
import budgetingIcon from "./images/icon-budgeting.svg";
import onBoardingIcon from "./images/icon-onboarding.svg";
import APIIcon from "./images/icon-api.svg";

// articles images
import moneyImage from "./images/image-currency.jpg";
import restaurantImage from "./images/image-restaurant.jpg";
import airplaneImage from "./images/image-plane.jpg";
import confettiImage from "./images/image-confetti.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="generation-part">
        <Fade top>
          <div className="img-part"></div>
        </Fade>
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
            <Bounce right>
              <div className="reason">
                <img src={bankingIcon} alt="banking icon" />
                <h4>Online Bnaking</h4>
                <p>
                  Our modern web and mobile applications allow you to keep track
                  of your finances wherever you are in the world.
                </p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="reason">
                <img src={budgetingIcon} alt="budgeting icon" />
                <h4>Simple Budgeting</h4>
                <p>
                  See exactly where your money goes each month. Receive
                  notifications when you’re close to hitting your limits.
                </p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="reason">
                <img src={onBoardingIcon} alt="onboarding icon" />
                <h4>Fast Onboarding</h4>
                <p>
                  We don’t do branches. Open your account in minutes online and
                  start taking control of your finances right away.
                </p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="reason">
                <img src={APIIcon} alt="onboarding icon" />
                <h4>Open API</h4>
                <p>
                  Manage your savings, investments, pension, and much more from
                  one account. Tracking your money has never been easier.
                </p>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
      <div className="articles-part">
        <h3>Latest Articles</h3>
        <div className="container">
          <Bounce right>
            <div className="article">
              <img src={moneyImage} alt="picture of money" />
              <div className="text-wrapper">
                <p className="author">By Claire Robinson</p>
                <a href="/#">Receive money in any currency with no fees</a>
                <p>
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="article">
              <img src={restaurantImage} alt="picture of restaurant" />
              <div className="text-wrapper">
                <p className="author">By Wilson Hutton</p>
                <a href="/#">Treat yourself without worrying about money</a>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="article">
              <img src={airplaneImage} alt="picture of restaurant" />
              <div className="text-wrapper">
                <p className="author">By Wilson Hutton</p>
                <a href="/#">Take your Easybank card wherever you go</a>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
          </Bounce>
          <Bounce right>
            <div className="article">
              <img src={confettiImage} alt="picture of restaurant" />
              <div className="text-wrapper">
                <p className="author">By Claire Robinson</p>
                <a href="/#">Our invite-only Beta accounts are now live!</a>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
          </Bounce>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
