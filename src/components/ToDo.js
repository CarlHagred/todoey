import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Typography, Grid, ButtonGroup } from "@mui/material";
import { Delete, Edit } from "@material-ui/icons";

import FormDialog from "./FormDialog";

const ToDo = ({ todo, deleteCallBack, changeCallBack }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2} justify="center" justifyContent="center">
      <Grid item>
        <Typography variant="h5" color="text.primary">
          {todo}
        </Typography>
      </Grid>
      <Grid item>
        <ButtonGroup variant="contained">
          <Button
            variant="outlined"
            endIcon={<Edit />}
            onClick={handleClickOpen}
          />
          <Button
            variant="contained"
            startIcon={<Delete />}
            onClick={deleteCallBack}
          />
        </ButtonGroup>
      </Grid>
      <FormDialog
        todoText={todo}
        changeText={changeCallBack}
        open={open}
        close={handleClickClose}
      />
    </Grid>
  );
};

export default ToDo;
