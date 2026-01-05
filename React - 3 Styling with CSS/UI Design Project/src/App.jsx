import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1766226084092-7c9e1c52e14c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro: "",
      color:'royalblue',
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661575250532-dfd08d2fc03e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      color:'lightseagreen',
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1652957465310-a5c2cfb1d844?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3RpdmV8ZW58MHwxfDB8fHww",
      intro: "",
      color:'royalblue',  
      tag: "Underbanked",
    },
    {
      img:"https://images.unsplash.com/photo-1660145177383-e6e2c22adb5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RpdmV8ZW58MHwxfDB8fHww",
      intro: "",
      color:'pink',
      tag: "Dissatisfied",
    }
  ];

  return (
    <>
      <div>
        <Section1 users={users} />
        {/* <Section2 /> */}
      </div>
    </>
  );
};

export default App;
