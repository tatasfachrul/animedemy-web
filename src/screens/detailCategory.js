import React, { Component } from "react";

// Import core component
import { AppBar, Toolbar, IconButton, InputBase, MenuItem, Menu, Badge, withStyles } from "@material-ui/core";

import { Redirect, withRouter, Link } from "react-router-dom";
// Import Icon
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Add from "@material-ui/icons/Add";

// Import Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import BackgroundShadow from "./components/BackgroundShadow";
import BackgroundShadowImage from "./components/BackgroundShadowImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

// Import another file
import { connect } from 'react-redux'
import { ALL_CATEGORIES } from '../redux/action/category'
import {GET_VIDEOS_BY_CATEGORY} from '../redux/action/video'
import LinearProgress from '@material-ui/core/LinearProgress'
import {ip} from "../setServer"
// const categories = ["Action", "Drama", "Adventure", "Romance"];
const slides = [
  {
    image: require("../assets/images/1.jpg"),
    series: "Naruto Shippuden",
    title: "Complete",
    description: " ",
    id:0
  },
  {
    image: require("../assets/images/2.jpg"),
    series: "ONE PIECE",
    title: "Ongoing",
    description: " ",
    id:0
  },
  {
    image: require("../assets/images/3.jpg"),
    series: "BLACK CLOVER",
    title: "Ongoing",
    description: " ",
    id:0
  }
];

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "#000000"
  },
  header: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed"
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
  }
});

class Home extends Component {
  componentDidMount(){
    
 this.props.dispatch(ALL_CATEGORIES())
 this.props.dispatch(GET_VIDEOS_BY_CATEGORY(this.props.match.params.id))
    console.log(this.props.match)
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

  state = {
    mobileMenuCategory: null,
    mobileMoreAnchorEl: null,
    ls:""
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

  findArray()
  {
    var i=this.props.categories.results_categories.find(this.props.match.params.id)
    return i.title
  }
  // found = array1.find(function(element) {
  //   return element > 10;
  // });

  render() {
    {if(this.props.categories.isloading)
      {
        return <LinearProgress />
      }
      else
      {
    console.log(this.props)
    const { mobileMenuCategory, mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpenCategory = Boolean(mobileMenuCategory);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { classes } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
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
        {this.props.categories.results_categories.map((row, i) => (
          <MenuItem>{row}</MenuItem>
        ))}
      </Menu>
    );

    return (
      <div className={classes.root}>
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
                {/* <Link to="/login">
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
              </Link> */}
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

        

        {/* <div>
            {this.props.videos.results.map((video)=>(
                    <img src={{uri:"http://i.ytimg.com/vi/C9x0m3Z1qeA/hqdefault.jpg"}}/>
            ))}

        </div> */}
              
        <div style={{ background: "linear-gradient( #000000, #1a222e)" }}>
          <div style={{ paddingLeft: 40, paddingRight: 40,}}>

           
           
            

            {/* slider category*/}
            {
              <div style={{paddingTop:50}}>
                <h2 style={{color: "#fff", fontWeight: "normal", marginBottom:30}}>
                  Category List {this.props.match.params.id}
                </h2>
                <Slider {...settings}>
                  {this.props.categories.results_categories.map((item, i) => (
                    <div style={{ position: "bsolute", backgroundColor:"gray"}}>
                      <Link to={"/detailcategory/"+item.id}>
                        <p style={{color:"white", fontSize:20, textAlign:"center"}}>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            }
          </div>
            
          <div >
              <p>Fandhi dhuga prayoga</p>
           </div>
             
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
  }
}

const mapStateToProps = (state) => ({
  categories:state.categoryReducer,
  videos:state.videoReducer
})
const Hm=withRouter(Home);
const ws=withStyles(styles)(Hm);

export default connect(mapStateToProps)(ws)

