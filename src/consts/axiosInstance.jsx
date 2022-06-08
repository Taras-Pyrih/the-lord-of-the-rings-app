import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  headers: {
     'Authorization': 'Bearer l0MzKjKW4CgFI-Qq_T-G'
  }
});