import React, {Component} from "react"
import axios from 'axios'

export default class Login extends Component{

	

	handlesubmit= async (e)=>
	{
		e.preventDefault()
		const email=e.target.username.value
		const password=e.target.password.value
		let err = false;
		let res = null;

		//console.log(email+password);

		try {
 		res = await axios.post('http://192.168.1.116:3333/api/v1/login', {
				email: email,
				password: password,
			})
		} catch (error) {
			err = true
		}
		
		if(err)
		{
				alert('gagal login')
		}	
		else
		{
			
		}

		
	}

	render(){

		return(
			<div style={{height:"100%", paddingBottom:160,backgroundImage: "url(http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg)"}} >
				<div style={{marginTop:-50}} >
							<img style={{marginLeft:40, height:200,width:200}} src={require('../img/ANIMEDEMY.png')}/>
				</div>
				
				<div className="container" style={{backgroundColor:"rgb(0,0,0,0.7)", width:400,padding:40, borderRadius:7}}>
						<form method="post" onSubmit={this.handlesubmit}>
							<h3 style={{color:'white', marginBottom:50}}>LOGIN</h3>
							<input className="form-control" name="username"placeholder="Username" /> <br/>
							<input type="password" className="form-control" name="password" placeholder="Password" />	<br/>
							<button type="submit" style={{backgroundColor:'#CA0504'}} className="btn btn-danger btn-block">LOGIN</button>
						</form>
				</div>
			</div>
			);
	}	 
}