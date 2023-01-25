import React from 'react'

const Cards = (props) => {
  return (
    <div className="card">
        <img src={props.image} style={{width:'50px', height:'50px' }} alt="" />
        <span>{props.text}</span>
        <p>{props.text2}</p>
        <button className='button'>Learn More</button>

    </div>
  )
}

export default Cards