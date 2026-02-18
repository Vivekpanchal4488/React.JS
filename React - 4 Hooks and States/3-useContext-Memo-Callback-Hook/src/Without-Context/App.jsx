import React, { useState } from "react";
import Navbar from "./components/Navbar";
const App = () => {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar count={count} />
      <div>
        <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
      </div>
    </>
  );
};

export default App;
