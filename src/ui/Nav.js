import React, { useEffect, useState } from 'react';
import './Nav.css';

export const Nav = ()=>{
    const [show, setShow ] = useState(false);
    
    useEffect( ()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setShow(true);
            }else{
                setShow(false);
            }
        })

        return()=>{
            window.removeEventListener('scroll');
        }
    },[]);
    return(
        <div className={`nav ${ show && 'nav_black'}`}>
            <img className="nav__logo"
                src="https://www.comunicare.es/wp-content/uploads/2021/02/AAAABehOTchGBzMHTE3mLBCV9gGFD7NBG_vFC8Vw5vhhiW5Zh4CYgWjbPenhUhL1a8fK7Kw1Ta8mPpAU-Pqx-_brAXccWjmO-W1FHwnG.png"
                alt="Netflix logo"/>

            <img className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
                alt="Netflix logo"/>
        </div>
    )
}