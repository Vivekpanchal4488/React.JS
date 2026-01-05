import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
      console.log("Navbar color is changed");
    
    }, [color])
    

  return (
    <div>
      I am navbar of {color} color ...
    </div>
  )
}

export default Navbar
