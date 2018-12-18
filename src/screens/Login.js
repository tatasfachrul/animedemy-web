import React, {Component} from "react"
import mainLogo from'./../img/ANIMEDEMY.png';;
export default class Login extends Component{
	render(){
		return(
			<div style={{height:"100%", paddingBottom:160,backgroundImage: "url(http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg)"}} >
				<div style={{marginTop:-50}} >
							<img style={{marginLeft:40, height:200,width:200}} src={require('../img/ANIMEDEMY.png')}/>
				</div>
				
				<div className="container" style={{backgroundColor:"rgb(0,0,0,0.7)", width:400,padding:40, borderRadius:7}}>
							<h3 style={{color:'white', marginBottom:50}}>LOGIN</h3>
							<input className="form-control" name="username"placeholder="Username" /> <br/>
							<input type="password" className="form-control" name="password" placeholder="Password"/>	<br/>
							<a style={{backgroundColor:'#CA0504'}} className="btn btn-danger btn-block">LOGIN</a>
				</div>
			</div>
			);
	}	 
}