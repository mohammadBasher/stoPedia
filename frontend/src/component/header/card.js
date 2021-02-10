import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import './card.css'

const Card = (props) => {

return(
  <div className="card-cls">
      <br/>
     <Link to={{
       pathname:props.address,
       state:props.userstate
     }}><b>{props.name}</b></Link>
      <br/>
  </div>
)
}

export default Card