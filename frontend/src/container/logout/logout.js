import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  const logout = () => {
        fetch("http://localhost:4000/logout",{
            method: 'get',
            credentials:"include",
            headers: {
              "Content-type":"application/json"
            }
          })
          .then(() => {
              alert("Logged out sucessfully!!")
          })
          .catch((err) => {
              console.log(err);
          })
          return <Redirect to="/" />
    }

return(
  <div>
     {logout()}
  </div>
)
}

export default Logout
