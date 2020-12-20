import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
export default function TimeCardCreateFormDialog() {
  const [open, setOpen] = React.useState(false);
  const { handleSubmit, control, errors } = useForm();

  const CREATE_CARD = gql`
    mutation($description: String!) {
      postCreate(input: { description: $description }) {
        post {
          id
          description
        }
      }
    }
  `;

  const [postCreate] = useMutation(CREATE_CARD);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Card</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => {
              postCreate({ variables: { description: data.description } });
              handleClose();
            })}
          >
            <Controller
              as={TextField}
              control={control}
              defaultValue=""
              multiline
              rows={6}
              fullWidth
              label="Description"
              name="description"
              rules={{ required: true }}
              variant="outlined"
              error={errors.description}
              helperText={errors.description && 'Your input is required'}
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
