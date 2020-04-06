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
import logoWhite from "../assets/flex-letter-white.png";
import logo from "../assets/flex-letter.png";

function App(props) {
  return (
    <Router>
      <>
        <Navbar color="primary" spaced={true} logo={logoWhite} />

        <Switch>
          <Route exact path="/" component={IndexPage} />

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
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
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
          description="A short description of what you do here"
          copyright="© Company Name"
        />
      </>
    </Router>
  );
}

export default App;
