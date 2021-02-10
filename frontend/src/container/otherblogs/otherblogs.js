import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom'
import { convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import "draftail/dist/draftail.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
import "draft-js-side-toolbar-plugin/lib/plugin.css";
import { convertToHTML } from "draft-convert";
import Header from '../../component/header/header';
import {Redirect,Link} from 'react-router-dom'
import dateFormat from 'dateformat';
const Otherblogs = () => {
  let location = useLocation();
  // console.log(location.state)
  const [blogs,setBlogs] = useState([]);
  const [isAuth,setIsAuth] = useState("true")
  useEffect(()=>{
    const username = {"username":location.state};

      fetch("http://localhost:4000/searchBlogs",{
            credentials:"include",
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify(username)
      })
      .then(result => result.json())
      .then(result =>{
        // console.log(result);
        if(result.err==="true")
        {
            setIsAuth("false");
        }else{
        var blogsloc=[];
        var blog;
        var full;
            for (var i = 0; i < result.length; i++) {
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
      .catch(err =>{
        console.log(err);
      })

  },[])

  return(
  <div>
    <Header />
    {isAuth==="false"?(<h3>please Login first</h3>):(
       <div>
       <h1>Collections of {location.state}</h1>
         {
           blogs.map((each)=>{
             return (
               <div className="card card-cls my-4 mx-2 p-3">
                   <div className="card-text">
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
               </div>
             )
           })
         }
       </div>
    )}
    
   
  </div>
)
}

export default Otherblogs