import React from 'react'

const App = () => {

  localStorage.setItem("user", "Vivek")
  localStorage.setItem("age", "21")
  localStorage.removeItem("age")

  const userN = {
    username: "Vivek",
    age: 21,
    city: "Bidar"
  }
  console.log(userN);
  localStorage.setItem("userN",JSON.stringify(userN))

  const user = localStorage.getItem("user")
  const age = localStorage.getItem("age")
  console.log(user,age);
  

  return (
    <div>
      App
    </div>
  )
}

export default App
