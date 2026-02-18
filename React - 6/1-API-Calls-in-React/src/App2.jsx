import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App2 = () => {
    const [theme, setTheme] = useState("light")
  return (
    <div>
      <Navbar theme={theme}/>
    </div>
  )
}

export default App2
