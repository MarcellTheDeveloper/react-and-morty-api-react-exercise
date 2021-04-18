import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useCharacters } from '../../api/useData';
import CharacterCard from '../characterCard/CharacterCard';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pagination: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
}));

const CharacterList = () => {
  //UNDEFINED ERROR HANDLING AND PAGINATION
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const characters = useCharacters(page);
  //UNDEFINED ERROR HANDLING AND MAPPING CARDS
  let newCharList = '';
  let pageCount = '';

  if (characters !== undefined && characters !== 'Loading...') {
    pageCount = characters.info.pages;
    newCharList = characters.results.map((item) => (
      <Grid key={item.id} item xs={4}>
        <CharacterCard {...item} />
      </Grid>
    ));
  }

  return (
    <>
      <Grid container spacing={5}>
        {newCharList}
      </Grid>
      <div className={classes.pagination}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange} style={{ marginTop: '15px' }} />
      </div>
    </>
  );
};

export default CharacterList;
