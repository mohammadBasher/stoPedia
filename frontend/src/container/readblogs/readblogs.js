import React,{useState,useEffect} from "react";
import { convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { convertToHTML } from "draft-convert";
import Header from './../../component/header/header'
import {Redirect,Link} from 'react-router-dom'
import dateFormat from 'dateformat';


// import React from 'react';
import './readblogs.css'
const ReadBlogs = () => {

        const [blogs,setBlogs] = useState([]);
        const [isAuthen ,setIsAuthen] = useState(true)
        // now we will put the blogs data in hooks parameter (blogs) 
        useEffect(()=>{
            fetch("http://localhost:4000/readblogs",{
                credentials:"include",
                method:"GET",
                headers:{
                    "Content-type":"application/json;charset=utf-8"
                }
            })
            .then(result => result.json())
            .then(result => {
                if(result.err==="true"){
                    // alert("Redirect user to login page");
                    setIsAuthen(false);
                }
                else{
                    var blogsloc=[];
                    var blog;
                    var full;
                    // console.log(result)
                        for (var i = 0; i < result.length; i++) {
                            // console.log(result[i].title);
                            // for(var j=0;j<result[i].tags.length;j++){
                            //    console.log(result[i].tags[j]);
                            // }
                            console.log(result[0].username);
                            blog = convertToHTML(convertFromRaw(result[i].content));
                            full = {
                                content : blog,
                                title : result[i].title,
                                tags : result[i].tags,
                                date : result[i].date_time,
                                blog_id: result[i]._id,
                                creator : result[i].username
                            }
                            blogsloc.push(full);
                        }
                setBlogs(blogsloc)
                console.log(result)
                }
            })
            .catch(err => {
                console.log(err);
            })
        
      
      },[]);
  
  const help = ()=>{
       if(isAuthen === false)
       {
          return <Redirect to="/login" />
       }
   }
   

return(

  <div className=" App container-fluid" >
      {help()}
      <div>
      <Header />
      </div>
      <div className="blog-contanier" >
          {
              blogs.map((each)=>{
                  return (
                      <div className="card card-cls my-4 mx-2 p-3 ">
                             <div className="card-text">
                                 {/* <span  dangerouslySetInnerHTML={{__html:each.content}}></span> */}
                                <h3>{each.title}</h3> 
                                <br/>
                                <div className="tag-div">
                                <b><span className="blogtag">{
                                    each.tags.map((each)=>{
                                    if(each!=="")
                                    return (
                                        <span className="tag-span" >{each}</span>
                                    )
                                    })
                                }</span></b>
                                <br/><br/>
                                
                                </div>
                                <br/>   
                                <p className="date">Creation Date : {dateFormat(each.date,"mmmm dS, yyyy")}</p>                       
                             </div>
                             <Link 
                             
                             to={{
                                 pathname:`/blogpage/${each.blog_id}`,
                                 state:each
                                }} 
                             
                             ><button className="btn btn-outline-dark">see more</button></Link> 
                      </div>
                  )
              })
          }
      </div>
  </div>
)
}

export default ReadBlogs