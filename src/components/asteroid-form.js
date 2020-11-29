import React, { useEffect, useState } from 'react';
import { Button, Grid, Snackbar, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';


const AsteroidForm = ({ getAsteroids, getAsteroidDetail, loading, errorMessage }) => {

    const [asteroidID, setAsteroidID] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (errorMessage) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [errorMessage])

    return <form noValidate autoComplete="off">
        <Grid container direction="column" spacing={3} alignItems="center">
            <Grid item>
                <TextField id="standard-basic" placeholder="Enter Asteroid ID" label="Asteroid ID" value={asteroidID} onChange={(e) => setAsteroidID(e.target.value)} />
            </Grid>
            <Grid item>
                <Button type="button" variant="contained" color="primary" disabled={!asteroidID.trim() || loading} onClick={() => getAsteroidDetail(asteroidID)}>
                    Submit
                </Button>
            </Grid>
            <Grid item>
                <Button type="button" variant="contained" color="primary" disabled={loading} onClick={() => getAsteroids()}>
                    Random Asteroid
                </Button>
            </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {errorMessage}
            </Alert>
        </Snackbar>

    </form>
}

export default AsteroidForm;