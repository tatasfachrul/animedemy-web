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
import { Redirect, withRouter, Link } from "react-router-dom";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Add from "@material-ui/icons/Add";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "video-react/dist/video-react.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinearProgress from '@material-ui/core/LinearProgress'
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {GET_VIDEO} from "../redux/action/video"
import {GET_EPISODES} from "../redux/action/video"
import {GET_RELATED} from "../redux/action/video"
import { ALL_CATEGORIES } from '../redux/action/category'
import { Player } from 'video-react';
import { connect } from 'react-redux'
const categories = ["Action", "Drama", "Adventure", "Romance"];

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
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Detail extends Component {
  state = {
    mobileMenuCategory: null,
    mobileMoreAnchorEl: null
  };

  componentDidMount()
  {
    this.props.dispatch(ALL_CATEGORIES())
    this.props.dispatch(GET_VIDEO(this.props.match.params.id))
    this.props.dispatch(GET_EPISODES(this.props.match.params.id))
    this.props.dispatch(GET_RELATED(this.props.match.params.id))
    this.setLoginStatus()
  }
  handleLogout()
  {
    localStorage.removeItem("token")
    window.location.href='/';
  }

  setLoginStatus()
  {
    console.log(localStorage.getItem('token'))
      var ls=localStorage.getItem('token')
      if(ls===null)
      {
        //show btn login
          return (
            <Link to="/login">
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
            </Link>
          )
      }
      else
      {
          //show btn logout
          return (
            
              <Button
                style={{
                  fontWeight: "normal",
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: 12
                }}
                onClick={this.handleLogout}
              >
                <AccountCircle /> &nbsp; Logout
              </Button>
              
          )
      }
  }
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
    console.log(this.props)
    const {results_video} = this.props.videos 
    const{episodes}=this.props.videos
    const{related}=this.props.videos
    {if(this.props.videos.results_video.length===0)
      {
        return <LinearProgress />
      }
      else
      {
        
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
          <Link to="/">
            <div className={classes.divImageHeader}>
              
              <img
                src={require("../assets/images/ANIMEDEMY.png")}
                style={{ width: "inherit", height: "inherit" }}
              />
            </div>
            </Link>

            <IconButton
              className={classes.sectionMobile}
              color="inherit"
              onClick={this.handleMobileMenuOpenCategory}
            >
              <MenuIcon />
            </IconButton>

            <div className={classes.sectionDesktop}>
              {this.props.categories.results_categories.slice(0,5).map((row, i) => (
                <a href={"/detailcategory/"+row.id}>
                <Button color="inherit" style={{ fontSize: 13, color:"white"}}>
                  {row.title}
                </Button>
                </a>
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
              {/* <Button
                style={{
                  fontWeight: "normal",
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontSize: 12
                }}
              >
                <NotificationsIcon /> &nbsp; Subscribe
              </Button> */}
              &nbsp;
              {this.setLoginStatus()}
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

          {/* Logo */}
          <Grid container spacing={8} justify="center" alignItems="center">
            {/* Logo */}
            <Grid item xs={8} sm={3}>
              <img
                src={results_video[0].image_url}
                alt=""
                style={{
                  paddingLeft: 40,
                  paddingRight: 40,
                  border: 20,
                  backdropFilter: "#ff5c33",
                  height: "600",
                  width: "100%"
                }}
              />
            </Grid>

            {/* Title series & Description */}
            <Grid item xs={8} sm={7}>
              <div >
                <h2 style={{color: `white`}}>{results_video[0].title}</h2>
              </div>
              <div>
                <h5 style={{color: `white`}}>{results_video[0].description}</h5>
              </div>
            </Grid>

            <Grid item xs={8} sm={2} >
              <h1 style={{color: `white`}}>{results_video[0].imdb_score}/10</h1>
              <h4 style={{color: `white`}}>Score Rating!</h4>
            </Grid>
          </Grid>
        </div>

        {/* Video Player */}
        <Grid container spacing={8} justify="center" alignItems="center" style={{padding: 40 }}>
        <Grid item spacing={8} xs={12}>
          <iframe
            width="100%"
            height="500px"
            xs={12}
            src={results_video[0].video_url}
            frameborder="0"
            style={{display:"block", }}
          />
          {/* <Player
            playsInline
            src={results_video[0].video_url}
          >
          </Player> */}
          </Grid>
        </Grid>

        {/* Episode Section */}
        <div style={{ background: "linear-gradient( #000000, #1a222e)" }}>
          <div style={{ paddingLeft: 40, paddingRight: 40 }}>
            {/* list episode*/}
            {
              <div style={{ marginTop: 30 }}>
                <h2 style={{ margin: 10, color: "#fff", fontWeight: "normal" }}>
                  List episode
                </h2>
                <Slider {...settings}>
                  {episodes.map((item, i) => (
                    <div style={{ position: "absolute" }}>
                      <Link to={"/detailvideos/"+item.id}>
                      <img
                        src={item.image_url}
                        style={{ height: 150, width: "98%" }}
                      />
                      <p style={{color:"white"}}>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            }

            {/* related */}
            {
              <div style={{ marginTop: 30 }}>
                <h2 style={{ margin: 10, color: "#fff", fontWeight: "normal" }}>
                  Related
                </h2>
                <Slider {...settings}>
                  {related.map((item, i) => (
                    <div style={{ position: "absolute" }}>
                      <a href={"/detailvideos/"+item.id}>
                      <img
                        src={item.image_url}
                        style={{ height: 150, width: "98%" }}
                      />
                      <p style={{color:"white"}}>{item.title}</p>
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            }
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
    }}
  }
}
const mapStateToProps = (state) => ({
  videos:state.videoReducer,
  categories:state.categoryReducer
})
const ws=withStyles(styles)(Detail);
export default connect(mapStateToProps)(ws)