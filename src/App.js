import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import NavBar from "./components/NavBar";
import About from "./components/About";
import Products from "./components/Products";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
