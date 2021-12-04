import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const FormDialog = ({ todoText, changeText, open, close }) => {
  const [todo, setTodo] = useState(todoText);

  const handleCancel = () => {
    close();
  };

  const handleChange = () => {
    close();
    changeText(todo);
  };

  return (
    <div>
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
