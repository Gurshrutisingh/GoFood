import React from 'react'

function Card() {
  return (
    <div style={{}}>
      <div className="card m-4 " style={{"width":"18rem","backgroundColor":"#181818","color":"white","borderWidth":"1px","borderColor":"white"}}>
  <img src="https://img.freepik.com/premium-photo/paneer-tikka-chilli-paneer-kabab-tandoori-indian-cheese-skewers-served-white-plate-with-colourful-capsicum-onion-with-green-sauce_466689-63487.jpg?w=2000 " className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is Best seller!!</p>
    <div className='container w-100'>
    <select className='m-2 h-100 bg-success rounded'>
        {Array.from(Array(6),(e,i)=>{
            return(
                <option key={i+1} value={i+1}>{i+1}</option>
            )
        })}
    </select>
    <select className='m-2 h-100 bg-success rounded'>
        <option>Half</option>
        <option>Full</option>
    </select>
    <div className='d-inline h-100 fs-5'>
        Total price
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card
