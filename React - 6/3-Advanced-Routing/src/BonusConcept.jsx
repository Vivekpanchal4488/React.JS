import React, { useState } from 'react'
import Navbar from './Bonus-Concept/Navbar';

const BonusConcept = () => {
    const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1 >Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default BonusConcept;
