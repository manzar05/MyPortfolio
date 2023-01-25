import React from 'react'
import Heart from '../image/heartemoji.png'
import Glasses from '../image/glasses.png'
import Humble from '../image/humble.png'
import Cards from './Cards.jsx'
import {motion} from 'framer-motion';
const Experience = () => {
  const transition = {duration :3, type: 'spring'}
  return (
    <div className="experience" id='My-skills'>
        <div className="e-left">
            <span>My</span>
            <span className='skill'>Skills</span>
        </div>
        <div className="e-right">
        <motion.div 
        initial={{left:'17rem', top:'1rem'}}
        whileInView={{left: '13rem', top:'1rem' }}
        transition={transition}
        style={{position:'absolute', top: '1rem', left:'13rem'}}>
        <Cards image={Glasses} text={'Programming Language'} text2={'C, C++, Java'} />
      </motion.div>
      <motion.div 
      initial={{left:'-4rem', top:'14rem'}}
      whileInView={{left: '-2rem', top:'14rem' }}
      transition={transition}
      style={{position:'absolute', top: '14rem', left:'-2rem' }}>
        <Cards image={Heart} text={'Front-End '} text2={'HTML, CSS, JavaScript, ReactJS'} />
      </motion.div>
      <motion.div 
      initial={{left:'17rem', top:'21rem'}}
      whileInView={{left: '15rem', top:'18rem' }}
      transition={transition}
      style={{position:'absolute', top: '18rem', left:'15rem'}}>
        <Cards image={Humble} text={'Back-End'} text2={'NodeJS, MySQL'} />
      </motion.div>
      
        </div>
    </div>
  )
}

export default Experience