import { axiosInstance } from '../consts/axiosInstance.jsx';

export const getQuotes = (currentPage, perPage) => {
  return axiosInstance.get(`/quote?page=${currentPage}&limit=${perPage}&sort=dialog:desc`);
};