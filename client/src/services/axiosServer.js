import axios from 'axios';

const serverApi = axios.create({
  baseURL: '',
});

export default serverApi;
