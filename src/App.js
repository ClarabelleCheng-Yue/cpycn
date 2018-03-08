import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Background from './components/Background';
import LanguageSwitch from './components/LanguageSwitch';
import Home from "./components/Home";
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
  font-family: Times New Roman;
`;

class App extends Component {
  constructor(props) {
    super(props);

    const getLanguage = () => {
      let lonlat = {};
      const showPosition = (position) => {
        const { longitude, latitude } = position.coords;
        lonlat = {longitude, latitude};
      }
      navigator.geolocation.getCurrentPosition(showPosition);
      const lat = lonlat.latitude;
      const lon = lonlat.longitude;
      const inChina = lat > 15 && lat < 60 && lon > 70 && lon < 135;
      // return inChina ? 'chinese' : 'english';
      return 'chinese';
    }

    this.state = {
      lang: getLanguage()
    }
  }

  changeLang(lang) {
    this.setState({
      lang
    });
  }

  render() {
    console.log('lang: ', this.state);
    return (
      <AppContainer>
        <LanguageSwitch changeLang={this.changeLang.bind(this)} lang={this.state.lang} />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
        <Background bgImg={'../assets/processor.png'} />
      </AppContainer>
    );
  }
}

export default App;
