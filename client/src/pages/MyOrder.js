import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function MyOrder() {
    let [orderData, setorderData] = useState({})
    let  listItems;
    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:9000/myOrder", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            response=Object.values(response);
            console.log(response);
            setorderData(response); 
             
        })

    }

    useEffect(() => {
      fetchMyOrder();
    },[]);
     
    return (
      <div >
        <NavBar />
        <div className='container'>
          <div className='row text-white'>
          <h3 className='m-3'>User Orders:</h3>
             {Object.keys(orderData).map(ele=>{
              console.log(ele);
              return(<div class="card m-2" style={{'backgroundColor':"#181818",'borderColor':'white','borderWidth':'3px'}}>
              <div class="card-body">
                <div className='m-2'>{orderData[ele].name}</div>
                <div className='m-2'>{orderData[ele].price}</div>
                <div className='m-2'>{orderData[ele].size}</div>
                <div className='m-2'>{orderData[ele].qty}</div>
               </div>
              </div>)
             })}
          </div>
       </div>
        <Footer />
      </div>
    )
  }
  


export default MyOrder
