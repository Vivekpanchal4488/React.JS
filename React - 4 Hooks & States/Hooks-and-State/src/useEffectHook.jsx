import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

const useEffectHook = () => {
  const [num, setnum] = useState(0);
  const [color, setColor] = useState(0);

  //   Case 1 :- Run on every render
  useEffect(() => {
    alert("Run on every render");
  });
  //   Case 2 :- Run only on first render
  useEffect(() => {
    alert("Welcome To React World");
  }, []);

  // Case 3 :- Run when certain values changes
  useEffect(() => {
    alert("Color was changed");
    setColor(color + 1);
  }, [num]);

  return (
    <>
      <Navbar color={"nayv" + "blue" + color} />
      <div className="num">App is {num}</div>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default useEffectHook;
