import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by", title);
    setTitle('');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          // onChange={(e) => {
          //   console.log("inputing...", e.target.value);
          // }}
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
