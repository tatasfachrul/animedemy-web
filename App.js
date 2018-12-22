import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import login from "./screens/Login";
import register from "./screens/Register";
import home from "./screens/Home";
import detail from "./screens/detailCategory";
import categories from "./screens/Categories";
import detailSeries from "./screens/Detail";

import store from "./redux/store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={home} />
         
          <Route path="/register" component={register} />
          <Route path="/login" component={login} />
          <Route path="/detailCategory/:id" component={detail} />
          <Route path="/categories" component={categories} />
          <Route path="/detailvideos/:id" component={detailSeries} />
        </div>
      </Provider>
    );
  }
}

export default App;
