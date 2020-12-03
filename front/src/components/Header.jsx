import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <FavoriteIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          BosoBoso
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
