import React from 'react';
import { useCharacters, useLocations } from './api/useData';
import RickAndMortyApp from './components/landingPage/RickAndMortyApp';
function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);
  return (
    <>
      <RickAndMortyApp />
    </>
  );
}

export default App;
