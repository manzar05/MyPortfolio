import React from 'react'
import Graduation from '../image/graduation.png'
const Floatingdiv = () => {
  return (
    <div className="floating">
        <img src={Graduation} style={{width: '40px'}}alt="" />
        <div className='course'>
        <span style={{fontSize: '16px', fontWeight: 'bold'}}>MCA - 2023</span>
        <span style={{fontSize: '14px', fontFamily:'Exo'}}>Jamia Hamdard</span>
        </div>
    </div>
  )
}

export default Floatingdiv