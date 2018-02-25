import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Careers from "./Careers";
import Contact from "./Contact";

export default class NavBar extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    );
  }
}