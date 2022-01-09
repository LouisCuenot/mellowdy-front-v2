import React, { useState } from "react";


import './Navbar.css'
import logoLight from '../../img/logoLight.svg'
import logoDark from '../../img/logoDark.svg'
import moon from '../../img/moonLight.svg'
import sun from '../../img/moonDark.svg'

import {NavLink} from 'react-router-dom'

function Navbar() {

    const [isActive, setActive] = useState("true");
    const [isDark, setDark] = useState(true)

    

    const handleToggle = () => {
        setActive(!isActive);
      };


    const swapLightDark = ()=>{

        setDark(!isDark)

       

        if(isDark===true || isDark==='true'){
            
            document.documentElement.style.setProperty('--bgbody','#21212A')
            document.documentElement.style.setProperty('--textcolor','#FDFCFC')
            document.documentElement.style.setProperty('--divcolor','#2E3643')
            document.documentElement.style.setProperty('--bubblebgcolor','#2E3643')
        }else{
            document.documentElement.style.setProperty('--bgbody','#fdfcfc')
            document.documentElement.style.setProperty('--textcolor','#1D1D1D')
            document.documentElement.style.setProperty('--divcolor','#ffffff')
            document.documentElement.style.setProperty('--bubblebgcolor','#d8eeec')
        }

        

    }

   


    

  return (
    <div id="Navbar">
        <div id="hb-container" onClick={handleToggle} className={!isActive ? "hb-active" : null}>
            <div className='hb-bar'></div>
            <div className='hb-bar'></div>
        </div>
        <NavLink to='/' className='linklogo'>
            <img src={isDark ? logoLight : logoDark} alt="Mellowdy's Logo"/>
        </NavLink>
        
        <div id="menu" className={!isActive ? "menu-active" : null}>
            <a href="https://mellow-dy.tinker.ovh/oauth">Generate a playlist</a>
            <NavLink to='/about'>About us</NavLink>    
            <img src={isDark ? moon : sun} alt="A moon icon" className='desktop-moon' onClick={swapLightDark} />
        </div>

        <img src={isDark ? moon : sun} alt="a moon icon" className='mobile-moon' onClick={swapLightDark}/>
    </div>
  );
}

export default Navbar;