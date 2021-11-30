import React from "react";
import Button from "@mui/material/Button";

const ToDo = ({ todo, deleteCallBack }) => {
  return (
    <>
      <p>{todo}</p>
      <Button variant="contained" onClick={deleteCallBack}>
        Delete
      </Button>
    </>
  );
};

export default ToDo;
