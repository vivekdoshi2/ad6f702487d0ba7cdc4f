import React from 'react';

const AsteroidDetails = ({ asteroid }) => {

    return asteroid ? <div>
        <h2> Asteroid #{asteroid.id}</h2>
        {/* <strong> ID : </strong> {asteroid.id} <br /> */}
        <strong> Name : </strong> {asteroid.name} <br />
        <strong> Link : </strong><a href={asteroid.nasa_jpl_url} target="_blank">{asteroid.nasa_jpl_url}</a> <br />
        <strong> Is Potentially Hazardous Asteroid : </strong>{asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
    </div> : <div>
            Please provide the Asteroid ID
    </div>
}

export default AsteroidDetails;