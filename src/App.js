import React, { Component } from 'react';
import {isMobileOnly} from 'react-device-detect';
import {ScrapBook} from "./actions/data";

// Get Views
import Mobile from "./js/views/mobile";
import Browser from "./js/views/browser";
// Import CSS
import './App.css';
// Fetch Content
const Content = new ScrapBook();

class App extends Component {

    componentWillMount(){ Content.start(); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    componentDidUpdate(){ }

  render() {
    if (isMobileOnly) { return (<Mobile />) }
    return (<Browser />)
  }
}
export default App;