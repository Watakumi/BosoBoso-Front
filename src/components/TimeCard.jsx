import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from './CountDown';
import TimeCardUpdateFormDialog from './TimeCardUpdateFormDialog';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const TimeCard = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      {/* <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" /> */}
      <CardContent className={classes.cardContent}>
        {/* <Typography>{new Date(props.createdAt).toLocaleString()}</Typography> */}
        <Countdown endTime={new Date('12/25/2020').getTime()} />
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" onClick={handleOpen}>
          Edit
        </Button>
        <TimeCardUpdateFormDialog open={open} onClick={handleClose} description={props.description} id={props.id} />
      </CardActions>
    </Card>
  );
};

export default TimeCard;
