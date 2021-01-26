import React, {Component} from 'react';

class Logout extends Component{
    logout = () => {
        fetch("http://localhost:4000/logout",{
            method: 'get',
            credentials:"include",
            headers: {
              "Content-type":"application/json"
            }
          })
          .then(() => {
              alert("Redirect user to home page")
          })
          .catch((err) => {
              console.log(err);
          })
    }

    render(){
        return(
            <div>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}


export default Logout
