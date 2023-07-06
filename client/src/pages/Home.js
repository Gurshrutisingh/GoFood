import React from 'react'
import NavBar from '../components/NavBar'
import "../App.css"
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

function Home() {
  return (
    <>
        <NavBar/>
        <Carousel/>
        <div class="row align-items-start">
        <div className='col'>
        <Card/>
        </div>
        <div className='col'>
        <Card/>
        </div>
        <div className='col'>
        <Card/>
        </div>
        <div className='col'>
        <Card/>
        </div>
        <div className='col'>
        <Card/>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Home
