import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from './components/Background';

import NavBar from "./components/NavBar";
import About from "./components/About";
import Products from "./components/Products";
import Careers from "./components/Careers";
import Contact from "./components/Contact";

const AppContainer = styled.div `
  text-align: left;
  position: relative;
  width: ${window.innerWidth}px;
  height: ${ window.innerHeight }px;
  overflow-x: scroll;
  overflow-y: scroll;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
      <Background>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
        </Background>
      </AppContainer>
    );
  }
}

export default App;
