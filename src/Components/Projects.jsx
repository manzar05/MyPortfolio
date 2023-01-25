import React from "react";
import Cardtype2 from "./Cardtype2";
import {motion} from 'framer-motion';
const Projects = () => {
  const transition = {duration: 3, type: 'spring'}
  return (
    <div className="project" id="Projects">
      <div className="p-left">
        <span className="p">Projects</span>
        <span style={{ color: "black" }}>Completed</span>
      </div>
      <div className="p-right">
        <motion.div 
        initial={{left:'-3rem', top:'2rem'}}
        whileInView={{left: '-5rem', top:'2rem' }}
        transition={transition}
        className='p-card' style={{ position: "absolute", top: "2rem", left: "-5rem" }}>
          <Cardtype2
            index="1"
            text=" Space Invader Game"
            lang="Using Python "
          />
            <a href="https://github.com/manzar05/Space-Invader-Beginner" >
              <button className="button btn-p">Click Here</button>
            </a>
        </motion.div>
        <motion.div 
        initial={{left:'5rem', top:'9rem'}}
        whileInView={{left: '7rem', top:'9rem' }}
        transition={transition}
        className='p-card' style={{ position: "absolute", top: "9rem", left: "7rem" }}>
          <Cardtype2
            index="2"
            text="Simple Login Page"
            lang="HTML, CSS"
          />
          <a href="https://github.com/manzar05/LogIn-Page">
              <button className="button btn-p">Click Here</button>
            </a>
        </motion.div>
        <motion.div 
        initial={{left:'-2rem', top:'16rem'}}
        whileInView={{left: '-5rem', top:'16rem' }}
        transition={transition}
        className='p-card' style={{ position: "absolute", top: "16rem", left: "-5rem" }}>
          <Cardtype2
            index="3"
            text="Speech to Text Conversion"
            lang="Python"
          />
          <a href="https://github.com/manzar05/Speech-To-Text-Conversion">
              <button className="button btn-p">Click Here</button>
            </a>
        </motion.div>
        <motion.div 
        initial={{left:'5rem', top:'23rem'}}
        whileInView={{left: '7rem', top:'23rem' }}
        transition={transition}
        className='p-card' style={{ position: "absolute", top: "23rem", left: "7rem" }}>
          <Cardtype2
            index="4"
            text=" Text Converter "
            lang="HTML, CSS, ReactJS"
          />
          <a href="https://github.com/manzar05/tutorial4textconverter">
              <button className="button btn-p">Click Here</button>
            </a>
        </motion.div>
        <motion.div 
        initial={{left:'-2rem', top:'30rem'}}
        whileInView={{left: '-5rem', top:'30rem' }}
        transition={transition}
        className='p-card' style={{ position: "absolute", top: "30rem", left: "-5rem" }}>
          <Cardtype2
            index="5"
            text="Simple Travel Website "
            lang="HTML, CSS"
          />
          <a href="https://github.com/manzar05/Project-1-TravelSite">
              <button className="button btn-p">Click Here</button>
            </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
