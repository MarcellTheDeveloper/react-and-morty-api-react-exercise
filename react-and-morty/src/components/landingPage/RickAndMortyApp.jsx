import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../image/logo.png';
import Svg from '../../image/spaceship.png';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import CharacterList from '../characterList/CharacterList';
import LocationList from '../locationList/locationList';
import Description from '../description/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  container2: {
    maxWidth: '1920px !important',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    position: 'relative',
    top: '20px',
  },
  button: {
    margin: '20px',
    width: '130px',
    backgroundColor: '#7cd51bff',
  },
  buttonRight: {
    margin: '20px',
    width: '130px',
    border: '1px solid black',
    animation: 'turn 0.7s linear',
    animationFillMode: 'forwards',
    animationDelay: '7.2s',
  },
  spaces: {
    animation: 'spaces 15s linear infinite',
    right: '0',
    zIndex: '-1',
  }
}));

export default function RickAndMortyApp() {
  const classes = useStyles();

  const [charList, setCharList] = useState('');
  const [locList, setLocList] = useState('');
  const [desc, setDesc] = useState(<Description />);

  const showCharacterList = () => {
    setDesc('');
    setLocList('');
    setCharList(<CharacterList />);
  };

  const showLocationList = () => {
    setDesc('');
    setCharList('');
    setLocList(<LocationList />);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container} component='div'>
        <img src={Img} className={classes.img} alt='logo'></img>
      </Container>
      <Container className={classes.container} component='div'>
        <Button
          className={classes.button}
          variant='contained'
          color='secondary'
          onClick={showCharacterList}>
          Characters
        </Button>
        <Button className={classes.buttonRight} variant='outlined'
          color='secondary' onClick={showLocationList}>
          Locations
        </Button>
      </Container>
      <img src={Svg} alt="spacecraft" style={{ position: 'absolute', width: '40px' }} className={classes.spaces}></img>
      <Container className={classes.container2}>
        {desc}
        {charList}
        {locList}
      </Container>
    </div >
  );
}
