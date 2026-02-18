import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
  return (
      <div className="navv">
        <h3>Vivek</h3>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar2
