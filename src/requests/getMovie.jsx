import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getMovie = _id => {
  return axiosInstance.get(`/movie/${_id}`);
};