import axios from 'axios';

const serverApi = axios.create({
  baseURL: 'http://localhost:4000',
});

export default serverApi;
