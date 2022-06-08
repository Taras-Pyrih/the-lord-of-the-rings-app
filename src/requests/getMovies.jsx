import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getMovies = () => {
  return axiosInstance.get('/movie');
};