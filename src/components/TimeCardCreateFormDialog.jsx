import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from 'react-hook-form';

export default function TimeCardCreateFormDialog() {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Card</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              as={TextField}
              control={control}
              defaultValue=""
              fullWidth
              label="First name"
              name="FirstName"
            />
            <Controller
              as={TextField}
              control={control}
              defaultValue=""
              multiline
              rows={6}
              fullWidth
              label="Second name"
              name="SecondName"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
