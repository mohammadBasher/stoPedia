import React,{useState} from 'react';
import "./style.css"
import {Link} from 'react-router-dom'
import Card from './card'
const Header = () => {
  
  const [isAuth,setIsAuth] = useState({
    isHere:"false",
    name:""
  })
  
 const [search , setSearch] = useState({
   searchVal:""
 });
 
 const [result,setResult] = useState([])
 
  const setname = (event) => {
    setSearch({...search,searchVal:event.target.value})
    setResult([])
  }
  const searchUser = (event)=>{
    const toSearch={"username":search.searchVal};
    // console.log(toSearch);
    // alert("Wait for sometime");
       fetch('http://localhost:4000/searchNames',{
         credentials:"include",
         method:"POST",
         headers:{
             "Content-type":"application/json"
         },
         body: JSON.stringify(toSearch)
     }).then(res => {
      //  console.log(res);
       return res.json();
     })
       .then(res =>{
        //  console.log(res);
         setResult(res);
       })
       .catch(err => {
         console.log(err);
     })  

  
  }
  const validate = ()=>{

    fetch("http://localhost:4000/isAuth",{
      credentials:"include",
      method:"GET",
      headers:{
          "Content-type":"application/json;charset=utf-8"
      }
      })
      .then(result => result.json())
      .then(result =>{
          if(result.username===null)
          {
            
             setIsAuth({...isAuth , isHere:"false" , name:""})
          }else{
             setIsAuth({...isAuth,isHere:"true" , name:result.username});
            //  console.log(result);
          }
      })
      .catch(err => {
          console.log(err);
      })
  
  
  }
  
  return(
  <div className="App">
    
    {/* {console.log("hello")} */}
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
        {validate()}
          <div className="container-fluid main-nav">
           
            <Link className="navbar-brand" to='/' >
            <i className="fas fa-2x fa-book"></i>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse header-content" id="navbarNav">
             <ul className="navbar-nav ">
                <li className="nav-item mx-5 ">
                <Link className="nav-link"  to="/editor" >Write</Link>
                </li>
                <li className="nav-item mx-5 ">
                <Link className="nav-link"  to="/readblogs" >Read</Link>
                </li>

                {
                  isAuth.isHere === "false" ?  (<>
                    <li className="nav-item mx-5">
                    <Link className="nav-link" to="/signup" >Sign Up</Link>
                    </li>
                    <li className="nav-item mx-5 ">
                    <Link className="nav-link" to="/login">Log in</Link>
                    </li></>
                  ) : (<>
                    <li className="nav-item mx-5 ">
                    <Link className="nav-link" to="/logout">Log out</Link>
                    </li>
                    <li className="nav-item mx-5 ">
                    <label className="nav-link" >{isAuth.name}</label>
                    </li>
                  </>)
                }
                
              </ul>

              {/* <form class=" my-2 my-lg-0 search" onSubmit={searchUser}> */}
            <div>
             <div className="input-res">
              <input 
              className="form-control search" 
              type="search" 
              placeholder="Search" 
              value={search.searchVal}
              onChange={setname}
              name="searchVal"
              />
              {
                
              }
              <div className="search-res">
            {
                result.length > 0 ?(result.map((each)=>{
                  return (
                  <>
                  <Card name={each} address={`/otherblogs/${each}`} userstate={each} />
                  <br/>
                  </>
                  )
                })
               ):""
              }
            </div>

             </div>

            
            </div>
              <button type="submit" className="btn btn-outline-success mx-5 btn-search" onClick={searchUser}>Search</button>
              {
                 
              }
            </div>
          </div>

        </nav>
    
  </div>
)
}

export default Header