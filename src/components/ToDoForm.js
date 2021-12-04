import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const ToDoForm = ({ callback }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.length < 1) return;
    callback(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </>
  );
};

export default ToDoForm;
