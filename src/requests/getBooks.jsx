import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getBooks = () => {
  return axiosInstance.get('/book');
};