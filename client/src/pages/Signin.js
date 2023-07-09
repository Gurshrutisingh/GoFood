import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Signin() {
  const [userName,setUserName]=useState();
  const [userEmail,setUserEmail]=useState();
  const [userPassword,setUserPassword]=useState();
  const [userLocation,setUserLocation]=useState();
  const [userErrors,setUserErrors]=useState();
  function handleUser(e){
    e.preventDefault();
    setUserName(e.target.value);
    console.log(e.target.value);
  }
  function handleEmail(e) {
    e.preventDefault();
    setUserEmail(e.target.value);
    console.log(e.target.value);
  }
  function handlePassword(e) {
    e.preventDefault();
    setUserPassword(e.target.value);
    console.log(e.target.value);
  }
  function handleLocation(e) {
    e.preventDefault();
    setUserLocation(e.target.value);
    console.log(e.target.value);
  }
  const navigate=useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const addUser= {name: userName,email: userEmail,location: userLocation,password: userPassword};
    const response= await fetch("http://localhost:9000/signin",{
      method:"POST",
      body: JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      }
    })
    const result=await response.json();
    if(!response.ok){
      console.log(result.errors);
    }
    if(response.ok){
      if(result.errors==null){
        console.log(result);
        setUserErrors();
        navigate('/login');
      }else{
        if(result.errors[0].path==='password'){
           setUserErrors("Set longer Password");
           console.log('password');
        }else if(result.errors[0].path==='email'){
          setUserErrors("Set proper Email");
          console.log("email");
        }
      }
    }
  }
  return (
    <div style={{'color': 'white'}} className='container'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3" >
  {
    userErrors&&<div className="alert alert-danger m-3" role="alert">
  {userErrors}
</div>
  }
  <h1>Sign In</h1>
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" value={userName} onChange={handleUser}/>
  </div>
  <div className="mb-3" >
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={userEmail} onChange={handleEmail}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Location</label>
    <input type="text" className="form-control" id="exampleInputPassword1"value={userLocation} onChange={handleLocation}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label" >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"value={userPassword} onChange={handlePassword}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to={"/login"} className='m-3 btn btn-danger'>Already a user</Link>
</form>
    </div>
  )
}

export default Signin
