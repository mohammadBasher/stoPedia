import React,{useState,useEffect} from "react";
import { convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { convertToHTML } from "draft-convert";
import Header from './../../component/header/header'
import {Redirect} from 'react-router-dom'
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
                            blog = convertToHTML(convertFromRaw(result[i].content));
                            full = {
                                content : blog,
                                title : result[i].title,
                                tags : result[i].tags
                            }
                            blogsloc.push(full);
                        }
                setBlogs(blogsloc)
                console.log(full)
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
                                 <span  dangerouslySetInnerHTML={{__html:each.content}}></span>
                             <button className="btn btn-outline-dark">see more</button>    
                             </div>
                            
                      </div>
                  )
              })
          }
      </div>
  </div>
)
}

export default ReadBlogs