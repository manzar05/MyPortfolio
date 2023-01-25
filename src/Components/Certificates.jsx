import React from 'react'
import Java from '../image/java.png'
import C from '../image/c.png'
import C1 from '../image/c++.png'
import Python from '../image/python.png'
import Html from '../image/html.png'
import Javac from '../Components/Java.pdf'
import Cc from '../Components/C.pdf'
import Cppc from '../Components/Cpp.pdf'
import Pythonc from '../Components/Python.pdf'
import Htmlc from '../Components/HTML.pdf'
import {motion} from 'framer-motion'
const Certificates = () => {
    const transition = {duration: 4, type: 'spring'}
  return (
    <div className="certificate" id='Certificates'>
        <div className="c-left">
            <span style={{color: "black"}}>My</span>
            <span className='cert'>Certificates</span>
        </div>
        <div className="c-right">
            <div className="main-circle">
                <motion.div 
                initial={{left:'-1rem', top:'13rem'}}
                whileInView={{left: '-1rem', top:'10rem' }}
                transition={transition}
                className="sec-circle" style={{ top: '10rem', left: '-1rem'}}>               
                    <a href={Javac}><img src={Java} alt="" /></a>
                </motion.div>
                <motion.div 
                initial={{left:'7rem', top:'20rem'}}
                whileInView={{left: '7rem', top:'23rem' }}
                transition={transition}
                className="sec-circle" style={{ top: '23rem', left: '7rem'}}>
                <a href={Cc}> <img src={C} alt="" /></a>
                </motion.div>
                <motion.div 
                initial={{left:'14rem', top:'12rem'}}
                whileInView={{left: '14rem', top:'10rem' }}
                transition={transition}
                className="sec-circle" style={{ top: '10rem', left: '14rem'}}>
                <a href={Cppc}> <img src={Html} alt="" /></a> 
                </motion.div>
                <motion.div 
                initial={{left:'22rem', top:'20rem'}}
                whileInView={{left: '22rem', top:'23rem' }}
                transition={transition}
                className="sec-circle"style={{ top: '23rem', left: '22rem'}}>
                <a href={Pythonc}> <img src={C1} alt="" /></a>
                </motion.div>
                <motion.div 
                initial={{left:'27rem', top:'12rem'}}
                whileInView={{left: '27rem', top:'10rem' }}
                transition={transition}
                className="sec-circle" style={{ top: '10rem', left: '27rem'}}>
                <a href={Htmlc}><img src={Python} alt="" /></a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Certificates