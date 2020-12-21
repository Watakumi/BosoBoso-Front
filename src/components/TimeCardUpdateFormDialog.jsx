import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import * as CardMutation from './CardMutation';

export default function TimeCardCreateFormDialog({ open, onClick, description, id }) {
  const { handleSubmit, control, errors } = useForm();
  const [postUpdate] = useMutation(CardMutation.UPDATE_CARD);
  return (
    <div>
      <Dialog open={open} onClose={onClick} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Card</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit((data) => {
              postUpdate({ variables: { id: id, description: data.description } });
              onClick();
            })}
          >
            <Controller
              as={TextField}
              control={control}
              defaultValue={description}
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
              UPDATE
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClick} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
