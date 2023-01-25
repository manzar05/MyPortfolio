import React from 'react'

const Contact = () => {
  return (
    <div className="contact" id='Contact-me'>
    <div className="contact-left">
      <span style={{ color: "#021338", fontSize: '60px',fontWeight:'bold' }}>Contact</span>
      <span style={{ color: "black" , fontSize: '60px',fontWeight:'bold'}}>Me</span>
    </div>
    <div className="contact-right">
      <form action="">
        <label htmlFor=""></label>
        <input type="text" placeholder='Enter your Name'/>
        <input type="email" placeholder='Email'/>
        <input type="tel" placeholder='Mobile No'/>
        <textarea name="" id="" cols="20" rows="7" placeholder='Enter Query'/>
        <button className='button btn-contact'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact