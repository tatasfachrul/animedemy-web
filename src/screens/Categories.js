import React from "react";
import axios from "axios";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  MenuItem,
  Menu,
  Badge
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

class Categories extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const hostServer = "192.168.1.116:3333";

    const res = await axios.get(`http://${hostServer}/api/v1/categories`);
    this.setState({ data: res.data });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(category => (
            <li key={category.id}>{category.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}



export default withStyles(Categories);
