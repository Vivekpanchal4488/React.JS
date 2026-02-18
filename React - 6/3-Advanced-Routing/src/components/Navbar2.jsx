import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar2 = () => {
     const navigate = useNavigate()

  return (
    <div className='flex justify-center bg-cyan-600 overflow-hidden'>
      <button onClick={()=>{
        navigate('/')
      }} className= 'font-medium bg-orange-600  px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className= 'font-medium bg-orange-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
      <button onClick={()=>{
        navigate(+1)
      }} className= 'font-medium bg-orange-600 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2
