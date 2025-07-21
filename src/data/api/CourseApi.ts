import axios from 'axios';

const getApiCall = axios.create({
  baseURL: 'https://learn-api.kodekloud.com/api/',
});

export default getApiCall;
