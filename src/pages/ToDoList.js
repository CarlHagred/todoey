import React, { useState } from "react";
import Typography from "@mui/material/Typography";

import ToDo from "./../components/ToDo";
import ToDoForm from "./../components/ToDoForm";

const ToDoList = () => {
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

export default ToDoList;
