//import './App.css';
import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (todo) => {
    setToDoList([...toDoList, todo]);
  };

  return (
    <div className="App">
      <ToDoForm callback={handleSubmit} />
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};

export default App;
