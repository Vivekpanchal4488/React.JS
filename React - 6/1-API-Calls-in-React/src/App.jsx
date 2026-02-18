import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  // FUNCTION
  // async function getData(){
  //    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //    console.log(response);
  // }

  // ARROW FUNCTION
  // const getData = async() =>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  //   // console.log(response.json());
  //   const data = await response.json()
  //   console.log(data);
  // }

  // FETCH WITH AXIOS
  // const getData = async()=>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  //   console.log(response);
  // }

  // Lorem Picsum
  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);
    
  }


  return (
    <>
      <div>
        <button onClick={getData}>Get Data</button>
        <div>
          {data.map(function(elem,idx){
            return <h3 >HeLLo, {elem.autor} {idx}</h3>
          })}
        </div>
      </div>
    </>
  )
}

export default App
