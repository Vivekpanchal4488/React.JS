import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { counterContext } from "./context/context";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <counterContext.Provider value={count}> */}
      <counterContext.Provider value={{count, setCount}}>
        <Navbar />
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  );
};

export default App;
