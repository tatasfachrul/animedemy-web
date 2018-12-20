// import React, { Component } from "react";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// import { Redirect, withRouter, Link } from "react-router-dom";

// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   InputBase,
//   MenuItem,
//   Menu,
//   Badge,
//   withStyles
// } from "@material-ui/core";

// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import MailIcon from "@material-ui/icons/Mail";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import Button from "@material-ui/core/Button";
// import PlayArrow from "@material-ui/icons/PlayArrow";
// import Add from "@material-ui/icons/Add";

// // Import Carousel
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

// import BackgroundShadow from "./BackgroundShadow";
// import BackgroundShadowImage from "./BackgroundShadowImage";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";

// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";

// const categories = ["Action", "Drama", "Adventure", "Romance"];
// const styles = theme => ({
//   root: {
//     width: "100%",
//     backgroundColor: "#000000"
//   },
//   header: {
//     backgroundColor: "rgba(0,0,0,0.5)",
//     position: "fixed"
//   },
//   grow: {
//     flexGrow: 1
//   },
//   divImageHeader: {
//     width: 120,
//     height: 40
//   },
//   button: {
//     fontWeight: "normal",
//     fontSize: 12
//   },
//   search: {
//     width: 170,
//     position: "relative",
//     borderRadius: 100,
//     backgroundColor: "rgba(255,255,255,0.15)",
//     "&:hover": {
//       backgroundColor: "rgba(255,255,255,0.3)"
//     }
//   },
//   searchIcon: {
//     width: 50,
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputInput: {
//     paddingTop: 7,
//     paddingRight: 5,
//     paddingBottom: 7,
//     paddingLeft: 50,
//     color: "#fff"
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex"
//     }
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none"
//     }
//   }
// });

// class Header extends Component {
//   state = {
//     mobileMenuCategory: null,
//     mobileMoreAnchorEl: null
//   };

//   handleMobileMenuOpenCategory = event => {
//     this.setState({ mobileMenuCategory: event.currentTarget });
//   };

//   handleMobileMenuCloseCategory = () => {
//     this.setState({ mobileMenuCategory: null });
//   };

//   handleMobileMenuOpen = event => {
//     this.setState({ mobileMoreAnchorEl: event.currentTarget });
//   };

//   handleMobileMenuClose = () => {
//     this.setState({ mobileMoreAnchorEl: null });
//   };

//   render() {
//     const { mobileMenuCategory, mobileMoreAnchorEl } = this.state;
//     const isMobileMenuOpenCategory = Boolean(mobileMenuCategory);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//     const { classes } = this.props;

//     const renderMobileMenu = (
//       <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMobileMenuOpen}
//         onClose={this.handleMobileMenuClose}
//       >
//         <MenuItem>
//           <IconButton color="inherit">
//             <NotificationsIcon />
//           </IconButton>
//           <p>Subscribe</p>
//         </MenuItem>
//         <MenuItem onClick={this.handleProfileMenuOpen}>
//           <IconButton color="inherit">
//             <AccountCircle />
//           </IconButton>
//           <p>Login</p>
//         </MenuItem>
//       </Menu>
//     );

//     const renderMobileMenuCategory = (
//       <Menu
//         anchorEl={mobileMenuCategory}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMobileMenuOpenCategory}
//         onClose={this.handleMobileMenuCloseCategory}
//       >
//         {categories.map((row, i) => (
//           <MenuItem>{row}</MenuItem>
//         ))}
//       </Menu>
//     );

//     return (
//       <AppBar position="static" className={classes.header}>
//         <Toolbar>
//           <div className={classes.divImageHeader}>
//             <img
//               src={require("../../assets/images/ANIMEDEMY.png")}
//               style={{ width: "inherit", height: "inherit" }}
//             />
//           </div>

//           <IconButton
//             className={classes.sectionMobile}
//             color="inherit"
//             onClick={this.handleMobileMenuOpenCategory}
//           >
//             <MenuIcon />
//           </IconButton>

//           <div className={classes.sectionDesktop}>
//             {categories.map((row, i) => (
//               <Button color="inherit" style={{ fontSize: 13 }}>
//                 {row}
//               </Button>
//             ))}
//           </div>

//           <div className={classes.grow} />

//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{ input: classes.inputInput }}
//             />
//           </div>

//           <div className={classes.sectionDesktop}>
//             <Button
//               style={{
//                 fontWeight: "normal",
//                 backgroundColor: "transparent",
//                 color: "#fff",
//                 fontSize: 12
//               }}
//             >
//               <NotificationsIcon /> &nbsp; Subscribe
//             </Button>
//             &nbsp;
//             <Button
//               style={{
//                 fontWeight: "normal",
//                 backgroundColor: "transparent",
//                 color: "#fff",
//                 fontSize: 12
//               }}
//             >
//               <AccountCircle /> &nbsp; Login
//             </Button>
//           </div>

//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-haspopup="true"
//               onClick={this.handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMobileMenuCategory}
//     );
//   }
// }

// export default withStyles(styles)(Header);