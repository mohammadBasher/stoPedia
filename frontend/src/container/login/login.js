import React, {Component} from 'react';
// import React from 'react';
import './style.css'
class Login extends Component{
  state = {
      email:'',
      password:''
  }
  handleChange = name => event =>{
      this.setState({
        [name]:event.target.value
      })
  }

  handleSubmit= event =>{
  event.preventDefault();

   //alert(`email => ${this.state.email}    password => ${this.state.password}`);

   const data = { "email":this.state.email,"password":this.state.password };
   fetch('http://localhost:4000/login',{
     method: 'post',
     headers: {
       "Content-type":"application/json"
     },
     body: JSON.stringify(data)
   })
   .then(res => res.json())
   .then((res) => {
     console.log(res);
     alert("Hello "+res.username);
   })
   .catch((err) => {
     console.log(err);
   })

   this.setState({
    email:'',
    password:''
   })
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
          type="text" 
          placeholder="Email" 
          className="form-control"
          value={this.state.email}
          onChange={this.handleChange("email")}
          name="email"
          />
        </div>

        

        <div className="form-group mb-5">
          <input 
           type="text" 
           placeholder="password" 
           className="form-control"
           value={this.state.password}
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

      </form>
         
  </div>
  </div>
    )
  }
}

export default Login