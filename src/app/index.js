import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact-us";
import Login from "./components/login";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
          <div className="row">
            <div className="footer fixed-bottom col-lg-12">
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("app"));
