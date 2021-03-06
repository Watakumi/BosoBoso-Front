import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import TimeCardCreateFormDialog from './TimeCardCreateFormDialog';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const HeroContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Welcome To BosoBoso
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Enjoy!
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Sign In
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Sign Up for free
              </Button>
            </Grid>
            <Grid item>
              <TimeCardCreateFormDialog />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default HeroContent;
