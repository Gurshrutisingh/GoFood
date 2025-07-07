import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import "../App.css"
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Home() {
  const [search,setSearch]=useState('');
  const [foodData,setfoodData]=useState([]);
  const [foodCatigories,setfoodCatigories]=useState([]);
  const loadContent = async()=>{
    
    const response= await fetch("http://localhost:9000/foodData",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      }
    })
    const result=await response.json();
    //console.log(result);
    setfoodData(result[0]);
    setfoodCatigories(result[1]);
  }
  useEffect(()=>{
    loadContent();
    
  },[]);
  return (
    <>
        <NavBar/>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
  <div className="carousel-inner">
  <div className="carousel-caption d-none d-md-block" style={{"zIndex":"2"}}>
        <div className="d-flex justify-content-center">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
          {/* <button className="btn btn-success" type="submit">Search</button> */}
        </div>
  </div>
    <div className="carousel-item active" style={{"maxHeight":"600px",filter:"brightness(30%)"}}>
      <img src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{"maxHeight":"600px",filter:"brightness(30%)"}}>
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{"maxHeight":"600px",filter:"brightness(30%)"}}>
      <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div class="row align-items-start">
        <div className='col'>
        {
          foodCatigories?.map((item)=>{
            return (<div class="row align-items-start"><div style={{'color':'white'}} ><h3 className='m-3'>{item.CategoryName}</h3><hr/></div>{
            foodData?.filter((ele)=>(ele.CategoryName===item.CategoryName)&&(ele.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((comp)=>{
                return (<div style={{'color':'white'}} className='col-12 col-md-6 col-lg-3'><Card Compounds={comp}/></div>)
              })}
              </div>)
          })
        }
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
