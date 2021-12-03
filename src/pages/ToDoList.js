import React, { useState } from "react";
import { Typography, Grid } from "@mui/material";
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

  const changeToDo = (index, newText) => {
    const replacement = [...toDoList];
    replacement[index] = newText;
    setToDoList(replacement);
  };

  return (
    <Grid container justifyContent="center">
      <div>
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
              changeCallBack={() => changeToDo(index)}
            />
          );
        })}
      </div>
    </Grid>
  );
};

export default ToDoList;
