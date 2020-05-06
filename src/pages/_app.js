import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import adoptPage from "./adoptPage";
import { Switch, Route, Router } from "./../util/router.js";
import Divider from "./../components/Divider";
import Footer from "./../components/Footer";
import TrackPage from "./track.js";
// import logoWhite from "../assets/fonts/";
import logo from "../assets/images/LOGO-2.png";
import "../assets/app.css";
import DIY from "../components/DIY";
import SecretAccess from "./SecretAccess";
import Thankyou from "./thankyou";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     document
  //       .getElementById("loaderContainer")
  //       .classList.remove("showContainer");
  //     document.getElementById("loaderContainer").classList.add("hideContainer");
  //     document.getElementById("appContainer").classList.remove("hideContainer");
  //     document.getElementById("appContainer").classList.add("showContainer");
  //   }, 2000);
  // }

  render() {
    return (
      <div>
        {/* <div id="loaderContainer" className="showContainer">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //2 secs
          />
        </div> */}
        <div id="appContainer">
          <Router>
            <>
              <Navbar color="lightergreen" spaced={true} logo={logo} />

              <Switch>
                <Route exact path="/" component={IndexPage} />

                <Route exact path="/DIY" component={DIY} />

                <Route path="/thankyou" component={Thankyou} />

                <Route exact path="/track" component={TrackPage} />

                <Route exact path="/secretaccess" component={SecretAccess} />

                <Route exact path="/adopt" component={adoptPage} />

                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/faq" component={FaqPage} />

                <Route exact path="/pricing" component={PricingPage} />

                <Route exact path="/contact" component={ContactPage} />

                <Route
                  component={({ location }) => {
                    return (
                      <div
                        style={{
                          padding: "50px",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        The page <code>{location.pathname}</code> could not be
                        found.
                      </div>
                    );
                  }}
                />
              </Switch>

              <Divider color="light" />
              <Footer
                color="white"
                size="medium"
                logo={logo}
                description="planting for a greener future"
                copyright="© greytogreen"
              />
            </>
          </Router>
        </div>
      </div>
    );
  }
}
