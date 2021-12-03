import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const FormDialog = ({ todoText, changeText }) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState(todoText);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(false);
    changeText(todo);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Change text</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="name"
            label="New text"
            value={todo}
            variant="standard"
            onChange={(e) => setTodo(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleChange}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
