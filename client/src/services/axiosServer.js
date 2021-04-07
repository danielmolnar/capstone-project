import axios from 'axios';

const dataBase = axios.create({
  baseURL: 'http://localhost:4000',
});

export default dataBase;
