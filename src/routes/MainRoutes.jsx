import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import EduAndExp from "../pages/EduAndExp";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import store from "../store";
import "../style/css/MainRoutes.css"

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/edu_exp" component={EduAndExp} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Routes;