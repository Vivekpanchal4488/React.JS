import React from "react";

const Events = () => {
    const click = ()=>{
        alert("Button Clicked");
    }

  return (
    <>
      <div>
        <button onClick={click}>Click Me</button>
      </div>
      <div className="mouseover">
        I am Mouse Over Event
      </div>
    </>
  );
};

export default Events;
