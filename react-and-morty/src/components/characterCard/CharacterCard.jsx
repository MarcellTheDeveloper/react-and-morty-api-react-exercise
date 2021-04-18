import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CharacterSingleCard from '../characterCardSingle/CharacterSingleCard';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '200px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '200px',
    height: '200px',
  },
  switch: {
    margin: '10px',
  },
}));

export default function CharacterCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { name, image, species, created, gender, origin, status, type } = props;

  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setShow(!show);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {species}
          </Typography>
        </CardContent>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                color='primary'
                style={{ color: '#ffbe6aff' }}
                className={classes.switch}
                checked={state.checkedA}
                onChange={handleChange}
                name='checkedA' />
            }
            label='More info'
          />
        </FormGroup>
        {show && <CharacterSingleCard {...props} />}
      </div>
      <CardMedia className={classes.cover} image={image} />
    </Card>
  );
}
