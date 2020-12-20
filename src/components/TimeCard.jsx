import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from './CountDown';

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
  return (
    <Card className={classes.card}>
      {/* <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" /> */}
      <CardContent className={classes.cardContent}>
        <Typography>{props.description}</Typography>
        {/* <Typography>{new Date(props.createdAt).toLocaleString()}</Typography> */}
        <Countdown endTime={new Date('12/25/2020').getTime()} />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default TimeCard;
