import React, { useState, useCallback } from "react";
import Navbar from "./componentscallback/Navbar";

const useCallbackHook = () => {
  const [count, setCount] = useState(0);
  const [adjective, setAdjective] = useState("good");

//   const getAdjective=() => { // without useCallback
//     return "another " + count 
//   }

  const getAdjective = useCallback(() => { //with useCallback
    return "another " + count ;
  }, [count]); // lock the function until count gets changes

  return (
    <div>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  );
};

export default useCallbackHook;
