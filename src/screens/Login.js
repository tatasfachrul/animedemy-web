import React, { Component } from "react";
import axios from "axios";
import { Redirect, withRouter, Link } from "react-router-dom";
import {ip} from "../setServer"
class Login extends Component {
  handlesubmit = async e => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;
	// const hostServer = "192.168.43.208:3333";
    let err = false;
    let res = null;

    //console.log(email+password);

    try {
      res = await axios.post(ip+'api/v1/login', {
        email: email,
        password: password
      });
    } catch (error) {
      err = true;
    }

    if (err) {
      alert("gagal login");
    } else {
      alert("login");
      // Store
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      //console.log(localStorage.getItem("token")+localStorage.getItem("refreshToken"))
      return this.props.history.push("/");
    }
  };

  render() {
    console.log(this.props);
    return (
      <div
        style={{
          height: "100%",
          paddingBottom: 450,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage:
            "url(http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg)"
        }}
      >
      <Link to="/">
        <div style={{ marginTop: -50 }}>
          <img
            style={{ marginLeft: 40, height: 200, width: 200 }}
            src={require("../img/ANIMEDEMY.png")}
          />
        </div>
        </Link>
        <div
          className="container"
          style={{
            backgroundColor: "rgb(0,0,0,0.7)",
            width: 400,
            padding: 40,
            borderRadius: 7
          }}
        >
          <form method="post" onSubmit={this.handlesubmit}>
            <h3 style={{ color: "white", marginBottom: 50 }}>LOGIN</h3>
            <input
              style={{ borderColor: "rgb(152, 230, 255)", borderWidth: 3 }}
              className="form-control"
              name="username"
              placeholder="Username"
            />{" "}
            <br />
            <input
              style={{ borderColor: "rgb(152, 230, 255)", borderWidth: 3 }}
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />{" "}
            <br />
            <button
              type="submit"
              style={{ backgroundColor: "rgb(152, 230, 255)", color: "white" }}
              className="btn btn-block"
            >
              LOGIN
            </button>
          </form>
          <Link to="/register">
            <p style={{ paddingTop: 10 }}>Register to sign in!</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
