import React from 'react'
import './nav.css'
import {useEffect, useState} from 'react'

const Nav = () => {

    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://www.nextbigbrand.in/wp-content/uploads/2020/01/net-1.png"
            />
            <img
                className="nav__avatar"
                src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            />
        </div>
    )
}

export default Nav
