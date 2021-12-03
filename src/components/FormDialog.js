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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    changeText();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change text
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change text</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New text"
            fullWidth
            helperText={todoText}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
