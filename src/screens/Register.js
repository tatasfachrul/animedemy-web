import React, {Component} from "react"
import mainLogo from'./../img/ANIMEDEMY.png';
import axios from 'axios'
import {Redirect ,withRouter } from "react-router-dom"

 class Register extends Component{

	handleSubmit= async (e)=> {
		e.preventDefault()
		const email = e.target.email.value
		const pass = e.target.password.value
		const passR= e.target.passwordR.value
		const username= e.target.username.value
		const name=e.target.name.value
		
		let err=false;
		let res=null;

		try{
				if(pass!=passR)
				{
					alert('konfirmasi password salah')
				}
				else
				{
					res=await axios.post('http://192.168.1.116:3333/api/v1/register',{
						username:username,
						name:name,
						password:pass,
						email:email,
					})
				}
		}catch (error){
			err=true
		}

		if(err)
		{
			alert('gagal registrasi')
		}
		else
		{
			alert('sukses registrasi')
			return this.props.history.push('/')

			
		}
	}

	render(){
		return(
			<div style={{height:"100%", paddingBottom:450, backgroundPosition:"center", backgroundSize: "cover", backgroundImage: "url(http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg)"}} >
				<div style={{marginTop:-50}} >
							<img style={{marginLeft:40, height:200,width:200}} src={require('../img/ANIMEDEMY.png')}/>
				</div>
				
				<div className="container" style={{backgroundColor:"rgb(0,0,0,0.7)", width:400,padding:40, borderRadius:7}}>
							<h3 style={{color:'white', marginBottom:50}}>SIGN UP</h3>
							<form method="post"  onSubmit={this.handleSubmit}> 
							<input style={{borderColor:"rgb(152, 230, 255)", borderWidth:3}} className="form-control" name="name" placeholder="Name" /> <br/>
									<input required style={{borderColor:"rgb(152, 230, 255)", borderWidth:3}} className="form-control" name="username"placeholder="Username" /> <br/>
									<input required  style={{borderColor:"rgb(152, 230, 255)", borderWidth:3}} type="password" className="form-control" name="password" placeholder="Password"/>	<br/>
									<input required  style={{borderColor:"rgb(152, 230, 255)", borderWidth:3}} type="password" className="form-control" name="passwordR" placeholder="Confirm Password"/>	<br/>
									<input required  style={{borderColor:"rgb(152, 230, 255)", borderWidth:3}} className="form-control" name="email" placeholder="Email"/>	<br/>
									<button type="submit" style={{backgroundColor:'rgb(152, 230, 255)',color:'white'}} className="btn btn-default btn-block">SIGN UP</button>
							</form>
							
				</div>
			</div>
			);
	}	 
}

export default withRouter(Register)