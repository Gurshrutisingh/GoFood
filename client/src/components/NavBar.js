import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
function NavBar() {
  return (
    <div >
       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid font-weight-bold">
    <Link className="navbar-brand fw-bold fst-italic" to={'/'}><p style={{"fontSize":"2.3rem"}}>GoFood...<DeliveryDiningIcon/></p></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to={'/signin'}>Signin</Link>
        <Link className="nav-link active" to={'/login'}>Login</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
