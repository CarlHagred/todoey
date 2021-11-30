//import './App.css';
import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h1" color="text.primary">
        TODOEY
      </Typography>
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
