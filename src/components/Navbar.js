import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex space-x-4 font-bold justify-center bg-gradient-to-r from-sky-500 to-indigo-500" >

        <NavLink to="/" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Home</NavLink>

        <NavLink to="/registrationform" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Registration Form</NavLink>

        <NavLink to="/loginform" className={({isActive})=>`${isActive ? "text-white" : "text-black"}`}>Login form</NavLink>

    </div>
  )
}

export default Navbar