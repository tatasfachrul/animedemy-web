import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';

import login from "./screens/Login"
import register from "./screens/Register"


class App extends Component {
  render() {
    return (
      <div>
          <Route  exact path="/" component={register} />
          
      </div>
    );
  }
}

export default App;
