import React from 'react'
import Glass from '../image/glassesimoji.png';
import Instagram from '../image/instagram.png';
import Facebook from '../image/facebook.png';
import LinkedIn from '../image/linkedin.png';
import Github from '../image/github.png';
import Resume from '../Components/resume.pdf';
import User from '../image/user.png';
import Floatingdiv from './Floatingdiv';
import {motion} from 'framer-motion';

const Intro = () => {
const transition = {duration :2, type: 'spring'}
const transition2 = {duration :5, type: 'spring'}

  return (
    <div className="intro" id='About'>
      <div className="i-left">
      <motion.img 
      initial={{left: '4rem', top:'5rem' }}
      whileInView={{left:'7rem', top:'2rem'}}
      transition={transition}
      
      className='img' src={Glass} style={{width:'100px', height:'90px' }} alt="" />
      <img src={User} className='user' style={{height:'835px' }} alt="" />
      <motion.div
      initial={{left:'30px', top:'130px'}}
      whileInView={{left: '390px', top:'400px' }}
      transition={transition2}
      style={{position: 'absolute',left:'30px', top:'130px' }}
      >
      <Floatingdiv/>
      </motion.div>
      <div className="social-media">
      <a href='https://www.instagram.com/manzar_05/' target={'_blank'} rel="noreferrer"><img src={Instagram} style={{width:'50px', height:'50px' }} alt="" /></a>
      <a href='https://www.facebook.com/manzar.imam.94849' target={'_blank'} rel="noreferrer"><img src={Facebook} style={{width:'50px', height:'50px' }} alt="" /></a>
      <a href='https://www.linkedin.com/in/manzar-imam-302154234' target={'_blank'} rel="noreferrer"><img src={LinkedIn} style={{width:'50px', height:'50px' }} alt="" /></a>
      <a href='https://github.com/manzar05' target={'_blank'} rel="noreferrer"><img src={Github} style={{width:'50px', height:'50px' }} alt="" /></a>
      
      </div>
      <div className="blur" style={{background:"rgb(255,255,255)"}}></div>
      </div>
      <div className="blur" style={{background:"#0e3160", zIndex: '-1'}}></div>
      <div className="i-right">
          <span className='p'>Hii, I am </span>
          <span>MANZAR IMAM</span>
          <p>I am a Software Engineer, recently completed my MCA at <span>JAMIA HAMDARD.</span> I enjoy coding. Concerning my talents, I have a good grasp of <span>C, C++, and core Java,</span> as well as a good grasp of <span> HTML, CSS, ReactJS,</span> and <span> JavaScript.</span>
          </p>
          <a href={Resume} target={'_blank'} rel="noreferrer">
          <button className='button'>Download CV</button>
          </a>
      </div>
      
    </div>
  )
}

export default Intro