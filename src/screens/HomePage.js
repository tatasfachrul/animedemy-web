import React, {Component} from "react";
import $ from 'jquery'
import {Navbar, Nav, NavItem,}  from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import {Link} from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row, Footer } from "mdbreact";


class HomePage extends Component{

    

 render(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    accessibility:true,
  };

  var feature=[
    {
      id:1,
      title:"Boruto: Naruto Next Generations", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:2,
      title:"Goblin Slayer", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    
  ]

  var newUpdates=[
    {
      id:1,
      title:"Boruto: Naruto Next Generations", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:2,
      title:"Goblin Slayer", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    
  ]

  var trending=[
    {
      id:1,
      title:"Boruto: Naruto Next Generations", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:2,
      title:"Goblin Slayer", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    
  ]

  var popular=[
    {
      id:1,
      title:"Boruto: Naruto Next Generations", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:2,
      title:"Goblin Slayer", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    {
      id:3,
      title:"Bakumatsu", 
      img:'https://2.bp.blogspot.com/-O5VwK0GUnno/WOSR_MV4FWI/AAAAAAAAQlc/bvEO8Bi0hcACzaNTe-4_ucgcWiB5tAjLgCLcB/s1600/84460.jpg'
    },
    
  ]


   return (
   <div >
        <Navbar >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">ANIMADEMY</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav style={{width:'80%'}}>
              <NavItem eventKey={1} href="/categories">
                CATEGORIES
              </NavItem>
              <NavItem eventKey={2} href="/subcribe">
                SUBSCRIBE
              </NavItem>
              <NavItem>
              <form class="navbar-form" role="search" style={{marginTop:-5}}>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
                    <div class="input-group-btn">
                        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
                </form>
              </NavItem>
              <NavItem className="pull-right"eventKey={3} href="/logout">
                LOGOUT
              </NavItem>
            </Nav>
          </Navbar>


          <div style={{marginTop: -50,}}>
          <Carousel showArrows={true} showThumbs={false} showIndicators={false} infiniteLoop={true} showStatus={false}>
                {feature.map((ft,key)=>(
                    
                    <div>
                        <img style={{height:550, objectFit:"cover"}} src={ft.img} />
                        <p className="legend"><p style={{fontSize:50}}>{ft.title}</p><Link to={"detail/"+ft.id} className="btn btn-danger">PLAY</Link></p>
                    </div>
                ))}
            </Carousel>
          </div>

          <div className="container">
              <h3 style={{color:"white"}}>NEW UPDATES</h3> <br/>
              <Slider {...settings}>
                  {newUpdates.map((nu)=>(
                      <div className="img-thumbnail" style={{hight:100, alignSelf:'center'}}>
                          <Link to={"detail/"+nu.id}><img style={{height:90,width:90, objectFit:"cover"}} src={nu.img}></img><h6>{nu.title}</h6> </Link> 
                    </div>
                  ))}
              </Slider>
          </div>

          <div className="container">
              <h3 style={{color:"white"}}>TRENDING</h3> <br/>
              <Slider {...settings}>
                  {trending.map((nu)=>(
                      <div className="img-thumbnail" style={{hight:100, alignSelf:'center'}}>
                         <Link to={"detail/"+nu.id}><img style={{height:90,width:90, objectFit:"cover"}} src={nu.img}></img><h6>{nu.title}</h6> </Link> 
                    </div>
                  ))}
              </Slider>
          </div>

          <div className="container">
              <h3 style={{color:"white"}}>POPULAR</h3> <br/>
              <Slider {...settings}>
                  {popular.map((nu)=>(
                      <div className="img-thumbnail" style={{hight:100, }}>
                          <Link to={"detail/"+nu.id}><img style={{height:90,width:90, objectFit:"cover"}} src={nu.img}></img><h6>{nu.title}</h6> </Link> 
                    </div>
                  ))}
              </Slider>
          </div>


         
          <div className="footer-copyright text-center py-3" style={{marginTop:100,paddingBottom:50}}>
            <Container fluid style={{color:"white"}}>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> Animedemy </a>
            </Container>
          </div>

   </div>
   )
 } 
}

export default HomePage;