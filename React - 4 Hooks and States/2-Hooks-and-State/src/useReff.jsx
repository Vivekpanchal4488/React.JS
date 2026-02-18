import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useRef } from "react";

const useReff = () => {
  const [count, setCount] = useState(0);
  // const a = useRef(0);
  const btnref = useRef(0);

  useEffect(() => {
    // a.current = a.current + 1;
    // console.log(`Rerendering and value of a is ${a.current}....`)
    console.log("First Rendering...");
    btnref.current.style.backgroundColor = "red"
  }, []);

  return (
    <>
      <Navbar color={"nayv" + "blue"} />
      <div className="num">App is {count}</div>
      <button ref={btnref} onClick={() => {setCount(count + 1);}}>
        Click
      </button>
    </>
  );
};

export default useReff;
