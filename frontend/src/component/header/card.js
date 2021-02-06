import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'
const Card = (props) => {
return(
  <div className="card-cls">
      <br/>
     <Link to={props.userpage}><b>{props.name}</b></Link>
      <br/>
  </div>
)
}

export default Card