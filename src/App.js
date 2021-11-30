//import './App.css';
import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (todo) => {
    setToDoList([...toDoList, todo]);
  };

  const deleteToDo = (index) => {
    const replacement = [...toDoList];
    replacement.splice(index, 1);
    setToDoList(replacement);
  };

  return (
    <div className="App">
      <h1>TODOEY</h1>
      <ToDoForm callback={handleSubmit} />
      {toDoList.map((todo, index) => {
        return (
          <ToDo
            key={index}
            todo={todo}
            deleteCallBack={() => deleteToDo(index)}
          />
        );
      })}
    </div>
  );
};

export default App;
