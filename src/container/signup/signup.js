import React, {Component} from 'react';
import './style.css'


class SignUp extends Component{
  state = {
   fullName:'',
   username:'',
   email:'',
   password:''
  }
  handleChange = name =>event =>{
    
    this.setState({
      [name] : event.target.value
    })
  }

  handleSubmit = (event)=>{
   event.preventDefault();

   alert(`NAME = ${this.state.fullName} EMAIL= ${this.state.email}`)
   
   this.setState({
    fullName:'',
    username:'',
    email:'',
    password:''
   })

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
          onChange={this.handleChange("fullName")}
          name="fullName"
          />
        </div >

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
          placeholder="username" 
          className="form-control"
          value={this.state.username}
          onChange={this.handleChange("username")}
          name="username"
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

export default SignUp