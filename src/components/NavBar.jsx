import React, { useEffect, useState } from 'react'
import './NavBar.css'

function NavBar() {
    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-slide'} nav`}>
        <img style={{width:'150px'}} src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="" />
    </div>
  )
}

export default NavBar