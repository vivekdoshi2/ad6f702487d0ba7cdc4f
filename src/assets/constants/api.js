const API_KEY = 'gDCXdCxFlmvGbhgLi4ufArpsooJgFEuQal8qsBXf';
const BASE_URL = 'https://api.nasa.gov/';

const ASTEROID_DETAIL_URL = (id) => `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`
const RANDOM_ASTEROID_URL = () => `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`

export { ASTEROID_DETAIL_URL, RANDOM_ASTEROID_URL };