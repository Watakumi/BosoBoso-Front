import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useQuery } from '@apollo/react-hooks';
import * as CardQuery from './CardQuery';
import TimeCard from './TimeCard';

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
const CardList = () => {
  const { data } = useQuery(CardQuery.POSTS_WITH_EXTENDED_TIMES, {});

  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {data &&
          data.posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <TimeCard
                id={post.id}
                description={post.description}
                createdAt={post.createdAt}
                sumExtendedTimes={post.sumExtendedTimes}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default CardList;
