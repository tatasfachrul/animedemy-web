import React, { Component } from 'react';
import {Route} from "react-router-dom";
import './App.css';

import login from "./screens/Login"
import register from "./screens/Register"
import home from "./screens/Home"

import store from './redux/store'
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
          <Route  exact path="/" component={login} />
          <Route  path="/register" component={register} />
          <Route  path="/home" component={home} />
      </div>
      </Provider>
    );
  }
}

export default App;
