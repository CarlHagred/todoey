import React, { useState } from "react";

const ToDoForm = ({ callback }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(todo);
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </>
  );
};

export default ToDoForm;
