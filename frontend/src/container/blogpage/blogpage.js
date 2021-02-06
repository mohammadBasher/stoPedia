import React from 'react';
import './blogpage.css'
import {Link,useLocation} from 'react-router-dom'
import Header from './../../component/header/header'
import dateFormat from 'dateformat';
const Blogpage = (props) => {
  // console.log("blog",props.location.blogProps)
  let location = useLocation();
  {console.log(location.state)}
  const title = location.state.title
  const tags = location.state.tags
  const content = location.state.content
  const blogDate = location.state.date
  const author = location.state.creator
  // location.state contains title , tag ,date , content ,etc...
  return(
  <div>
        <Header />
        <div className="blog-content container">
          <h1>{title}</h1>
          <br/>
            <div className="tag-div">
              {
                tags.map((each)=>{
                  if(each!=="")
                  return (
                    <span className="tag-span" >{each}</span>
                  )
                })
              }
            </div>
            <br/><br/>
            <div className="main" dangerouslySetInnerHTML={{__html:content}}>
            </div>
            <br/><br/>
            <b>
            Written By : {author}
            </b>
            <br/><br/>
            <p className="blog-date">Creation Date : {dateFormat(blogDate,"mmmm dS, yyyy")}</p>
        </div>
   </div>
)
}

export default Blogpage