import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-end gap-10 py-2 pr-7'>
        <Link className='text-xl font-semibold' to='/product/men' >Men</Link>
        <Link className='text-xl font-semibold' to='/product/women' >Women</Link>
        <Link className='text-xl font-semibold' to='/product/kids' >Kids</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product
