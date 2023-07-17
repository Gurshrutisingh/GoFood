import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import  Badge  from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../pages/Cart';
import { useCart } from './ContextReducer';
function NavBar() {
  const navigate=useNavigate();
  const data=useCart();
  const [cartView,setCartView]=useState(false);
  const handleLogout=()=>{
   localStorage.removeItem("authToken");
   navigate("/login");
  }
  return (
    <div >
       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid font-weight-bold ">
  <div className='d-flex flex-row'>
    <Link className="navbar-brand fw-bold fst-italic" to={'/'}><p style={{"fontSize":"2.3rem"}}>GoFood...<DeliveryDiningIcon/></p></Link>
    <div className=' d-flex align-items-center'>
    <Link className="fw-bold text-white m-3" to={'/'} style={{'textDecoration':'none'}}>Home</Link> 
    </div>
    {(localStorage.getItem("authToken"))?
    <div className=' d-flex align-items-center'>
    <Link className="fw-bold text-white" to={'/myOrder'} style={{'textDecoration':'none'}} >My Orders</Link> 
    </div>:""
    }
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {(!localStorage.getItem("authToken"))?
    <div className='d-flex '>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex flex-row-reverse">
        <Link className="btn bg-white text-success m-1 fw-bold" aria-current="page" to={'/signin'}>Signin</Link>
        <Link className="btn bg-white text-success m-1 fw-bold" to={'/login'}>Login</Link>
      </div>
    </div>
    </div>:
    <div>
    <div className='btn bg-white text-success mx-2' onClick={()=>setCartView(true)}>
    MyCart{" "}
    <Badge pill bg="danger"> {data.length} </Badge>
    </div>
{cartView? <Modal onClose={()=>setCartView(false)}><Cart /></Modal>:null}
    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
    </div>
    }
  </div>
</nav>
    </div>
  )
}

export default NavBar
