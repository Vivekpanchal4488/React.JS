import React from 'react'

const Navbar = (props) => {
    function changeTheme(){
        console.log('Changed');
        props.setTheme('Dark')
    }
    function double(){
        console.log('Double Clicked');
        props.setTheme('Light')
    }

  return (
    <div className='flex justify-center mt-80'>
        <button onDoubleClick={double} onClick={changeTheme} className=' border border-2 px-2 py-2 bg-purple-300 cursor-pointer'>Change Theme</button>
    </div>
  )
}

export default Navbar
