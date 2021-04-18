import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { useLocations } from '../../api/useData';
import LocationCard from '../locationCard/locationCard';
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

const LocationList = () => {
  //UNDEFINED ERROR HANDLING AND PAGINATION
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const locations = useLocations(page);
  //UNDEFINED ERROR HANDLING AND MAPPING CARDS
  let newLocList = '';
  let pageCount = '';

  if (locations !== undefined && locations !== 'Loading...') {
    pageCount = locations.info.pages;
    newLocList = locations.results.map((item) => (
      <Grid key={item.id} item xs={4}>
        <LocationCard {...item} />
      </Grid>
    ));
  }

  return (
    <>
      <Grid container spacing={5}>
        {newLocList}
      </Grid>
      <div className={classes.pagination}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          style={{ marginTop: '15px' }}
        />
      </div>
    </>
  );
};

export default LocationList;
