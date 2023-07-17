import React, { useState,useRef, useEffect } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
function Card(props) {
  let options=props.Compounds.options[0];
  let dispatch=useDispatchCart();
  let data=useCart();
  let priceOption=Object.keys(options);
  //console.log(options);
  const priceRef=useRef();
  let option=props.Compounds.options[0];
  const [qty,setQty]=useState(1);
  const [size,setSize]=useState("");

  const handleAddToCart= async()=>{
    let food = []
    for (const item of data) {
      if (item.id === props.Compounds._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food !== []) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.Compounds._id, price: Finalprice, qty: qty })
        return;
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.Compounds._id, name: props.Compounds.name, price: Finalprice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return;
      }
      return;
    }

    await dispatch({ type: "ADD", id: props.Compounds._id, name: props.Compounds.name, price: Finalprice, qty: qty, size: size })


  }
  let Finalprice=qty*parseInt(option[size]);
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[]);
  return (
    <div >
      <div className="card m-4 " style={{"width":"18rem","backgroundColor":"#181818","color":"white","borderWidth":"1px","borderColor":"white"}}>
  <img src={props.Compounds.img} className="card-img-top w-100 " alt="..." style={{height: '200px'}}/>
  <div className="card-body">
    <h5 className="card-title">{props.Compounds.name}</h5>
    <p className="card-text">{props.Compounds.description}</p>
    <div className='container w-100'>
    <select className='m-2 h-100 bg-success rounded' onChange={(e)=>{setQty(e.target.value)}}>
        {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            )
        })}
    </select>
    <select className='m-2 h-100 bg-success rounded'  ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>
        {priceOption.map((dt)=>{
          return <option key={dt} value={dt}>{dt}</option>
        })}
    </select>
    <div className='d-inline h-100 fs-5'>
      ₹{Finalprice}/-
    </div>
    </div>
  </div>
  <hr/>
  <div className='btn btn-success m-3' onClick={handleAddToCart}>Add to Cart</div>
</div>
    </div>
  )
}

export default Card
