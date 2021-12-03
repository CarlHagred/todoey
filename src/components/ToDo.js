import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import FormDialog from "./FormDialog";

const ToDo = ({ todo, deleteCallBack, changeCallBack }) => {
  return (
    <>
      <Typography variant="h3" color="text.primary">
        {todo}
      </Typography>
      <FormDialog todoText={todo} changeText={changeCallBack} />
      <Button variant="contained" onClick={deleteCallBack}>
        Delete
      </Button>
    </>
  );
};

export default ToDo;
