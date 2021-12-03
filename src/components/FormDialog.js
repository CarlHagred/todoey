import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
