import React from 'react'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="n-title">
            <span>PortFolio</span>
        </div>
        <div className="n-list">
            <ul>
                <Link spy={true} to='Navbar' smooth={true}>
                <li>Home</li>
                </Link>
                <Link spy={true} to='About' smooth={true}>
                <li>About</li>
                </Link>
                <Link spy={true} to='My-skills' smooth={true}>
                <li>My Skills</li>
                </Link>
                <Link spy={true} to='Certificates' smooth={true}>
                <li>Certificates</li>
                </Link>
                <Link spy={true} to='Projects' smooth={true}>
                <li>Projects</li>
                </Link>
            </ul>
        </div>
        <div className="n-contact">
        <Link spy={true} to='Contact-me' smooth={true}>
            <button className='button btn1'>Contact Me</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar