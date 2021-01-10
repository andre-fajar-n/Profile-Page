import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withClearCache from "../ClearCache";
import About from "../pages/About";
import EduAndExp from "../pages/EduAndExp";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Stats from "../pages/Stats";
import store from "../store";
import "../style/css/MainRoutes.css"

class MainRoutes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/edu_exp" component={EduAndExp} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/stats" component={Stats} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

const ClearCacheComponent = withClearCache(MainRoutes);

function Routes() {
  return <ClearCacheComponent />
}

export default Routes;