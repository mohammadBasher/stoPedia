import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './style.css'


class SignUp extends Component{
  state = {
   fullName:'',
   username:'',
   email:'',
   password:'',
   isAuth:"false"
  }
  handleChange = name =>event =>{
    
    this.setState({
      [name] : event.target.value,
      isAuth:"false"
    })
  }

  handleSubmit = (event)=>{
   event.preventDefault();

   //alert(`NAME = ${this.state.fullName} EMAIL= ${this.state.email}`)
    const data = { fullname: this.state.fullName,username: this.state.username,email: this.state.email,password: this.state.password };
    console.log(data);
    fetch('http://localhost:4000/signup',{
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      alert("Signup success!! You can login now");
      this.setState({
        isAuth:"true"
      })
    })
    .catch((err) => {
      console.log(err);
    })
  
   this.setState({
    fullName:'',
    username:'',
    email:'',
    password:'',
   })

  }

  help = ()=>{
    if(this.state.isAuth==="true")
    {
      return <Redirect to="/login" />
    }
  }

  render(){ 
return(
  <div className="content">
   <br/>
    <span className="text-sp">Enter your details here to SignUp</span> 


    <div className="form-space p-3">

      <form className="mt-5" onSubmit={this.handleSubmit}>

        <div className="form-group mb-5">
          <input type="text" placeholder="Full Name" 
          className="form-control"
          value={this.state.fullName}
          required="required"
          onChange={this.handleChange("fullName")}
          name="fullName"
          />
        </div >

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
          type="text" 
          placeholder="username" 
          className="form-control"
          value={this.state.username}
          required="required"
          onChange={this.handleChange("username")}
          name="username"
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
             
      </form>
         {this.help()}
  </div>
  </div>
)
    
  }
}

export default SignUp