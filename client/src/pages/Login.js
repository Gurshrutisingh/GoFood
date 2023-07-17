import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'

function Login() {
  const [userEmail,setUserEmail]=useState();
  const [userPassword,setUserPassword]=useState();
  const [userErrors,setUserErrors]=useState();
  const navigate=useNavigate();
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
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const addUser={email: userEmail,password: userPassword};
    const response= await fetch("http://localhost:9000/login",{
      method:"POST",
      body: JSON.stringify(addUser),
      headers:{
        "Content-Type": "application/json",
      }
    })
    const result=await response.json();
    if(!response.ok){
      console.log(result.error);
    }
    if(response.ok){
      if(result.error===true){
        setUserErrors(result.mssg);
      }else{
        setUserErrors();
        localStorage.setItem("userEmail",userEmail);
        localStorage.setItem("authToken",result.mssg);
        navigate('/');
      }
      console.log(result);
    }
  }
  return (
    <div className='container' style={{'color':'white'}}>
      <form onSubmit={handleSubmit}>
      {
    userErrors&&<div className="alert alert-danger m-3" role="alert">
  {userErrors}
</div>
  }
      <h1 className='m-3'>Log In</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={userEmail} onChange={handleEmail}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={userPassword} onChange={handlePassword}/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to={"/signin"} className='m-3 btn btn-danger'>I'm a new user</Link>
</form>
    </div>
  )
}

export default Login
