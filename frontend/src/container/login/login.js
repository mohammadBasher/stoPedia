import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
// import React from 'react';
import './style.css'
class Login extends Component{
  state = {
      email:'',
      password:'',
      isAuth:"false"
  }
  handleChange = name => event =>{
      this.setState({
        [name]:event.target.value,
        isAuth:"false"
      })
  }

  handleSubmit= event =>{
  event.preventDefault();

   //alert(`email => ${this.state.email}    password => ${this.state.password}`);

   const data = { "email":this.state.email,"password":this.state.password };
   fetch('http://localhost:4000/login',{
     method: 'post',
     credentials:"include",
     headers: {
       "Content-type":"application/json"
     },
     body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then((res) => {
     if(!res.username){
      alert(res.e);
     }
     else{
      alert("Redirect user to readblogs");
      this.setState({
        isAuth:"true"
      })
    }
   })
   .catch((err) => {
     console.log(err);
   })

   this.setState({
    email:'',
    password:''
   })
  }
  
  help =()=>{
    if(this.state.isAuth==="true")
    {
      return <Redirect to="/" />
    }
  }
  render(){
    return(
      <div className="content">
   <br/>
    <span className="text-sp">Enter your details here Login</span> 


    <div className="form-space p-3">

      <form className="mt-5" onSubmit={this.handleSubmit}>

        
        <div className="form-group mb-5">
          <input 
          type="email" 
          placeholder="Email" 
          className="form-control"
          value={this.state.email}
          required="required"
          onChange={this.handleChange("email")}
          name="email"
          />
        </div>

        

        <div className="form-group mb-5">
          <input 
           type="password" 
           placeholder="password" 
           className="form-control"
           value={this.state.password}
           required="required"
           onChange={this.handleChange("password")}
           name="password"
          />
        </div>
  
        <div className="form-group">
          <input 
           type="submit" 
           className="form-control btn btn-danger"
          />
        </div>
          {this.help()}
      </form>
        
  </div>
  </div>
    )
  }
}

export default Login
