import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Careers from "./Careers";
import Contact from "./Contact";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </ div>
    );
  }
}
