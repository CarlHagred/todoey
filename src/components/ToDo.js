import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const ToDo = ({ todo, deleteCallBack }) => {
  return (
    <>
      <Typography variant="h3" color="text.primary">
        {todo}
      </Typography>
      <Button variant="contained" onClick={deleteCallBack}>
        Delete
      </Button>
    </>
  );
};

export default ToDo;
