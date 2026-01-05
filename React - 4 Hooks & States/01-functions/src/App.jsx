import React from "react";

const App = () => {
  function inputChanging(val) {
    console.log(val);
  }

  const pagescroll = (elem)=>{
    if(elem > 0){
      console.log("Seedha Scroll");
    }
    else{
      console.log("Ulta Scroll");
    }
  }

  return (
    <div>
      <h1>Hi, Vivek</h1>
      <button
        onClick={function () {
          console.log("Hey clicked");
        }}
      >
        Click me
      </button>

      {/* OR -- Arrow Function*/}

      {/* <button
        onClick={()=>{
          console.log("Hey clicked");
        }}>
        Click me
      </button> */}

      <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />

      <div onMouseMove={(elem)=>{       
        console.log(elem.clientX);
      }} className="box"></div>


      <div onWheel={(elem)=>{
        pagescroll(elem.deltaY);
        (elem.deltaY);
      }}>
        <div className="page1">Page 1</div>
        <div className="page2">Page 2</div>
        <div className="page3">Page 3</div>
      </div>

    </div>
  );
};

export default App;
