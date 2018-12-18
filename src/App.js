import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import homepage from "./screens/HomePage"
import $ from 'jquery'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={homepage} />
      </div>
    );
  }
}

export default App;
