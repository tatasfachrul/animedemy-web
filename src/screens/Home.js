import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const series = [
  {
    id: 1,
    title: "Black Clover",
    description: "askdjklasjdlaskjdlaskjdlaskdjlkajslklkcmalks lakslaksmclk",
    rating: 4,
    categories: [1, 2],
    img:
      "https://4.bp.blogspot.com/-DpSz0UvNhK4/XAXDiCAc4MI/AAAAAAAAACY/9W-HIrCO0RctVGQQCaf9CuQD1LrfzXsYgCLcBGAs/s240/komoyaro-bc.jpg"
  },
  {
    id: 2,
    title: "Baki 2018",
    description: "askdjklasjdlaskjdlaskjdlaskdjlkajslklkcmalks lakslaksmclk",
    rating: 3,
    categories: [4, 5],
    img:
      "https://1.bp.blogspot.com/-Pia7XY83v5o/W0EcPe0jnFI/AAAAAAAABEc/ddVq1kVvozQLJZgt6uro79PTvFaau0_iwCLcBGAs/s240/Baki.jpg"
  },
  {
    id: 3,
    title: "Akanesasu Shoujo",
    description: "askdjklasjdlaskjdlaskjdlaskdjlkajslklkcmalks lakslaksmclk",
    rating: 2,
    categories: [2, 3],
    img:
      "https://3.bp.blogspot.com/-PD2ZdWh-HUE/XAZDuxEOv4I/AAAAAAAAACs/pKFe5K5o8OUBRNheCNSMCvdbycW4Gj7mgCLcBGAs/s240/komoyaro-sj.jpg"
  }
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-inverse"
          style={{ borderRadius: 0, height: 100, paddingTop: 20 }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <img
                style={{
                  height: 55,
                  width: 200,
                  marginTop: -6,
                  marginRight: 10
                }}
                src={require("../img/ANIMEDEMY2.png")}
              />
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="#">ACTION</a>
              </li>
              <li>
                <a href="#">DRAMA</a>
              </li>
              <li>
                <a href="#">COMEDY</a>
              </li>
              <li>
                <a href="#">CATEGORIES</a>
              </li>
            </ul>
            <div className="pull-right">
              <button
                style={{ borderRadius: 100, marginLeft: 10 }}
                className="btn btn-normal navbar-btn"
              >
                SUBSCRIBE
              </button>
              <button
                style={{ borderRadius: 100, marginRight: 10 }}
                className="btn btn-danger navbar-btn"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </nav>

        <div style={{ marginTop: -20 }}>
          <Slider style={{ height: 900 }}>
            {series.map((serie, index) => (
              <div
                style={{
                  height: 400,
                  backgroundImage: "url(" + serie.img + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
              >
                <div
                  style={{
                    marginLeft: 120,
                    marginTop: 145,
                    backgroundColor: "rgb(0,0,0,0.6)",
                    color: "white",
                    width: 400,
                    borderRadius: 5,
                    paddingLeft: 40,
                    paddingBottom: 20,
                    paddingTop: 10
                  }}
                  key={index}
                >
                  <h2>{serie.title}</h2>
                  <div>{serie.description}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
