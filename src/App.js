import { Container, Grid } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

import './App.css';
import { ASTEROID_DETAIL_URL, RANDOM_ASTEROID_URL } from './assets/constants/api';
import AsteroidDetails from './components/asteroid-details';
import AsteroidForm from './components/asteroid-form';

const App = () => {

  const [asteroid, setAsteroid] = useState(); // set asteroid details fetched from the API
  const [loading, setLoading] = useState(false); // set loading while API call is going on
  const [errorMessage, setErrorMessage] = useState(); // set the error message, if anything goes wrong with API call

  // to get the asteroid details by ID
  const getAsteroidDetail = (id) => {
    setLoading(true);
    setErrorMessage(null);
    axios.get(ASTEROID_DETAIL_URL(id)).then(({ data }) => {
      setAsteroid(data);
    }).catch(err => {
      setError("Please try diff asteroid ID!");
    }).finally(() => {
      setLoading(false);
    });
  }

  // to get the the list of asteroids
  const getAsteroids = () => {
    setLoading(true);
    setErrorMessage(null);
    axios.get(RANDOM_ASTEROID_URL()).then(({ data }) => {
      // getting asteroids
      const { near_earth_objects: asteroids } = data;
      if (asteroids.length) {
        // get random asteroid from list we get
        getAsteroidDetail(getRandom(asteroids));
      }
    }).catch(err => {
      setError("Sorry, Something went wrong!");
    }).finally(() => {
      setLoading(false);
    });
  }

  // setting up error message
  const setError = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 6000);
  }

  const getRandom = (asteroids = []) => {
    const randomIndex = Math.floor(Math.random() * asteroids.length);
    return asteroids[randomIndex].id;
  }

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <AsteroidForm getAsteroids={getAsteroids} getAsteroidDetail={getAsteroidDetail} loading={loading} errorMessage={errorMessage}></AsteroidForm>
        </Grid>
        <Grid item xs={9}>
          <AsteroidDetails asteroid={asteroid}></AsteroidDetails>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
