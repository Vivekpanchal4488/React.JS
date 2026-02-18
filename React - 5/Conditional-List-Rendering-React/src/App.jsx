import React, { useState } from "react";

const App = () => {
  const [showbtn, setShowbtn] = useState(true);

  // List Rendering
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am good TODO",
    },
    {
      title: "Hey 2",
      desc: "I am good TODO 22 ",
    },
    {
      title: "Hey 3 ",
      desc: "I am good TODO 333",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
      <div className="border border-2 m-4  p-0 border-purple-400">
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>
      </>
    );
  };

  return (
    <>
      <div className="text-center">
        {/* {showbtn ? <button className="border-2 cursor-pointer rounded p-2 m-50 ">I will be Shown only when second button is clicked</button> : " NULL >>>"} */}

        {showbtn && (
          <button className="border-2 cursor-pointer rounded p-2 m-10 ">
            I will be Shown only when second button is clicked
          </button>
        )}

        {/* List Rendering  */}
        {todos.map((todo) => {
          return <Todo key={todo.title} todo={todo} />;
        })}
      </div>
    </>
  );
};

export default App;
