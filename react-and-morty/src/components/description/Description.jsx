import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Description = () => {
  const useStyles = makeStyles((theme) => ({
    descText: {
      marginTop: '50px',
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <Typography variant='body1' className={classes.descText}>
      This site is going to show you all the characters from the Rick and Morty
      show. You just need to sort them by characters or location. Click on the
      buttons.
    </Typography >
  );
};

export default Description;
