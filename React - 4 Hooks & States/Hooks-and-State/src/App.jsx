import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  //Batch update
  const btnclick=()=>{
    setCount(prev => (prev+1));
    setCount(prev => (prev+1));
    setCount(prev => (prev+1));
  }

  return (
    <>
      <h1>The Count is :- {count}</h1>
      <div className="btn">
        <button onClick={()=>{setCount(count+1)}} className="btn">Increase Count</button>
        <button onClick={()=>{setCount(count-1)}} className="btn">Decrease Count</button>
        <button onClick={()=>{setCount(count+5)}} className="btn">Jump by 5</button>
      </div>
    </>
  );
};

export default App;
