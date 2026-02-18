import React, { useState } from "react";

const Events = () => {
  const [name, setName] = useState("");

  const click = () => {
    alert("Button Clicked");
  };
  const mouseover = () => {
    console.log("Move Over");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submmited by", name);
    setName('')

  };

  return (
    <>
      <div className="">
        <button onClick={click}>Click Me</button>
      </div>
      <div className="mouseover" onMouseOver={mouseover}>
        I am Mouse Over Event
      </div>

      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Events;
