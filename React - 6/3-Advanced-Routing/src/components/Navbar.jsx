import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex py-4 px-8 items-center bg-cyan-700 justify-between'>
      <h2 onClick={()=>{navigate('/')}} className='text-2xl font-bold cursor-pointer'>Vivek</h2>
      <div className='flex gap-10'>
          <Link className='text-lg font-medium' to="/">Home</Link>
          <NavLink className='text-lg font-medium' to="/about">About</NavLink> 
          <Link className='text-lg font-medium' to="/courses">Courses</Link> 
          <Link className='text-lg font-medium' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
