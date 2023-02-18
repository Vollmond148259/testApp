import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCommentForm() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        add comment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Comments should not contain swear words, please remember this
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="comment"
            type="text"
            fullWidth
            multiline
            maxRows={6}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
