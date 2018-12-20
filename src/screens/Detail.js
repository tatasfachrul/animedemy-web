import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

import PlayArrow from "@material-ui/icons/PlayArrow";
import Add from "@material-ui/icons/Add";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import BackgroundShadow from "./components/BackgroundShadow";
import BackgroundShadowImage from "./components/BackgroundShadowImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const categories = ["Action", "Drama", "Adventure", "Romance"];
const slides = [
  {
    image: require("../assets/images/1.jpg"),
    title: "Naruto Shippuden Eps 1",
    series: "Naruto",
    description: "Naruto Jiraiya Kakashi Tsunade Iruka Sasuke"
  },
  {
    image: require("../assets/images/1.jpg"),
    title: "Naruto Shippuden Eps 1",
    series: "Naruto",
    description: "Naruto Jiraiya Kakashi Tsunade Iruka Sasuke"
  },
  {
    image: require("../assets/images/1.jpg"),
    title: "Naruto Shippuden Eps 1",
    series: "Naruto",
    description: "Naruto Jiraiya Kakashi Tsunade Iruka Sasuke"
  }
];
const detail = {
  series: "Naruto",
  image: require("../assets/images/ANIMEDEMY.png"),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur diam sed nunc porttitor cursus. Pellentesque auctor fringilla ligula, sed tincidunt diam mattis eleifend. Fusce in ante lectus. Etiam nisl nibh, volutpat vel sodales at, finibus vel massa. Nullam turpis lectus, semper vel nunc et, fringilla egestas quam. Sed vel orci mauris. Phasellus turpis ipsum, viverra non justo ut, scelerisque consequat elit. Quisque tincidunt mattis metus cursus pretium."
};

const movies = [
  {
    series: "Naruto",
    category: "Action",
    videos: [
      {
        title: "Naruto Eps 1",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 2",
        imbd_score: 8.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 3",
        imbd_score: 8.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 4",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 5",
        imbd_score: 8.5,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 6",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 7",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      }
    ]
  },
  {
    series: "Naruto",
    category: "Adventure",
    videos: [
      {
        title: "Naruto Eps 1",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 2",
        imbd_score: 8.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 3",
        imbd_score: 8.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 4",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 5",
        imbd_score: 8.5,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 6",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      },
      {
        title: "Naruto Eps 7",
        imbd_score: 9.0,
        image: require("../assets/images/1.jpg")
      }
    ]
  }
];
const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "#000000"
  },
  header: {
    backgroundColor: "rgba(0,0,0,0.5)"
    // position: "absolute"
  },
  grow: {
    flexGrow: 1
  },
  divImageHeader: {
    width: 120,
    height: 40
  },
  button: {
    fontWeight: "normal",
    fontSize: 12
  },
  search: {
    width: 170,
    position: "relative",
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.15)",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.3)"
    }
  },
  searchIcon: {
    width: 50,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputInput: {
    paddingTop: 7,
    paddingRight: 5,
    paddingBottom: 7,
    paddingLeft: 50,
    color: "#fff"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Detail extends Component {
  state = {
    mobileMenuCategory: null,
    mobileMoreAnchorEl: null
  };

  handleMobileMenuOpenCategory = event => {
    this.setState({ mobileMenuCategory: event.currentTarget });
  };

  handleMobileMenuCloseCategory = () => {
    this.setState({ mobileMenuCategory: null });
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMenuCategory, mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpenCategory = Boolean(mobileMenuCategory);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <p>Subscribe</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      </Menu>
    );
    const renderMobileMenuCategory = (
      <Menu
        anchorEl={mobileMenuCategory}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpenCategory}
        onClose={this.handleMobileMenuCloseCategory}
      >
        {categories.map((row, i) => (
          <MenuItem>{row}</MenuItem>
        ))}
      </Menu>
    );

    return (
      <div className={classes.root}>
        {/* Header Section */}
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <div className={classes.divImageHeader}>
              <img
                src={require("../assets/images/ANIMEDEMY.png")}
                style={{ width: "inherit", height: "inherit" }}
              />
            </div>

            <IconButton
              className={classes.sectionMobile}
              color="inherit"
              onClick={this.handleMobileMenuOpenCategory}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.sectionDesktop}>
              {categories.map((row, i) => (
                <Button color="inherit" style={{ fontSize: 13 }}>
                  {row}
                </Button>
              ))}
            </div>

            <div className={classes.grow} />

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ input: classes.inputInput }}
              />
            </div>

            <div className={classes.sectionDesktop}>
              <Button
                style={{
                  fontWeight: "normal",
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: 12
                }}
              >
                <NotificationsIcon /> &nbsp; Subscribe
              </Button>
              &nbsp;
              <Button
                style={{
                  fontWeight: "normal",
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: 12
                }}
              >
                <AccountCircle /> &nbsp; Login
              </Button>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMobileMenuCategory}

        {/* Body Section */}
        <div style={{ marginTop: 10, flexDirection: "row", flex: 1 }}>
          {/* Profile Image Section */}

          
         
          
          <Grid container spacing={8}>
        {/* Logo */}
        <Grid item xs={8} sm={2}>
          <img
            src={detail.image}
            alt=""
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              border: 20,
              backdropFilter: "#ff5c33",
              height: "100%",
              width: "100%"
            }}
          />  
        </Grid>
        {/* Title series & Description */}
        <Grid item xs={8} sm={8}>
          <div><h2>{detail.series}</h2></div>
          <div><h5>{detail.description}</h5></div>
        </Grid>

        <Grid item xs={8} sm={2}>
        <h1>4.7/5</h1>
        <h4>Score Rating!</h4>
        </Grid>
       
      </Grid>
        </div>

        {/* Slider Category */}
        <div style={{ background: "linear-gradient( #000000, #1a222e)" }}>
          <div style={{ paddingLeft: 40, paddingRight: 40 }}>
            {movies.map((row, i) => (
              <div style={{ marginTop: 30 }}>
                <h2 style={{ margin: 10, color: "#fff", fontWeight: "normal" }}>
                  {row.category}
                </h2>
                <Slider {...settings}>
                  {row.videos.map((item, i) => (
                    <div style={{ position: "absolute" }}>
                      <img
                        src={item.image}
                        style={{ height: 150, width: "98%" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div>
            <GridList
              cols={12}
              style={{
                paddingTop: 100,
                paddingLeft: "10%",
                paddingRight: "10%",
                paddingBottom: 0
              }}
            >
              <GridListTile
                cols={3}
                style={{ padding: 5, color: "#999", fontSize: 14 }}
              >
                <ul type="none">
                  <li>Backend & Endpoint :</li>
                  <li>&nbsp;</li>
                  <li>Setiawan Restu Aji</li>
                  <li>Tatas Fachrul</li>
                </ul>
              </GridListTile>
              <GridListTile
                cols={3}
                style={{ padding: 5, color: "#999", fontSize: 14 }}
              >
                <ul type="none">
                  <li>Website :</li>
                  <li>&nbsp;</li>
                  <li>Fandhi Prayoga</li>
                  <li>Lazuandi</li>
                  <li>Riski Makira</li>
                  <li>Setiawan Restu Aji</li>
                </ul>
              </GridListTile>
              <GridListTile
                cols={3}
                style={{ padding: 5, color: "#999", fontSize: 14 }}
              >
                <ul type="none">
                  <li>Mobile :</li>
                  <li>&nbsp;</li>
                  <li>Devi Adi Nufriana</li>
                  <li>Rizal</li>
                </ul>
              </GridListTile>
              <GridListTile
                cols={3}
                style={{ padding: 5, color: "#999", fontSize: 14 }}
              >
                <ul type="none">
                  <li>Scraping :</li>
                  <li>&nbsp;</li>
                  <li>Tri Nanda</li>
                </ul>
              </GridListTile>
              <GridListTile
                cols={12}
                style={{ padding: 5, color: "#999", fontSize: 12, height: 50 }}
              >
                <p>&copy;2018/12/17-2018/12/21 Animedemy.(Tim A)</p>
              </GridListTile>
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Detail);
