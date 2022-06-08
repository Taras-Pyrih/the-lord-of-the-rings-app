import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getChapters = () => {
  return axiosInstance.get('/chapter');
};